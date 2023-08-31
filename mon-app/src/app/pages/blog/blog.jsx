import Nav from "../../layouts/header/nav";
import Footer from "../../layouts/footer/footer";
import { ArticleService } from "../../services/article.services";
import { useEffect, useState } from "react";

function BlogPage() {

     const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState([]); // état pour suivre la catégorie sélectionnée

    useEffect(() => {
        if(category === 'all') {
            ArticleService.getArticles()
                .then(data => {
                    setArticles(data);
                })
                .catch(error => {
                    console.error("Erreur lors de la récupération des articles:", error);
                });
        } else {
            ArticleService.getArticleByCategoryName(category)
                .then(data => {
                    setArticles(data);
                })
                .catch(error => {
                    console.error("Erreur lors de la récupération des articles:", error);
                });
        }
    }, [category]);

    return (
        <>
            <Nav />
            <section className="container">
                <div className="blog">
                    <h1>Articles du <span className="primary-color">Blog</span></h1>
                    {/* Ajout du menu de filtrage */}
                    <div className="filter-menu">
                        <button onClick={() => setCategory('all')}>Tous les articles</button>
                        <button onClick={() => setCategory('NEWS')}>News</button>
                        <button onClick={() => setCategory('TIPS')}>Tips</button>
                        <button onClick={() => setCategory('TUTORIAL')}>Tutorials</button>
                    </div>
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