import React, { useState, useEffect } from "react";
import Nav from "../../layouts/header/nav.jsx";
import Footer from "../../layouts/footer/footer.jsx";
import HpForm from "../../components/form/hp-form/hp-form.jsx";
import Steps from "../../components/home/steps/steps.jsx";
import Banner from "../../components/home/banner/banner.jsx";
import Articles from "../../components/home/articles/articles.jsx";
import { Link } from "react-router-dom";




function HomePage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
      // C'est ici que vous appelerez votre service pour obtenir les articles
      // Simulons cela pour l'instant
      const dummyData = [
          { title: "Article 1 test titre assez long et compliqué car long il fait 3 lignes allo test", image: "https://www.leparisien.fr/resizer/XEtkllOP69v9JTN3zmcPCA2iFlA=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/WVEBLSJVIMDGHKFBH6EW6WFXMU.jpg", summary: "Résumé 1" },
          { title: "Article 2", image: "https://www.remi-batte.fr/wp-content/uploads/2020/10/RB-Fils-149.jpg", summary: "Résumé 2" },
          { title: "Article 3", image: "https://www.idkrea.com/sites/idkrea.com/files/actualite/5-mots-cles_decoration-interieure_harmonie_idkrea-rennes.jpg", summary: "Résumé 3" },
          { title: "Article 4", image: "https://maison.20minutes.fr/wp-content/uploads/2020/04/chambre-bleu-art-deco-istock.jpg", summary: "Résumé 4" },
          { title: "Article 5", image: "https://maison.20minutes.fr/wp-content/uploads/2020/10/1-une-implantation-atypique-pour-exploiter-lespace-mobalpa.jpg", summary: "Résumé 5" },
          // ... Ajoutez autant d'articles simulés que vous le souhaitez
      ];

      setArticles(dummyData);
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
