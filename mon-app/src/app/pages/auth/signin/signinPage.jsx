import React, { useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom'; // utilisez useHistory pour react-router-dom v5 ou inférieure
import UserContext from "../../../../setup/contexts/UserContext";
import SigninForm from "../../../components/form/auth/signIn/signinForm.jsx";
import Footer from "../../../layouts/footer/footer";
import Header from "../../../layouts/header/nav.jsx";

const SigninPage = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate(); // utilisez useHistory pour react-router-dom v5 ou inférieure

    // Rediriger l'utilisateur s'il est déjà connecté
    useEffect(() => {
        if (user) {
            navigate('/room_form'); // modifiez cela selon la page vers laquelle vous souhaitez rediriger
        }
    }, [user, navigate]);

    console.log(user);

    return (
        <div className="fullPage">
            <Header />
            <SigninForm />           
            <Footer />
        </div>
    );
}

export default SigninPage;
