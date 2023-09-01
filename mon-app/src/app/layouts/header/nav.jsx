
import { Link } from 'react-router-dom'


import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import UserContext from '../../../setup/contexts/UserContext'
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'

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
                            <Link to="/" className="primary-color logo">IDECO</Link>
                        </div>
                        <div className="menu-icon" onClick={handleShowNavbar}>
                            {/* <Hamburger /> */}
                            <div className="square"></div>
                        </div>
                        <div className={`nav-elements  ${showNavbar && 'active'}`}>
                            <ul>
                                <li>
                                    <NavLink to="/">Accueil</NavLink>
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
                                    user &&
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
                                        <NavLink to='/AREMPLACER' className="button">Mon compte</NavLink>
                                    </li>
                                }
                                {
                                    !user &&
                                    <li>
                                        <NavLink to='/signup'>S'inscrire</NavLink>
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
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </nav>
    )
}

export default Nav