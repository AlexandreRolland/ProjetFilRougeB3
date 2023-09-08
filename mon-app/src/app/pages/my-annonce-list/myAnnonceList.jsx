import Footer from "../../layouts/footer/footer";
import Nav from "../../layouts/header/nav";
import React, { useEffect, useState, useContext } from 'react';
import MyAnnonceComponent from "../../components/annonce/my-annonce-list/myAnnonceComponent";
import { AdvertService } from "../../services/advert.services";
import UserContext from '../../../setup/contexts/UserContext';

const MyAnnonceList = () => {
  const { user } = useContext(UserContext);
  const [myAdverts, setMyAdverts] = useState([]);

  useEffect(() => {
    AdvertService.getAdvertsByUserId(user.id)
      .then(response => {
        setMyAdverts(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, [user.id]);

  return (
    <div className="fullPage">
      <Nav />
      
        
      
      <section className="container">
        <div className="my-annonces-list">
          <h1>Mon <span className="primary-color">compte</span></h1>
          <div className="my-annonces-container">
            <div className="infos">
            <h3><strong>Nom d'utilisateur : </strong>{user.username}</h3>
            <h3><strong>Email :</strong> {user.email}</h3>
            <h3><strong>Role :</strong> {user.role}</h3>
            </div>            
          </div>
          <h2 className="h1">Mes <span className="primary-color">annonces</span></h2>
          <div className="my-annonces-container">
            <MyAnnonceComponent annonces={myAdverts} />
          </div>
        </div>
      </section>
      <Footer />
      </div>
  );
}

export default MyAnnonceList;
