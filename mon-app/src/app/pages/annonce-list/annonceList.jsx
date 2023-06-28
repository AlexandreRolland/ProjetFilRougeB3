import Footer from "../../layouts/footer/footer";
import Nav from "../../layouts/header/nav";
import React, { useContext, useEffect, useState } from 'react';
import AnnoncesComponent from "../../components/annonce/annonce-list/annonceComponent";
import { AdvertService } from "../../services/advert.services";
import UserContext from "../../../setup/contexts/UserContext";
import { useNavigate } from "react-router-dom";



const AnnonceList = () => {

  //If user=null => redirect to login page
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/signin');
    }
  }, [user, navigate]);

  //get all adverts from getAdverts() in advert.services.js and display them in the component
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    AdvertService.getAdverts()
      .then(response => {
        setAdverts(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);



  return (
    <>
      <Nav />
      <section className="container">
        <div className="annonces-list">

          <h1>Liste des <span className="primary-color">annonces</span></h1>
          <div className="annonces-container">

            <AnnoncesComponent annonces={adverts} />

          </div>
        </div>



      </section>
      <Footer />
    </>
  );
}

export default AnnonceList;