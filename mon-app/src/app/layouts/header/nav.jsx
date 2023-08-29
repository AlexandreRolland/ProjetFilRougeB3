
import { Link } from 'react-router-dom'


// const Nav = () => {
//     return (

//         <nav className="header-bg">
//             <section className="container">

//                 <div className="header">
//                     <div>
//                         <Link to="/" className="primary-color logo">IDECO</Link>
//                     </div>

//                         <li><Link to="/signin">Home</Link></li>
//                         <li><Link to="/annonce_list">Se faire conseiller</Link></li>
//                         <li><Link to="/my_annonces">Discussions</Link></li>
//                         <li><Link to="/signup">Blog</Link></li>


//                     <div>
//                         <Link to='/annonce_chat'  className="button" >Contacter un expert</Link>
//                         <Link to="/signin" ></Link>
//                     </div>



//                 </div>
//             </section>
//         </nav>
//     );
// };

// export default Nav;

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
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blog">Blog</NavLink>
                                </li>
                                {
                                    user.role === 'Decorateur' &&
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
                                    user.role === 'Client' &&
                                    <li>
                                        <NavLink to='/my_annonces'>Mon compte</NavLink>
                                    </li>
                                }
                                {
                                    user.role === 'Decorateur' &&
                                    <li>
                                        <NavLink to='/'>Mon compte</NavLink>
                                    </li>
                                }
                                {
                                    !user &&
                                    <li>
                                        <NavLink to='/signup'>S'inscrire</NavLink>
                                    </li>
                                }
                                {
                                    user.role != 'Decorateur' &&
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