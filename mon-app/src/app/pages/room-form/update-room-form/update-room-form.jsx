
import React, { useState, useEffect } from "react";
import Nav from "../../../layouts/header/nav";
import Footer from "../../../layouts/footer/footer";
import { useParams } from 'react-router-dom';
import { AdvertService } from "../../../services/advert.services";

function UpdateRoomForm() {

    const { id } = useParams();
    const [roomType, setRoomType] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const advert = await AdvertService.getAdvertById(id);
                setRoomType(advert.roomType);
                setDescription(advert.description);
                setStatus(advert.status);
            } catch (error) {
                console.error("Erreur lors de la récupération de l'annonce", error);
            }
        }
        fetchData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await AdvertService.updateAdvert(id, {
                roomType,
                description,
                status
            });
            alert("Annonce mise à jour avec succès!");
        } catch (error) {
            alert("Erreur lors de la mise à jour de l'annonce");
        }
    };


    return (
        <>
            <Nav />
            <section className="container">
                <div className="post-article">
                    <h1>Mettre à jour une <span className="primary-color">annonce</span></h1>
                    <div className="post-container">
                        <form onSubmit={handleSubmit}>
                            
                            <label>Type de pièce</label>
                            <select value={roomType} onChange={e => setRoomType(e.target.value)}>
                                <option value="Chambre">Chambre</option>
                                <option value="Cuisine">Cuisine</option>
                                <option value="SalleDeBain">Salle de Bain</option>
                                <option value="Salon">Salon</option>
                                <option value="Bureau">Bureau</option>
                                <option value="Autre">Autre</option>
                            </select>

                            <label>Description</label>
                            <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>

                            <label>Status</label>
                            <select value={status} onChange={e => setStatus(e.target.value)}>
                                <option value="En Attente">En Attente</option>
                                <option value="En Cours">En Cours</option>
                                <option value="Terminé">Terminé</option>
                            </select>

                            <button type="submit">Mettre à jour l'annonce</button>
                        </form>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default UpdateRoomForm;
