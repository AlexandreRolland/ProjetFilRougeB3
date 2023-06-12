
import {Link} from 'react-router-dom'


const Nav = () => {
    return (
      
        <nav className="header-bg">
            <section className="container">

                <div className="header">
                    <div>
                        <a href="/" className="primary-color logo">IDECO</a>
                    </div>
                   
                        <li><a href="/signin">Home</a></li>
                        <li><a href="/signin">Se faire conseiller</a></li>
                        <li><a href="/signup">Discussions</a></li>
                        <li><a href="/signup">Blog</a></li>

                   
                    <div>
                        <Link to='/signin'  className="button" >Contacter un expert</Link>
                        <a href="/signin" ></a>
                    </div>



                </div>
            </section>
        </nav>
    );
};

export default Nav;