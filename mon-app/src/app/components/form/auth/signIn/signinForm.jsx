import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'; // utilisez useHistory pour react-router-dom v5 ou inférieure
import { AuthServices } from "../../../../services/auth.service";
import { TokenServices } from "../../../../services/token.services";
import UserContext from "../../../../../setup/contexts/UserContext";


function SigninForm() {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        
    });

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate(); // utilisez useHistory pour react-router-dom v5 ou inférieure

    useEffect(() => {
        console.log(user);
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { access_token, user: userData } = await AuthServices.signIn(credentials)

        // Mettre à jour l'état global de l'utilisateur
        setUser(userData);
        
        // Stocker le jeton
        TokenServices.setToken(access_token);
        
        // Rediriger l'utilisateur vers la page d'accueil
        navigate('/');
    }

    
    return  (
        <section className="container">
            <div className="authPage">
                <div className="center">
                    <div className="authForm">
                        <h2>Connexion</h2>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="email">
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email"
                                    placeholder="Votre Email" 
                                    required 
                                    value={credentials.email} 
                                    onChange={handleChange} 
                                />
                            </label>
                            <label htmlFor="password">
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="password"
                                    placeholder="Votre Mot de passe" 
                                    required 
                                    value={credentials.password} 
                                    onChange={handleChange} 
                                />
                            </label>
                            <button type="submit">Se connecter</button>
                            <Link to="/forgot-password">Mot de passe oublié ?</Link>
                            <Link to="/signup">S'inscrire</Link>
                        </form>
                    </div>
                    <h3>Vous êtes un décorateur professionel ?</h3>
                    <Link to="/signup-decorator">inscrivez vous ici</Link>
                </div>
            </div>
        </section>
    )
}

export default SigninForm;
