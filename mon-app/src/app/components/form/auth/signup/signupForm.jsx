import { useState } from "react";
import { AuthServices } from "../../../../services/auth.service";
import { Link } from "react-router-dom";

function SignupForm() {

    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
        professional:"false",
        client: {}
    });

    const [isRegistered, setIsRegistered] = useState(false);

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await AuthServices.signUp(credentials);
        
        console.log(credentials);

        // Set the state to true, indicating that the user is registered
        setIsRegistered(true);
    }



    return (
        <section className="container">
            <div className="authPage">
                <div className="center">
                    <div className="authForm">
                        {isRegistered ? (
                            <div className="thanks-signup">
                                <h2>Merci !</h2>
                                <p>Connectez-vous pour continuer.</p>
                                <Link to="/signin" className="button">Se connecter</Link>
                            </div>
                        ) : (
                            <>
                                <h2>Inscription</h2>
                                <form onSubmit={handleSubmit}>
                                    <input type="text" label="Utilisateur" name="username" placeholder="Votre nom d'utilisateur" required value={credentials.username} onChange={handleChange}/>
                                    <input type="email" label="Email" name="email" placeholder="Votre Email" required value={credentials.email} onChange={handleChange} />
                                    <input type="password" label="Mot de passe" name="password" placeholder="Votre Mot de passe" required value={credentials.password} onChange={handleChange}/>
                                    <button type="submit" color="primary" variant="contained" >S'inscrire</button>
                                    <Link to="/signin">Déjà un compte ?</Link>
                                </form>
                            </>
                        )}
                    </div>
                    <h3>Vous êtes un décorateur professionnel ?</h3>
                    <Link>inscrivez vous ici</Link>
                </div>
            </div>
        </section>
    );
}

export default SignupForm;