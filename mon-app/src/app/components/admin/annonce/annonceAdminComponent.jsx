import React, { useState, useEffect } from 'react';
import { AdvertService } from '../../../services/advert.services';
//test

const AnnonceAdminComponent = () => {
    const [annonces, setAnnonces] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('desc');
    const [statusFilter, setStatusFilter] = useState('Tous');
    const [displayedCount, setDisplayedCount] = useState(5);
    const [showMoreButton, setShowMoreButton] = useState(true);

    useEffect(() => {
        async function fetchAnnonces() {
            try {
                const allAnnonces = await AdvertService.getAdverts();
                setAnnonces(allAnnonces);
                if (allAnnonces.length <= 5) {
                    setShowMoreButton(false);
                }
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
        filteredAnnonces = annonces.filter(annonce => annonce.user.username.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    if (statusFilter !== 'Tous') {
        filteredAnnonces = filteredAnnonces.filter(annonce => annonce.status === statusFilter);
    }

    filteredAnnonces.sort((a, b) => sortOrder === 'asc' ? new Date(a.updatedAt) - new Date(b.updatedAt) : new Date(b.updatedAt) - new Date(a.updatedAt));

    const handleShowMore = () => {
        setDisplayedCount(prevCount => prevCount + 5);
        if (filteredAnnonces.length <= displayedCount + 5) {
            setShowMoreButton(false);
        }
    }

    return (
        <div className="admin-annonce">
             <h2>Gestion des <span className='primary-color'>Annonces</span></h2>
            <div className="filter-menu">
                <input 
                    type="text" 
                    placeholder="Rechercher par client..." 
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                
                <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
                    <option value="Tous">État (tous)</option>
                    <option value="En Attente">En Attente</option>
                    <option value="En Cours">En Cours</option>
                    <option value="Terminé">Terminé</option>
                </select>
                
                <button onClick={toggleSortOrder}>
                    Tri : {sortOrder === 'asc' ? 'croissante' : 'décroissante'}
                </button>
            </div>

            {filteredAnnonces.slice(0, displayedCount).map(annonce => (
                <React.Fragment key={annonce.id}>
                    <div className="admin-annonces">
                        <div className="left">
                            <h3>Client : {annonce.user.username}</h3>
                            <p>Status: {annonce.status}</p>
                            <p>Créé le: {new Date(annonce.createdAt).toLocaleString()}</p>
                            <p>Dernière mise à jour: {new Date(annonce.updatedAt).toLocaleString()}</p>
                        </div>
                        <div className="center">
                            <p>Pièce : {annonce.roomType}</p>
                        <p>Surface : {annonce.roomSurface} m²</p>
                            <p>Description : {annonce.description}</p>
                        </div>
                        <div className="right">
                            <button>Modifier l'annonce</button>
                            <button className='delete'>Supprimer l'annonce</button>
                        </div>
                    </div>
                </React.Fragment>
            ))}
            
            {showMoreButton && <div className='ShowMore'><button onClick={handleShowMore} className="load-more">Afficher plus</button></div>}
        </div>
    );
};

export default AnnonceAdminComponent;
