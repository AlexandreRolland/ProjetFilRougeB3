import { Link } from "react-router-dom";

const Footer = () => {

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
                    </ul>


                    <p>© 2023 IDECO | Rolland Alexandre</p>



                </div>
            </section>
        </nav>

    );
};

export default Footer;