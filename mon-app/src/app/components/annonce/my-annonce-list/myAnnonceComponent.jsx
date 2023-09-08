import React, { useEffect, useState, useContext } from 'react';
import { AdvertService } from '../../../services/advert.services';
import UserContext from '../../../../setup/contexts/UserContext';
import { Link } from 'react-router-dom';

const MyAnnonceComponent = () => {
  const { user } = useContext(UserContext);
  const [myAnnonces, setMyAnnonces] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedDescription, setEditedDescription] = useState('');

  useEffect(() => {
    const fetchMyAnnonces = async () => {
      const fetchedAnnonces = await AdvertService.getAdvertsByUserId(user.id);
      setMyAnnonces(fetchedAnnonces);
    };

    fetchMyAnnonces();
  }, [user.id]);

  const handleEdit = (annonce) => {
    setEditingId(annonce.id);
    setEditedDescription(annonce.description);
  };

  const handleInputChange = (event) => {
    setEditedDescription(event.target.value);
  };

  const handleSubmit = async (event, id) => {
    event.preventDefault();
    await AdvertService.updateAdvert(id, { description: editedDescription });
    // Refresh the list of adverts after editing
    const fetchedAnnonces = await AdvertService.getAdvertsByUserId(user.id);
    setMyAnnonces(fetchedAnnonces);
    setEditingId(null);
    setEditedDescription('');
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditedDescription('');
  };

  return (
    <div>
      {myAnnonces.length === 0 ? (
        <div className="my-annonce-component">
          <div className="left">
            <p>Chargement / Vous n'avez pas d'annonce en cours.</p>
          </div>
          <div className="right">
            <Link to="/room_form" className="button">Contacter un expert</Link>
          </div>
        </div>
      ) : (
        myAnnonces.map((annonce) => (
          <>
          <div className="my-annonce-component" key={annonce.id}>
            <div className="left">
              <h3><strong>{annonce.roomType}</strong></h3>
              <p><strong>Statut :</strong> {annonce.status}</p>
              <p><strong>Surface :</strong> {annonce.roomSurface} m²</p>
              <div className="description">
                {editingId === annonce.id ?
                  <>
                    <p><strong>Description :</strong></p>
                    <form onSubmit={(e) => handleSubmit(e, annonce.id)}>
                      <input
                        name="description"
                        value={editedDescription}
                        onChange={handleInputChange}
                      />
                    </form>
                  </>
                  :
                  <p><strong>Description :</strong> {annonce.description}</p>
                }
              </div>
            </div>
            <div className="right">
              {editingId === annonce.id ?
                <>
                  <button type="button" onClick={handleCancelEdit}>Annuler</button>
                  <button type="submit" onClick={(e) => handleSubmit(e, annonce.id)}>Valider</button>
                </>
                :
                <>
                  <button onClick={() => handleEdit(annonce)}>Modifier</button>
                </>
              }
            </div>
            
          </div>
          <hr />
          </>
        ))
      )}
    </div>
  );
};

export default MyAnnonceComponent;
