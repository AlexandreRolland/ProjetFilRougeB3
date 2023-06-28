import React, { useContext } from 'react';
import { AdvertService } from '../../../services/advert.services';
import UserContext from '../../../../setup/contexts/UserContext';


const AnnoncesComponent = ({ annonces }) => {

  const { user } = useContext(UserContext);

  const handleTakeCharge = async (annonceId) => {
    const data = await AdvertService.takeCharge(user.id, annonceId);
    console.log(data);
  };


  return (
    <div>
      {annonces.map((annonce) => (
        <>
          <div className="annonce-component" key={annonce.id}>
            <div className="left">
              <h3>{annonce.roomType}</h3>
              <p>Surface : {annonce.roomSurface} m²</p>
              <p>Description : {annonce.description}</p>
            </div>
            <div className="right">
              <p>Rémunération : {annonce.price} €</p>
              <button onClick={() => handleTakeCharge(annonce.id, annonce.clientId)}>
                Prendre en charge
              </button>
            </div>
          </div>
          <hr />
        </>
      ))}
    </div>
  );
};

export default AnnoncesComponent;
