import React from 'react';
import { useNavigate } from 'react-router-dom';

const AnnonceChatComponent = ({annonces}) => {
    const navigate = useNavigate();

    return (
        <>
        {annonces.map((annonce) => (
            <React.Fragment key={annonce.id}>
                <div className="annonce-chat-component"
                    onClick={() => navigate(`/annonce_chat/${annonce.id}`)}
                    key={annonce.id} // Add a unique key prop
                >
                    <div className="left">
                        <h3>{annonce.user.username}</h3>
                        <p>Surface : {annonce.roomType} m²</p>
                    </div>
                </div>
            </React.Fragment>
        ))}
        </>
    );
};

export default AnnonceChatComponent;

