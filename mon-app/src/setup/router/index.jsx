import { BrowserRouter } from "react-router-dom";
import { PublicRoutes } from "./public";
import UserContext from "../contexts/UserContext";
import { useState, useEffect } from "react";
import { TokenServices } from "../../app/services/token.services";
import jwt_decode from "jwt-decode";


const Router = () => {

    const [user, setUser] = useState(null);

    // Quand le composant est monté, récupérez le token du stockage local.
    // Si un token est présent, récupérez l'utilisateur associé à ce token et mettez à jour le contexte de l'utilisateur.
    useEffect(() => {
        const initializeUser = async () => {
            const token = TokenServices.getToken();
            if (token) {
                const userFromToken = jwt_decode(token); // decode the JWT to get the user details
                setUser(userFromToken); // Set the user details in the UserContext
            }
        };

        initializeUser();
    }, []);

    console.log(user);
    
    return (
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <PublicRoutes />
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default Router;
