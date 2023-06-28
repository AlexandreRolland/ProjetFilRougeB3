
import {Link} from 'react-router-dom'


const Nav = () => {
    return (
      
        <nav className="header-bg">
            <section className="container">

                <div className="header">
                    <div>
                        <Link to="/" className="primary-color logo">IDECO</Link>
                    </div>
                   
                        <li><Link to="/signin">Home</Link></li>
                        <li><Link to="/annonce_list">Se faire conseiller</Link></li>
                        <li><Link to="/my_annonces">Discussions</Link></li>
                        <li><Link to="/signup">Blog</Link></li>

                   
                    <div>
                        <Link to='/signin'  className="button" >Contacter un expert</Link>
                        <Link to="/signin" ></Link>
                    </div>



                </div>
            </section>
        </nav>
    );
};

export default Nav;