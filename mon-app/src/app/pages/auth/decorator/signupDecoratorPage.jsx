import SignupDecoratorForm from "../../../components/form/auth/decorator/signupDecorator.jsx";
import Footer from "../../../layouts/footer/footer";
import Header from "../../../layouts/header/nav.jsx";


const SigninPage = () => {
    return (
        <div className="fullPage">
                <Header />
                <SignupDecoratorForm />           
                <Footer />
        </div>
    );
}

export default SigninPage;