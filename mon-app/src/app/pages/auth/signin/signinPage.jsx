import React from "react";

import SigninForm from "../../../components/form/auth/signIn/signinForm.jsx";
import Footer from "../../../layouts/footer/footer";
import Header from "../../../layouts/header/nav.jsx";

const SigninPage = () => {

    return (
        <div className="fullPage">
            <Header />
            <SigninForm />           
            <Footer />
        </div>
    );
}

export default SigninPage;
