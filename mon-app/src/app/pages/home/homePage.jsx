import React, { useState, useEffect } from "react";
import Nav from "../../layouts/header/nav.jsx";
import Footer from "../../layouts/footer/footer.jsx";
import HpForm from "../../components/form/hp-form/hp-form.jsx";
import Steps from "../../components/home/steps/steps.jsx";
import Banner from "../../components/home/banner/banner.jsx";
import Articles from "../../components/home/articles/articles.jsx";
import { Link } from "react-router-dom";
import ArticleService from "../../services/article.services";




function HomePage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    ArticleService.getArticles()
        .then(data => {
            setArticles(data);
        })
        .catch(error => {
            console.error("Erreur lors de la récupération des articles:", error);
        });
}, []);

  return (
    <>
      <Nav />

 

      <section className="container">
        <section className="flex">
          <div className="container-hp-left">
            <h1>Une <span className="primary-color">décoration</span> sur mesure à <span className="primary-color">petit prix</span></h1>
            <p>IDECO est la seule plateforme qui vous permet de vous faire conseiller en décoration par des experts certifés et cela pour tout type de  budget.</p>
            <div>
              <Link to="/room_form" className="button" >Contacter un expert</Link>
            </div>
          </div>

          <div className="container-hp-right">
            <img src="https://alexandre-rolland.fr/wp-content/uploads/2023/05/hp-illu.png" alt="" />
          </div>
        </section>
      </section>

      <HpForm />

      <Steps />

      <Banner />

      <Articles articles={articles} />


      <Footer />
    </>

  );
}

export default HomePage;
