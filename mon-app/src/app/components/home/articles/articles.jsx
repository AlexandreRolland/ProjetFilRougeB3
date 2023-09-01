import React from 'react';
import { Link } from 'react-router-dom';


const Articles = ({ articles }) => {
    return (
        <section className="container">
            <h2>Consultez les <span className="primary-color">articles</span> rédigés par nos <span className="primary-color">experts</span></h2>
            <div className="articles-hp">
                {articles.slice(0, 5).map((article, index) => (
                    <Link key={index} to={`/article/${article.id}`}>
                    <div key={index} className="article-block" style={{ backgroundImage: `url(${article.image})` }}>
                        <div className='bottom'>
                            <h3>{article.title}</h3>
                        </div>
                    </div>
                    </Link>
                ))}
                <a href="/blog/" className="article-block see-all">
                    <span className='icone'></span>
                    <a href='/blog/'>Voir tous les articles</a>
                </a>
            </div>
        </section>
    );
};

export default Articles;