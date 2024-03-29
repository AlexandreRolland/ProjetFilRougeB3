import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import UserContext from '../../../setup/contexts/UserContext'


const Nav = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    const { user } = useContext(UserContext)

    return (
        <nav className="navbar">
            <section className="header-bg">

                <div className="container">
                    <div className="header">


                        <div className="logo">
                            <a href="/" className="primary-color logo">IDECO</a>
                        </div>
                        <div className="menu-icon" onClick={handleShowNavbar}>
                            <div className="burger"></div>
                        </div>
                        <div className={`nav-elements  ${showNavbar && 'active'}`}>
                            <ul>
                                <li>
                                    <a href="/">Accueil</a>
                                </li>
                                <li>
                                    <NavLink to="/blog">Blog</NavLink>
                                </li>
                                {
                                    user && user.role === 'Decorateur' &&
                                    <li>
                                        <NavLink to="/annonce_list">Voir les annonces</NavLink>
                                    </li>
                                }
                                {
                                    user && user.role !== "Admin" &&
                                    <li>
                                        <NavLink to="/annonce_chat">Discussions</NavLink>
                                    </li>
                                }
                                {
                                    user && user.role === 'Client' &&
                                    <li>
                                        <NavLink to='/my_annonces'>Mon compte</NavLink>
                                    </li>
                                }
                                {
                                    user && user.role === 'Decorateur' &&
                                    <li>
                                        <NavLink to='/my_account_pro' className="button">Mon compte</NavLink>
                                    </li>
                                }
                                {
                                    !user &&
                                    <li>
                                        <NavLink to='/signin'>Connexion</NavLink>
                                    </li>
                                }
                                {
                                    user && user.role === 'Client' &&
                                    <li>
                                        <NavLink to='/room_form' className="button" >Contacter un expert</NavLink>
                                    </li>
                                }
                                {
                                    !user &&
                                    <li>
                                        <NavLink to='/room_form' className="button" >Contacter un expert</NavLink>
                                    </li>
                                }
                                {
                                    user && user.role === 'Admin' &&
                                    <li>
                                        <NavLink to='/blog_form' >Ajouter un article</NavLink>
                                    </li>
                                }
                                {
                                    user && user.role === 'Admin' &&
                                    <li>
                                        <NavLink to='/admin_dashboard' className="button" >Gestion Admin</NavLink>
                                    </li>
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </nav>
    )
}

export default Nav