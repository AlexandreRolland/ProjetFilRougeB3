import React, { useContext } from 'react';
import { AdvertService } from '../../../services/advert.services';
import UserContext from '../../../../setup/contexts/UserContext';
import { useNavigate } from 'react-router-dom';


const AnnoncesComponent = ({ annonces }) => {

  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const handleTakeCharge = async (annonceId, clientId) => {
    try {
    const data = await AdvertService.takeCharge(user.decorateur.id, annonceId, clientId);
    navigate('/annonce_chat');
    return data;
    } catch (error) {
      console.log(error);
    }
  };
  


  return (
    <div className="hr">
      {annonces.map((annonce) => (
        <React.Fragment key={annonce.id}>
          <div className="annonce-component">
            <div className="left">
              <h3>{annonce.roomType}</h3>
              <p>Surface : {annonce.roomSurface} m²</p>
              <p>Description : {annonce.description}</p>
              <p>Client : {annonce.user.username}</p>
            </div>
            <div className="right">
              <p>Rémunération : <span className='primary-color'>{annonce.price} €</span></p>
              <button onClick={() => handleTakeCharge(annonce.id, annonce.user.id)}>
                Prendre en charge
              </button>
            </div>
            <hr />
          </div>
          
        </React.Fragment>
      ))}
    </div>
  );
};

export default AnnoncesComponent;
