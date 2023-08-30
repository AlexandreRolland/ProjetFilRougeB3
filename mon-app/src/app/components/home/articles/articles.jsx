const Articles = ({ articles }) => {
    return (
        <section className="container">
            <h2>Consultez les <span className="primary-color">articles</span> rédigés par nos <span className="primary-color">experts</span></h2>
            <div className="articles-hp">
                {articles.slice(0, 5).map((article, index) => (
                    <div key={index} className="article-block" style={{ backgroundImage: `url(${article.image})` }}>
                        <h2>{article.title}</h2>
                        <p>{article.summary}</p>
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