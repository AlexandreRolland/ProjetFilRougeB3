import React, { useState } from "react";
import Nav from "../../layouts/header/nav";
import Footer from "../../layouts/footer/footer";
import { ArticleService } from "../../services/article.services";

function BlogFormPage() {
    const [formData, setFormData] = useState({
        title: "",
        summary: "",
        content: "",
        image: ""
    });

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
            await ArticleService.createArticle(formData);
            alert('Article posté avec succès !');
        } catch (error) {
            console.error("Erreur lors de la création de l'article:", error);
        }
    };

    return (
        <>
            <Nav />
            <section className="container">
                <div className="post-article">
                    <h1>Poster un article</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label>Titre</label>
                            <input type="text" name="title" value={formData.title} onChange={handleChange} required />
                        </div>
                        <div className="input-group">
                            <label>Résumé</label>
                            <textarea name="summary" value={formData.summary} onChange={handleChange} required></textarea>
                        </div>
                        <div className="input-group">
                            <label>Contenu</label>
                            <textarea name="content" value={formData.content} onChange={handleChange} required></textarea>
                        </div>
                        <div className="input-group">
                            <label>URL de l'image</label>
                            <input type="url" name="image" value={formData.image} onChange={handleChange} required />
                        </div>
                        <button type="submit">Publier l'article</button>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default BlogFormPage;
