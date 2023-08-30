import Nav from "../../layouts/header/nav";
import Footer from "../../layouts/footer/footer";

function AdminPage() {
    return (
        <>
            <Nav />
            <section className="container">
            <h1>Admin <span className="primary-color">Dashboard</span></h1>
            </section>
            <Footer />
        </>

    );
}

export default AdminPage;