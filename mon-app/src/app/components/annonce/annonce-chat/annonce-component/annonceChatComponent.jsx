import React from 'react';
import { useNavigate } from 'react-router-dom';

const AnnonceChatComponent = ({ annonces, selectedAnnonceId, onSelectAnnonce, onAnnonceClick }) => {
    const navigate = useNavigate();

    const getStatusClass = (status) => {
        switch (status) {
            case 'En Cours':
                return 'status-in-progress';
            case 'Terminé':
                return 'status-finished';
            case 'En Attente':
                return 'status-on-hold';
            default:
                return '';
        }
    }

    return (
        <>
            {annonces.map((annonce) => (
                <React.Fragment key={annonce.id}>
                    <div
                        className={`annonce-chat-component ${annonce.id === selectedAnnonceId ? 'active' : ''}`}
                        onClick={() => {
                            navigate(`/annonce_chat/${annonce.id}`);
                            onSelectAnnonce(annonce.id);
                            onAnnonceClick();
                        }}
                    >
                        <div className="left-component">
                            <h3>{annonce.roomType}</h3>
                            <p>Propriétaire : {annonce.user.username}</p>
                            <p>Surface : {annonce.roomSurface} m²</p>
                        </div>
                        <div className={`right-component ${getStatusClass(annonce.status)}`}>
                            <div className="status">
                                <p>{annonce.status}</p>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </>
    );
};
export default AnnonceChatComponent;

