import React, { useContext } from 'react';
import { AdvertService } from '../../../services/advert.services';
import UserContext from '../../../../setup/contexts/UserContext';


const AnnoncesComponent = ({ annonces }) => {

  const { user } = useContext(UserContext);

  const handleTakeCharge = async (annonceId, clientId) => {
    console.log("Decorator ID: ", user.decorateur.id);
    console.log("Advert ID: ", annonceId);
    console.log("Client ID: ", clientId);

    try {
    const data = await AdvertService.takeCharge(user.decorateur.id, annonceId, clientId);
    return data;
    } catch (error) {
      console.log(error);
    }
  };
  


  return (
    <div>
      {annonces.map((annonce) => (
        <React.Fragment key={annonce.id}>
          <div className="annonce-component">
            <div className="left">
              <h3>{annonce.roomType}</h3>
              <p>Surface : {annonce.roomSurface} m²</p>
              <p>Description : {annonce.description}</p>
            </div>
            <div className="right">
              <p>Rémunération : {annonce.price} €</p>
              <button onClick={() => handleTakeCharge(annonce.id, annonce.user.id)}>
                Prendre en charge
              </button>
            </div>
          </div>
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
};

export default AnnoncesComponent;
