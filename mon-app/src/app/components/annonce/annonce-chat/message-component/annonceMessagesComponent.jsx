import React, { useEffect, useState, useContext, useRef, useCallback } from 'react';
import { AdvertService } from '../../../../services/advert.services';
import { UserServices } from '../../../../services/user.services';
import UserContext from '../../../../../setup/contexts/UserContext';

const AnnonceMessagesComponent = ({ annonceId }) => {
    const { user } = useContext(UserContext);
    const [messages, setMessages] = useState([]);
    const [newMessageContent, setNewMessageContent] = useState('');
    const [userHasScrolled, setUserHasScrolled] = useState(false);
    const [isAdInfoPopupOpen, setIsAdInfoPopupOpen] = useState(false);
    const [adDetails, setAdDetails] = useState(null);
    const [adStatus, setAdStatus] = useState('');
    const messagesEndRef = useRef(null);


    const handleScroll = (event) => {
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
        if (scrollTop + clientHeight !== scrollHeight) {
            setUserHasScrolled(true);
        } else {
            setUserHasScrolled(false);
        }
    };

    useEffect(() => {
        const messageBox = messagesEndRef.current?.parentNode;
        if (messageBox) {
            messageBox.addEventListener('scroll', handleScroll);
            return () => {
                messageBox.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);


    useEffect(() => {
    }, [adStatus]);

    const scrollToBottom = useCallback(() => {
        if (!userHasScrolled) {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [userHasScrolled]);

    useEffect(() => {
        const fetchMessages = async () => {
            const fetchedMessages = await AdvertService.getMessagesByAdvertId(annonceId);
            setMessages(fetchedMessages);
        };

        fetchMessages();
        const intervalId = setInterval(fetchMessages, 1000);

        return () => clearInterval(intervalId);
    }, [annonceId]);

    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    const fetchAdDetails = useCallback(async () => {
        const fetchedAdDetails = await AdvertService.getAdvertById(annonceId);
        setAdDetails(fetchedAdDetails);
        setAdStatus(fetchedAdDetails.status);
    }, [annonceId]);

    useEffect(() => {
        fetchAdDetails();
    }, [fetchAdDetails, annonceId]);




    const handleNewMessageChange = (event) => {
        setNewMessageContent(event.target.value);
    };

    const handleNewMessageSubmit = async (event) => {
        event.preventDefault();

        const newMessageResponse = await AdvertService.postMessage(annonceId, newMessageContent, user.id);

        const newMessage = {
            ...newMessageResponse,
            senderId: {
                ...newMessageResponse.senderId,
                id: user.id,
                username: user.username
            },
        };
        setNewMessageContent('');
        setMessages(prevMessages => [...prevMessages, newMessage]);
        scrollToBottom();
    };


    

    const markAdAsFinished = async () => {
        try {
            const updatedAd = { status: "Terminé" };
            const soldeDecorateur =  user.decorateur.solde;
            const adPrice =  adDetails.price;
            const newSolde =  soldeDecorateur + adPrice;
            const DecorateurId =  user.decorateur.id;
            const AddSolde = { solde: newSolde };
            await AdvertService.updateAdvert(annonceId, updatedAd);
            await UserServices.updateDecorateur(DecorateurId, AddSolde);
            alert('Annonce marquée comme terminée avec succès');
        } catch (error) {
            alert('Une erreur est survenue lors de la mise à jour de l\'annonce');
        }
    };

    return (
        <div className='annonce-messages-component'>
            <div className='topbar-annonce'>
                <h3>Messages liés à cette annonce</h3>
                <div className='topbar-btns'>
                    <button onClick={() => {
                        fetchAdDetails();
                        setIsAdInfoPopupOpen(true);
                    }}>
                        Informations liées à l'annonce
                    </button>
                    {(user.role === "Decorateur") && (
                        <button onClick={markAdAsFinished}>Déclarer comme terminé</button>
                    )}

                </div>
            </div>

            {isAdInfoPopupOpen ? (
                <div className="ad-info-content">
                    {adDetails ? (
                        <>
                            <div>
                                <h3>Informations sur le propriétaire de l'annonce</h3>
                                <p><strong>Email : </strong>{adDetails.user.email}</p>
                                <p><strong>Nom d'utilisateur : </strong>{adDetails.user.username}</p>
                            </div>
                            <div>
                                <h3>Détails de l'annonce</h3>
                                <p><strong>Type de pièce : </strong>{adDetails.roomType}</p>
                                <p><strong>Surface de la pièce : </strong>{adDetails.roomSurface} m²</p>
                                <p><strong>Description : </strong>{adDetails.description}</p>
                                <p><strong>Prestation : </strong>{adDetails.price} €</p>
                            </div>
                        </>
                    ) : (
                        <p>Chargement des détails...</p>
                    )}
                    <button onClick={() => setIsAdInfoPopupOpen(false)}>Retour aux messages</button>
                </div>
            ) : (
                <>
                    <div className='messages-box' onScroll={handleScroll}>
                        {messages.map((message, index) => {
                            let date = new Date(message.createdAt);
                            date.setHours(date.getHours() + 2);
                            const createdAt = date.toLocaleString('fr-FR', { timeStyle: 'short' });

                            return (
                                <div className='message' key={index}>
                                    <p className="message-date">{createdAt}</p>
                                    {user.id === message.senderId.id
                                        ? <div className='box-user'>
                                            <p className='message-username-user'>{message.senderId.username}</p>
                                            <p className="message-user">{message.content}</p>
                                        </div>
                                        : <div className='box-other'>
                                            <p className='message-username-other'>{message.senderId.username}</p>
                                            <p className="message-other">{message.content}</p>
                                        </div>
                                    }
                                </div>
                            );
                        })}
                        <div ref={messagesEndRef} />
                    </div>
                    <form onSubmit={handleNewMessageSubmit}>
                        <div className="form-group">
                            {adStatus === "Terminé"
                                ? <input
                                    type="text"
                                    value={newMessageContent}
                                    onChange={handleNewMessageChange}
                                    placeholder="Annonce marquée comme terminée par le décorateur"
                                /> : <input
                                    type="text"
                                    value={newMessageContent}
                                    onChange={handleNewMessageChange}
                                    placeholder="Ecrivez votre message ici..."
                                />}
                            <button type="submit" disabled={adStatus === "Terminé"}>
                                Envoyer
                            </button>
                        </div>
                    </form>
                </>
            )}
        </div>
    );
};

export default AnnonceMessagesComponent;
