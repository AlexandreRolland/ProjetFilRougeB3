import { Link } from "react-router-dom";




function SignupDecoratorForm() {
    return (
    <section className="container">
                <div className="authPage">
    
                <div className="center">
                    <div className="authForm">
    
                        <h2>Inscription<br/>Décorateur</h2>
    
                        <form>
                        <input type="text" label="Utilisateur" name="user" placeholder="Votre nom d'utilisateur" fullWidth required />
                            <input type="email" label="Email" name="email" placeholder="Votre Email" fullWidth required />
                            <input type="password" label="Mot de passe" name="password" placeholder="Votre Mot de passe" fullWidth required />
                            <input type="file" label="Mot de passe" name="password" placeholder="Votre Mot de passe" fullWidth required />
                            <button type="submit" color="primary" variant="contained" fullWidth>S'inscrire</button>
                            <p>Après vérification, votre compte sera<br/>convertie en tant que Décorateur</p>
                        </form>
                    </div>
                    <h3>Déjà un compte ?</h3>
                    <Link to="/signin">Connectez vous ici</Link>
                </div>
    
                </div>
    
            </section>
    );   
    }
    
    export default SignupDecoratorForm;