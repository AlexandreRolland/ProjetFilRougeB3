import { BrowserRouter } from "react-router-dom";
import { PublicRoutes } from "./public";


const Router = () => {
    return (
        <BrowserRouter>
            <PublicRoutes />
        </BrowserRouter>
    );
}

export default Router;
