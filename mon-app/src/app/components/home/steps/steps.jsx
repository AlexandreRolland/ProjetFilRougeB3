import { Link } from "react-router-dom";

const Steps = () => {
    return (
        <section className="container">

        <div className="steps-hp">
            
            <div className="steps-left">
            <img src="https://alexandre-rolland.fr/wp-content/uploads/2023/05/steps-img.jpg" alt="" />
            </div>

            <div className="steps-right">
                
                <h2>Les étapes pour vous faire conseiller</h2>

                <div className="steps">
                    <div className="step">
                        <span className="primary-color">1.</span>
                        <p>Renseignez les caractéristiques de votre pièce à décorer</p>
                    </div>
                    <div className="step">
                    <span className="primary-color">2.</span>
                        <p>La plateforme vous met automatiquement en contact avec un décorateur certifié</p>
                    </div>
                    <div className="step">
                    <span className="primary-color">3.</span>
                        <p>Chattez avec nos experts et recevez des conseils sur-mesure (Meubles, murs, sol, accessoires...)</p>
                    </div>    
                </div>

                <Link to="" className="button">Contacter un expert</Link>
            </div>

        </div>

        </section>
    );
}

export default Steps;