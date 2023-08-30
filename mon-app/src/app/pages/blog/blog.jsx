import Nav from "../../layouts/header/nav";
import Footer from "../../layouts/footer/footer";

function BlogPage() {
    return (
        <>
            <Nav />
            <section className="container">
                <div className="blog">
                    <h1>Articles du<span className="primary-color">Blog</span></h1>
                    <div className="blog-container">
                        <p>test</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>

    );
}

export default BlogPage;