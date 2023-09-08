// MyDecoAnnonceComponent.js
import React, { useEffect, useState, useContext } from 'react';
import { AdvertService } from '../../../services/advert.services';
import UserContext from '../../../../setup/contexts/UserContext';

const MyDecoAnnonceComponent = () => {
  const { user } = useContext(UserContext);
  const [myDecoAnnonces, setMyDecoAnnonces] = useState([]);

  useEffect(() => {
    const fetchMyDecoAnnonces = async () => {
      const fetchedAnnonces = await AdvertService.getAdvertsByDecoratorId(user.decorateur.id);
      setMyDecoAnnonces(fetchedAnnonces);
    };

    fetchMyDecoAnnonces();
  }, [user.decorateur.id]);

  // ... (vous pouvez conserver les mêmes fonctions handleEdit, handleInputChange, handleSubmit, handleCancelEdit)

// ...

return (
    <div>
      {myDecoAnnonces.length === 0 ? (
        <div>
          <p>Chargement / Vous n'avez pas d'annonce en cours comme décorateur.</p>
        </div>
      ) : (
        myDecoAnnonces.map((annonce) => (
          <div className="my-annonce-component" key={annonce.id}>
            <div className="left">
              <h3><strong>Type de pièce :</strong> {annonce.roomType}</h3>
              <p><strong>Statut :</strong> {annonce.status}</p>
              <p><strong>Prestation :</strong> {annonce.price} €</p>
              <p><strong>Client :</strong> {annonce.user.username}</p>
              <p><strong>Surface :</strong> {annonce.roomSurface} m²</p>
              <div className="description">
                <p><strong>Description :</strong> {annonce.description}</p>
              </div>
            </div>
            <div className="right">
              <a href={`http://localhost:3000/annonce_chat/${annonce.id}`} className="button">
                Accéder au chat
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );

};

export default MyDecoAnnonceComponent;
