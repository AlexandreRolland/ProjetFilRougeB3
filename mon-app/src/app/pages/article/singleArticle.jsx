import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ArticleService } from '../../services/article.services';
import Nav from "../../layouts/header/nav.jsx";
import Footer from "../../layouts/footer/footer.jsx";


function SingleArticlePage() {
    const { id } = useParams();

    useEffect(() => {
        ArticleService.getArticleById(id)
            .then(data => {
                console.log(data);
                setArticle(data);
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des détails de l'article:", error);
            });
    }, [id]);

    // Render the article details

    return (
        <>
            <Nav />
            <section className="container">
              {/* {*page single article*} */}
                <div className="single-article">
                    <div className="top">
                        <h1>Article du <span className="primary-color">Blog</span></h1>
                    </div>
                    <div className="single-article-container">
                        <div className="article-block" style={{ backgroundImage: `url(${article.image})` }}>
                            <div className='bottom'>
                                <h3>{article.title}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default SingleArticlePage;