import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ArticleService } from '../../services/article.services';
import Nav from "../../layouts/header/nav.jsx";
import Footer from "../../layouts/footer/footer.jsx";
import { useState } from 'react';


function SingleArticlePage() {
    const { id } = useParams();

    const [article, setArticle] = useState(null);

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

    function formatDate(isoString) {
        const date = new Date(isoString);

        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('fr-FR', options);
    }

    if (!article) return <p>Chargement...</p>;

    // Render the article details

    return (
        <>
            <Nav />
            <section className="container">
                {/* {*page single article*} */}
                <div className="single-article">
                    <div className="top">
                        <span className='h1'>Article du <span className="primary-color">Blog</span></span>
                    </div>
                    <div className="single-article-container">
                        <div className='content-all'>
                            <div>
                            <h1 className='h2'>{article.title}</h1>
                            <span className='date'>Publié le : {formatDate(article.createdAt)}</span>
                            </div>
                            <div className='content'>

                                <div className='content-row'>
                                    <div className='left'>
                                        <h2 className='h3'>{article.subhead}</h2>
                                        <p className='p'>{article.content}</p>
                                    </div>
                                    <div className='right'>

                                        <img src={article.image} alt="" />
                                    </div>

                                </div>
                                <div className='content-row'>
                                    <div className='left'>
                                        <img src={article.image2} alt="" />

                                    </div>
                                    <div className='right'>
                                        <h2 className='h3'>{article.subhead2}</h2>
                                        <p className='p'>{article.content2}</p>
                                    </div>

                                </div>
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