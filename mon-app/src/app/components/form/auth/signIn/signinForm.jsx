import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { AuthServices } from "../../../../services/auth.service";
import { TokenServices } from "../../../../services/token.services";
import UserContext from "../../../../../setup/contexts/UserContext";

function SigninForm() {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState(null); // Ajout d'un état pour gérer les erreurs

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(user);
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { access_token, user: userData } = await AuthServices.signIn(credentials);
            
            if (!access_token || !userData) {
                throw new Error('Identifiants incorrects.');
            }

            setUser(userData);
            TokenServices.setToken(access_token);
            navigate('/');
        } catch (err) {
            setError(err.message || 'Erreur lors de la connexion. Veuillez réessayer.');
        }
    }

    return (
        <section className="container">
            <div className="authPage">
                <div className="center">
                    <div className="authForm">
                        <h2>Connexion</h2>
                        {error && <p className="error">{error}</p>} {/* Afficher le message d'erreur si présent */}
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
                    <h3>Vous êtes un décorateur professionnel ?</h3>
                    <Link to="/signup_decorator">inscrivez vous ici</Link>
                </div>
            </div>
        </section>
    )
}

export default SigninForm;
