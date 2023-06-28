import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <section className="banner-bg">
            <section className="container">
                <div className="banner">
                    <h2>Vous êtes un <span className="primary-color">décorateur</span> diplômé ?</h2>
                    <Link to="/signup_decorator" className="button">S’inscrire en tant que décorateur</Link>
                </div>


            </section>
        </section>
    );
};

export default Banner;