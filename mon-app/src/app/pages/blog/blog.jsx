import Nav from "../../layouts/header/nav";
import Footer from "../../layouts/footer/footer";
import { ArticleService } from "../../services/article.services";

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
                <section className="container">
                    <h2>Consultez les <span className="primary-color">articles</span> rédigés par nos <span className="primary-color">experts</span></h2>
                    <div className="articles-hp">
                        {articles.map((article, index) => (
                            <div key={index} className="article-block" style={{ backgroundImage: `url(${article.image})` }}>
                                <div className='bottom'>
                                    <h3>{article.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BlogPage;