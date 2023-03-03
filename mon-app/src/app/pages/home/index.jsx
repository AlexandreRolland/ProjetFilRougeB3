import { Link } from "react-router-dom";
import Header from "../../layouts/header.jsx";
import Footer from "../../layouts/footer.jsx";
import { Container } from "@mui/system";

function HomePage() {
  return (
     <Container maxWidth="lg">
     <Header/>
      <h1>HomePage</h1>
      <Link to="/signin"><button>Signin</button></Link>
      <Footer />
    </Container>
  );
}

export default HomePage;
