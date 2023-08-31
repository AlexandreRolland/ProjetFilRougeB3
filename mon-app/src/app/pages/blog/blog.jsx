import Nav from "../../layouts/header/nav";
import Footer from "../../layouts/footer/footer";
import { ArticleService } from "../../services/article.services";
import { useEffect, useState } from "react";

function BlogPage() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        ArticleService.getArticles()
            .then(data => {
                setArticles(data);
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des articles:", error);
            });
    }, []);

    return (
        <>
            <Nav />
            <section className="container">
                <div className="blog">
                    <h1>Articles du <span className="primary-color">Blog</span></h1>
                    <div className="blog-container">
                        {articles.map((article, index) => (
                            <div key={index} className="article-block" style={{ backgroundImage: `url(${article.image})` }}>
                                <div className='bottom'>
                                    <h3>{article.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default BlogPage;