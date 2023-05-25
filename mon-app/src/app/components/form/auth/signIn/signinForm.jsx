import { useState } from "react";
import { AuthServices } from "../../../../services/auth.service";
import { TokenServices } from "../../../../services/token.services";



function SigninForm() {



    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await AuthServices.signIn(credentials)

        TokenServices.setToken(token.access_token);



        console.log(credentials);

    }


    return (
        <section className="container">
            <div className="signInPage">

            <div className="center">
                <div className="signInForm">

                    <h2>Connexion</h2>

                    <form onSubmit={handleSubmit}>
                        <input type="email" label="Email" name="email" placeholder="Votre Email" fullWidth required value={credentials.email} onChange={handleChange} />
                        <input type="password" label="Mot de passe" name="password" placeholder="Votre Mot de passe" fullWidth required value={credentials.password} onChange={handleChange} />
                        <button type="submit" color="primary" variant="contained" fullWidth>Se connecter</button>
                        <a>Mot de passe oublié ?</a>
                    </form>
                </div>
                <h3>Vous êtes un décorateur professionel ?</h3>
                <a>inscrivez vous ici</a>
            </div>

            </div>

        </section>
    )
}

export default SigninForm;