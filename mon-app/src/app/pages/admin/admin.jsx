import Nav from "../../layouts/header/nav";
import Footer from "../../layouts/footer/footer";

function AdminPage() {
    return (
        <>
            <Nav />
            <section className="container">
                <div className="admin">
                    <h1>Admin <span className="primary-color">Dashboard</span></h1>
                </div>
                <div className="admin-container">
                    <p>test</p>
                </div>
            </section>
            <Footer />
        </>

    );
}

export default AdminPage;