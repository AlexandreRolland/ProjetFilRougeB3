import React, { useState, useEffect } from "react";
import Nav from "../../../layouts/header/nav";
import Footer from "../../../layouts/footer/footer";
import { ArticleService } from "../../../services/article.services";

function BlogUpdateFormPage({ match }) {
    const [formData, setFormData] = useState({
        title: "",
        category: "Conseils",
        subhead: "",
        content: "",
        image: "",
        subhead2: "",
        content2: "",
        image2: ""
    });

    useEffect(() => {
        async function fetchArticle() {
            try {
                const articleData = await ArticleService.getArticleById(match.params.id);
                setFormData(articleData);
            } catch (error) {
                console.error("Erreur lors de la récupération de l'article:", error);
            }
        }
        fetchArticle();
    }, [match.params.id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await ArticleService.updateArticle(match.params.id, formData);
            alert('Article mis à jour avec succès !');
        } catch (error) {
            console.error("Erreur lors de la mise à jour de l'article:", error);
        }
    };

    return (
        <>
            <Nav />
            <section className="container">
                <div className="post-article">
                    <h1>Mettre à jour un <span className="primary-color">article</span></h1>
                    <div className="post-container">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Titre</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="category">Catégorie</label>
                                <select
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="Conseils">Conseils</option>
                                    <option value="Actualités">Actualités</option>
                                    <option value="Tutoriels">Tutoriels</option>
                                    {/* Add other categories if needed */}
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subhead">Sous-titre 1</label>
                                <input
                                    type="text"
                                    id="subhead"
                                    name="subhead"
                                    value={formData.subhead}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="content">Contenu 1</label>
                                <textarea
                                    id="content"
                                    name="content"
                                    value={formData.content}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="image">Image URL 1</label>
                                <input
                                    type="text"
                                    id="image"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subhead2">Sous-titre 2</label>
                                <input
                                    type="text"
                                    id="subhead2"
                                    name="subhead2"
                                    value={formData.subhead2}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="content2">Contenu 2</label>
                                <textarea
                                    id="content2"
                                    name="content2"
                                    value={formData.content2}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="image2">Image URL 2</label>
                                <input
                                    type="text"
                                    id="image2"
                                    name="image2"
                                    value={formData.image2}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button type="submit">Mettre à jour l'article</button>
                        </form>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default BlogUpdateFormPage;
