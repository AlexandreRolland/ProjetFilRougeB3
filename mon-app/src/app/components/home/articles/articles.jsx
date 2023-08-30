import React from 'react';


const Articles = ({ articles }) => {
    return (
        <section className="container">
            <h2>Consultez les <span className="primary-color">articles</span> rédigés par nos <span className="primary-color">experts</span></h2>
            <div className="articles-hp">
                {articles.slice(0, 5).map((article, index) => (
                    <div key={index} className="article-block" style={{ backgroundImage: `url(${article.image})` }}>
                        <div className='bottom'>
                            <h3>{article.title}</h3>
                        </div>
                    </div>
                ))}
                <div className="article-block see-all">
                    Voir tous les articles
                </div>
            </div>
        </section>
    );
};

export default Articles;