import Footer from "../../layouts/footer/footer";
import Nav from "../../layouts/header/nav";
import React, { useContext } from 'react';
import UserContext from '../../../setup/contexts/UserContext';

const DecorateurCompte = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="fullPage">
      <Nav />
      
        
      
      <section className="container">
        <div className="my-annonces-list">
          <h1>Mon <span className="primary-color">compte</span></h1>
          <div className="my-annonces-container">
            <div className="mon-compte">
                <div className="infos">
                <h2>Mes informations</h2>
            <h3><strong>Nom d'utilisateur : </strong>{user.username}</h3>
            <h3><strong>Email :</strong> {user.email}</h3>
            <h3><strong>Role :</strong> {user.role}</h3>
            </div>
            <div className="solde">
                <h2>Mon solde : {user.decorateur.solde} €</h2>
                <button>Récupérer mon solde</button>
            </div>
            </div>            
          </div>
        </div>
      </section>
      <Footer />
      </div>
  );
}

export default DecorateurCompte;
