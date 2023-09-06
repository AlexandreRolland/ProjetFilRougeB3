import React, { useEffect, useState } from 'react';
import { ArticleService } from '../../../services/article.services';
import { useNavigate } from 'react-router-dom';

const BlogAdminComponent = () => {
    const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('desc');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                let fetchedArticles = category === 'all' ? await ArticleService.getArticles() : await ArticleService.getArticleByCategoryName(category);
                
                if (searchTerm) {
                    fetchedArticles = fetchedArticles.filter(article => article.title.toLowerCase().includes(searchTerm.toLowerCase()));
                }

                // Tri des articles en fonction de 'updatedAt'
                fetchedArticles.sort((a, b) => sortOrder === 'asc' ? new Date(a.updatedAt) - new Date(b.updatedAt) : new Date(b.updatedAt) - new Date(a.updatedAt));
                
                setArticles(fetchedArticles);
            } catch (error) {
                console.error("Erreur lors de la récupération des articles:", error);
            }
        };

        fetchArticles();
    }, [category, searchTerm, sortOrder]);

    const toggleSortOrder = () => {
        setSortOrder(prevOrder => prevOrder === 'asc' ? 'desc' : 'asc');
    }

    const handleDeleteArticle = async (articleId) => {
        try {
            await ArticleService.deleteArticle(articleId);
            const updatedArticles = articles.filter(article => article.id !== articleId);
            setArticles(updatedArticles);
        } catch (error) {
            console.error("Erreur lors de la suppression de l'article:", error);
        }
    };

    const handleEditArticle = (articleId) => {
        navigate(`/blog_form/${articleId}`);
    };

    return (
        <div className="admin-blog">
            <h2>Gestion du <span className='primary-color'>Blog</span></h2>
            <div className="filter-menu">
                <input type="text" placeholder="Rechercher..." onChange={e => setSearchTerm(e.target.value)} />
                <select onChange={e => setCategory(e.target.value)}>
                    <option value="all">Toutes les catégories</option>
                    <option value="Tutoriels">Tutorials</option>
                    <option value="Conseils">Tips</option>
                    <option value="Actualites">News</option>
                </select>
                <button onClick={toggleSortOrder}>
                    Tri : {sortOrder === 'asc' ? 'Ascendant' : 'Descendant'}
                </button>
            </div>
            <div className="admin-articles">
                {articles.map((article, index) => (
                    <div key={index} className="admin-article">
                        <div className='left'>
                            <h3>{article.title}</h3>
                            <p>Id : {article.id}</p>
                            <p>Catégorie : {article.category}</p>
                            <p>Dernière modification : {new Date(article.updatedAt).toLocaleDateString()}</p>
                            <p>Créé le : {new Date(article.createdAt).toLocaleDateString()}</p>
                        </div>
                        <div className='right'>
                        <button onClick={() => handleEditArticle(article.id)}>Modifier l'article</button>
                            <button className='delete' onClick={() => handleDeleteArticle(article.id)}>Supprimer l'annonce</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogAdminComponent;
