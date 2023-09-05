import React, { useEffect, useState } from 'react';
import { ArticleService } from '../../../services/article.services';

const BlogAdminComponent = () => {
    const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [sorted, setSorted] = useState(false);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                let fetchedArticles = category === 'all' ? await ArticleService.getArticles() : await ArticleService.getArticleByCategoryName(category);
                
                if (searchTerm) {
                    fetchedArticles = fetchedArticles.filter(article => article.title.toLowerCase().includes(searchTerm.toLowerCase()));
                }

                if (sorted) {
                    fetchedArticles.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
                }

                setArticles(fetchedArticles);
            } catch (error) {
                console.error("Erreur lors de la récupération des articles:", error);
            }
        };

        fetchArticles();
    }, [category, searchTerm, sorted]);

    return (
        <div>
            <h2>Gestion du Blog</h2>
            <div className="filter-menu">
                <input type="text" placeholder="Rechercher..." onChange={e => setSearchTerm(e.target.value)} />
                <select onChange={e => setCategory(e.target.value)}>
                    <option value="all">Toutes les catégories</option>
                    <option value="Tutoriels">Tutorials</option>
                    <option value="Conseils">Tips</option>
                    <option value="Actualites">News</option>
                </select>
                <button onClick={() => setSorted(prevState => !prevState)}>Trier par date</button>
            </div>
            <div className="admin-articles">
                {articles.map((article, index) => (
                    <div key={index} className="admin-article">
                        <h3>{article.title}</h3>
                        <p>Catégorie: {article.category}</p>
                        <p>Date de publication: {new Date(article.publishDate).toLocaleDateString()}</p>
                        <button>Modifier l'article</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogAdminComponent;
