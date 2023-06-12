import { BrowserRouter } from "react-router-dom";
import { PublicRoutes } from "./public";
import UserContext from "../contexts/UserContext";
import { useState } from "react";


const Router = () => {

    const [user, setUser] = useState(null);
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
