import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../../setup/contexts/UserContext.js";
import { TokenServices } from "../../../app/services/token.services.js";

const Footer = () => {

    const { user } = useContext(UserContext);
    const history = useHistory();

    const handleLogout = () => {
        TokenServices.removeToken(); // Supprimer le token d'accès

        if (setUser) {
            setUser(null); // Mettre à jour le contexte de l'utilisateur
        }

        history.push("/signin"); // Rediriger vers la page de connexion
    };

    return (

        <nav className="footer-bg">
            <section className="container">

                <div className="footer">
                    <div>
                        <Link to="/signin" className="primary-color logo">IDECO</Link>
                    </div>
                    <ul>

                        <li><Link to="/signin">Accueil</Link></li>
                        <li><Link to="/signin">Se faire conseiller</Link></li>
                        <li><Link to="/signin">Discussions</Link></li>
                        <li><Link to="/signin">Blog</Link></li>
                        {/* se déconnecter */}
                        {user &&
                            <li onClick={handleLogout}><>Se déconnecter</></li>
                        }
                    </ul>


                    <p>© 2023 IDECO | Rolland Alexandre</p>



                </div>
            </section>
        </nav>

    );
};

export default Footer;