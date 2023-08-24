import AnnonceChatComponent from "../../components/annonce/annonce-chat/annonce-component/annonceChatComponent";
import Footer from "../../layouts/footer/footer";
import Nav from "../../layouts/header/nav";
import React, { useEffect, useState, useContext } from 'react';
import { AdvertService } from "../../services/advert.services";
import UserContext from '../../../setup/contexts/UserContext';
import { useParams } from "react-router-dom";
import AnnonceMessagesComponent from "../../components/annonce/annonce-chat/message-component/annonceMessagesComponent";

const AnnonceChat = () => {
    const { user } = useContext(UserContext);
    const [myAdverts, setMyAdverts] = useState([]);
    const [selectedAnnonceId, setSelectedAnnonceId] = useState(null);
    const [reloadKey, setReloadKey] = useState(0);

    useEffect(() => {
        if (user.decorateur) {
            // Si c'est un décorateur, récupérer les annonces en fonction de l'ID du décorateur
            AdvertService.getAdvertsByDecoratorId(user.decorateur.id)
                .then(response => {
                    setMyAdverts(response);
                })
                .catch(error => {
                    console.error(error);
                });
        } else if (user.client) {
            // Si c'est un utilisateur, récupérer les annonces en fonction de l'ID de l'utilisateur
            AdvertService.getAdvertsByUserId(user.id)
                .then(response => {
                    setMyAdverts(response);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [user.id, user.decorateur, user.client]);

    const { id } = useParams();

    const forceComponentReload = () => {
        setReloadKey(prevKey => prevKey + 1);
    };

    return (
        <>
            <div className="fullPage" key={reloadKey}>
                <Nav />
                <div className="container">
                    <h1>Chat</h1>
                    <div className="annonce-chat">
                        <div className="left">
                            <AnnonceChatComponent
                                annonces={myAdverts}
                                selectedAnnonceId={selectedAnnonceId}
                                onSelectAnnonce={setSelectedAnnonceId}
                                onAnnonceClick={forceComponentReload}
                            />
                        </div>
                        <div className="right">
                            {id ? <AnnonceMessagesComponent annonceId={id} /> : <span>Aucune annonce sélectionnée</span>}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        </>
    );
}

export default AnnonceChat;
