import { Link } from "react-router-dom";
import Nav from "../../layouts/nav.jsx";
import Footer from "../../layouts/footer.jsx";

function HomePage() {
  return (
    <section maxWidth="lg">
      <Nav />
      <h1>HomePage</h1>
      <Link to="/signin"><button>Signin</button></Link>
      <Footer />
    </section>
  );
}

export default HomePage;
