import Nav from "../../layouts/header/nav";
import Footer from "../../layouts/footer/footer";
import { ArticleService } from "../../services/article.services";
import { useEffect, useState } from "react";

function BlogPage() {

    const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState('all'); // état pour suivre la catégorie sélectionnée

    useEffect(() => {
        if (category === 'all') {
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
                    <div className="top">

                        <h1>Articles du <span className="primary-color">Blog</span></h1>
                        <div className="filter-menu">
                            <button className={category === 'Tutoriels' ? 'active' : ''} onClick={() => setCategory('Tutoriels')}>Tutorials</button>
                            <button className={category === 'Conseils' ? 'active' : ''} onClick={() => setCategory('Conseils')}>Tips</button>
                            <button className={category === 'Actualites' ? 'active' : ''} onClick={() => setCategory('Actualites')}>News</button>
                            <button className={category === 'all' ? 'active' : ''} onClick={() => setCategory('all')}>Tous les articles</button>
                        </div>
                    </div>
                    <div className="blog-container">
                        {articles.map((article, index) => (
                            <a key={index} to={`/article/${article.id}`} className="article-block" style={{ backgroundImage: `url(${article.image})` }}>
                                <div className='bottom'>
                                    <h3>{article.title}</h3>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default BlogPage;