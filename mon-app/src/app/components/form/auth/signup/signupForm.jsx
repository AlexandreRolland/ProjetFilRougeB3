



function SignupForm() {
return (
<section className="container">
            <div className="authPage">

            <div className="center">
                <div className="authForm">

                    <h2>Inscription</h2>

                    <form>
                    <input type="text" label="Utilisateur" name="user" placeholder="Votre nom d'utilisateur" fullWidth required />
                        <input type="email" label="Email" name="email" placeholder="Votre Email" fullWidth required />
                        <input type="password" label="Mot de passe" name="password" placeholder="Votre Mot de passe" fullWidth required />
                        <button type="submit" color="primary" variant="contained" fullWidth>S'inscrire</button>
                        <a href="/signin">Déjà un compte ?</a>
                    </form>
                </div>
                <h3>Vous êtes un décorateur professionel ?</h3>
                <a>inscrivez vous ici</a>
            </div>

            </div>

        </section>
);   
}

export default SignupForm;