import { useState } from "react";
import { AuthServices } from "../../../../services/auth.service";
import { Link } from "react-router-dom";

function SignupForm() {
    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
        professional: "false",
        client: {}
    });

    const [error, setError] = useState(null); 
    const [isRegistered, setIsRegistered] = useState(false);

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    const passwordRegex = /(?=.*[A-Z])(?=.*\d)/;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!passwordRegex.test(credentials.password)) {
            setError("Le mot de passe doit contenir au moins une majuscule et un chiffre.");
            return;
        }

        try {
            const response = await AuthServices.signUp(credentials);

            if (response && response.success) {
                setIsRegistered(true);
            } else {
                throw new Error(response.message || 'Une erreur est survenue lors de l\'inscription.');
            }

        } catch (err) {
            setError(err.message || 'Erreur lors de l\'inscription. Veuillez réessayer.');
        }
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
                                {error && <p className="error">{error}</p>}
                                <form onSubmit={handleSubmit}>
                                    <input type="text" label="Utilisateur" name="username" placeholder="Votre nom d'utilisateur" required value={credentials.username} onChange={handleChange} />
                                    <input type="email" label="Email" name="email" placeholder="Votre Email" required value={credentials.email} onChange={handleChange} />
                                    <input type="password" label="Mot de passe" name="password" placeholder="Votre Mot de passe" required value={credentials.password} onChange={handleChange} />
                                    <p className="password-requirements">Le mot de passe doit contenir<br></br> au moins une majuscule et un chiffre.</p>
                                    <button type="submit" color="primary" variant="contained">S'inscrire</button>
                                    <Link to="/signin">Déjà un compte ?</Link>
                                </form>
                            </>
                        )}
                    </div>
                    <h3>Vous êtes un décorateur professionnel ?</h3>
                    <Link to="/signup_decorator">inscrivez-vous ici</Link>
                </div>
            </div>
        </section>
    );
}

export default SignupForm;
