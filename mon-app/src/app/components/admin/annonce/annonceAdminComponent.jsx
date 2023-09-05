import React, { useState, useEffect } from 'react';
import { AdvertService } from '../../../services/advert.services';

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
        filteredAnnonces = annonces.filter(annonce => annonce.description.toLowerCase().includes(searchTerm.toLowerCase()));
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
        <div className="admin-annonce-section">
            <input 
                type="text" 
                placeholder="Rechercher par description..." 
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            
            <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
                <option value="Tous">Tous</option>
                <option value="En Attente">En Attente</option>
                <option value="En Cours">En Cours</option>
                <option value="Terminé">Terminé</option>
            </select>
            
            <button onClick={toggleSortOrder}>
                Trier par date {sortOrder === 'asc' ? 'croissante' : 'décroissante'}
            </button>

            <div className="annonces-list">
                {filteredAnnonces.slice(0, displayedCount).map(annonce => (
                    <div className="annonce-item" key={annonce.id}>
                        <h3>{annonce.title}</h3>
                        <p>Description: {annonce.description}</p>
                        <p>Status: {annonce.status}</p>
                        <p>Dernière mise à jour: {new Date(annonce.updatedAt).toLocaleString()}</p>
                    </div>
                ))}
            </div>

            {showMoreButton && <button onClick={handleShowMore}>Afficher plus</button>}
        </div>
    );
};

export default AnnonceAdminComponent;
