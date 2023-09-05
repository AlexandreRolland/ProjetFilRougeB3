import React, { useState, useEffect } from 'react';
import { AdvertService } from '../../../services/advert.services';

const AnnonceAdminComponent = () => {
    const [annonces, setAnnonces] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('desc');

    useEffect(() => {
        async function fetchAnnonces() {
            try {
                const allAnnonces = await AdvertService.getAdverts();
                setAnnonces(allAnnonces);
            } catch (error) {
                console.error("Erreur lors de la récupération des annonces:", error);
            }
        }
        fetchAnnonces();
    }, []);

    const toggleSortOrder = () => {
        setSortOrder(prevOrder => prevOrder === 'asc' ? 'desc' : 'asc');
    }

    let filteredAnnonces = annonces;

    if (searchTerm) {
        filteredAnnonces = annonces.filter(annonce => annonce.description.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    filteredAnnonces.sort((a, b) => sortOrder === 'asc' ? new Date(a.updatedAt) - new Date(b.updatedAt) : new Date(b.updatedAt) - new Date(a.updatedAt));

    return (
        <div className="admin-annonce-section">
            <div className="filter-menu">
                <input type="text" placeholder="Rechercher une annonce..." onChange={e => setSearchTerm(e.target.value)} />
                <button onClick={toggleSortOrder}>
                    Trier par date de modification ({sortOrder === 'asc' ? 'Ascendant' : 'Descendant'})
                </button>
            </div>
            <div className="annonces-list">
                {filteredAnnonces.map(annonce => (
                    <div className="annonce-item" key={annonce.id}>
                        <h3>{annonce.roomType}</h3>
                        <p>Surface : {annonce.roomSurface} m²</p>
                        <p>Description : {annonce.description}</p>
                        <p>Client : {annonce.user.username}</p>
                        <p>Rémunération : {annonce.price} €</p>
                        {/* Ajoutez d'autres détails selon vos besoins */}
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnnonceAdminComponent;
