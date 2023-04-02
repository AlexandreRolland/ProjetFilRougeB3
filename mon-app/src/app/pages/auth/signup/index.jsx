import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import SigninForm from "../../../components/form/signin-form.jsx";
import Footer from "../../../layouts/footer";
import Header from "../../../layouts/header";
import "../../../assets/global.css"

const SigninPage = () => {
    return (
        <div>
            <Container maxWidth="lg">
                <Header />
                <h1 className="center-text">Signin</h1>
                <SigninForm />
                <Link to="/"><button>home</button></Link>           
                <Footer />
            </Container>
        </div>
    );
}

export default SigninPage;