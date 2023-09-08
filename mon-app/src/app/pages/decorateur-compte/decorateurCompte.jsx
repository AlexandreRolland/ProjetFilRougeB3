import Footer from "../../layouts/footer/footer";
import Nav from "../../layouts/header/nav";
import React, { useContext, useState } from 'react';
import UserContext from '../../../setup/contexts/UserContext';
import MyDecoAnnonceComponent from "../../components/annonce/deco-annonce-list/myDecoAnnonceComponent";
import { UserServices } from "../../services/user.services";
import { useEffect } from "react";


const DecorateurCompte = () => {
  const { user } = useContext(UserContext);
  const [solde, setSold] = useState(0);
    const DecorateurId = user.decorateur.id;



useEffect(() => {
    const getSolde = async () => {
        try {
            const response = await UserServices.getDecorateurById(DecorateurId);
            if(response && response.solde) {
                setSold(response.solde);  // Mise à jour de l'état local avec le solde récupéré
            }
            console.log(response);
        } catch (error) {
            console.error(error);
        }
      };

        getSolde();
}, [DecorateurId]);

  const UpdateSolde = async () => {
    try {
        const resetSolde = {solde: 0};
        const response = await UserServices.updateDecorateur(DecorateurId, resetSolde);
        console.log(response);
        window.location.reload();
    } catch (error) {
        console.error(error);
    }
};



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
                <h2>Mon solde : {solde} €</h2>
                <button onClick={UpdateSolde}>Récupérer mon solde</button>
            </div>
            </div>            
          </div>
          <h2 className="h1">Mes <span className="primary-color">annonces</span></h2>
            <div className="my-annonces-container">
                <MyDecoAnnonceComponent />
            </div>
        </div>
      </section>
      <Footer />
      </div>
  );
}

export default DecorateurCompte;
