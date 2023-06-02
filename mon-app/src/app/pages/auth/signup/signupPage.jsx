import SignupForm from "../../../components/form/auth/signup/signupForm.jsx";
import Footer from "../../../layouts/footer/footer.jsx";
import Header from "../../../layouts/header/nav.jsx";


const SignupPage = () => {
    return (
        <div className="fullPage">
                <Header />
                <SignupForm />           
                <Footer />
        </div>
    );
}

export default SignupPage;