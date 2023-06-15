import React from 'react';

const AnnoncesComponent = ({ annonces }) => {
  return (
    <div>
      {annonces.map(annonce => (
        <>
        
        <div className="annonce-component" key={annonce.id}>
          <div className="left">
          <h3>{annonce.roomType}</h3>
          <p>Surface : {annonce.roomSurface} m²</p>
          <p>Description : {annonce.description}</p>
          </div>
          <div className='right'>
          <p>Rémunération : {annonce.price} €</p>
            <button>Prendre en charge</button>
          </div>
        </div>
          <hr />
        </>
      ))}
    </div>
  );
};

export default AnnoncesComponent;