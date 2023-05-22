import { Link } from "react-router-dom";
import SigninForm from "../../../components/form/signin-form.jsx";
import Footer from "../../../layouts/footer/footer";
import Header from "../../../layouts/header/nav.jsx";


const SigninPage = () => {
    return (
        <div>
            <section maxWidth="lg">
                <Header />
                <h1 className="center-text">Signin</h1>
                <SigninForm />
                <Link to="/"><button>home</button></Link>           
                <Footer />
            </section>
        </div>
    );
}

export default SigninPage;