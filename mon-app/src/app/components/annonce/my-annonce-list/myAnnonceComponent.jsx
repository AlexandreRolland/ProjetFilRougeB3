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

  const handleDelete = async (advertId) => {
    try {
      await AdvertService.deleteAdvert(advertId);
      // Refresh the list of adverts after deletion
      const fetchedAnnonces = await AdvertService.getAdvertsByUserId(user.id);
      setMyAnnonces(fetchedAnnonces);
    } catch (error) {
      console.log(error);
    }
  };

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
            <p>Vous n'avez pas d'annonce en cours.</p>
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
              <h3>{annonce.roomType}</h3>
              <p>Surface : {annonce.roomSurface} m²</p>
              <div className="description">
                {editingId === annonce.id ?
                  <>
                    <p>Description :</p>
                    <form onSubmit={(e) => handleSubmit(e, annonce.id)}>
                      <input
                        name="description"
                        value={editedDescription}
                        onChange={handleInputChange}
                      />
                    </form>
                  </>
                  :
                  <p>Description : {annonce.description}</p>
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
                  <button onClick={() => handleDelete(annonce.id)}>Supprimer</button>
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
