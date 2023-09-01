import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../../setup/contexts/UserContext.js";
import { TokenServices } from "../../../app/services/token.services.js";

const Footer = () => {

    const { user, setUser } = useContext(UserContext);

    const handleLogout = () => {
        TokenServices.removeToken(); // Supprimer le token d'accès

        setUser(null); // Mettre à jour le contexte de l'utilisateur à null

    };

    return (

        <nav className="footer-bg">
            <section className="container">

                <div className="footer">
                    <div>
                        <Link to="/" className="primary-color logo">IDECO</Link>
                    </div>
                    <ul>

                        <li><Link to="/">Accueil</Link></li>
                        {
                            user && user.role === 'Client' &&
                            <li>
                                <Link to='/room_form'>Contacter un expert</Link>
                            </li>
                        }
                        {
                            !user &&
                            <li>
                                <Link to='/room_form'>Contacter un expert</Link>
                            </li>
                        }
                        <li><Link to="/blog">Blog</Link></li>
                        {
                            user && user.role === 'Decorateur' &&
                            <li>
                                <Link to="/annonce_list">Voir les annonces</Link>
                            </li>
                        }
                        {/* se déconnecter */}
                        {user &&
                            <li onClick={handleLogout}><Link>Se déconnecter</Link></li>
                        }
                        {
                            !user &&
                            <li>
                                <Link to='/signup'>S'inscrire</Link>
                            </li>
                        }
                    </ul>


                    <p>© 2023 IDECO | Rolland Alexandre</p>



                </div>
            </section>
        </nav>

    );
};

export default Footer;