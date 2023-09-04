import React, { useState } from "react";
import Nav from "../../layouts/header/nav";
import Footer from "../../layouts/footer/footer";
import { ArticleService } from "../../services/article.services";

function BlogFormPage() {
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
                            <label>Catégorie</label>
                            <select name="category" value={formData.category} onChange={handleChange} required>
                                <option value="Actualites">Actualités</option>
                                <option value="Conseils">Conseils</option>
                                <option value="Tutoriels">Tutoriels</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <label>Sous-titre 1 (facultatif)</label>
                            <input type="text" name="subhead" value={formData.subhead} onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label>Contenu 1</label>
                            <textarea name="content" value={formData.content} onChange={handleChange} required />
                        </div>
                        <div className="input-group">
                            <label>URL de l'image 1</label>
                            <input type="text" name="image" value={formData.image} onChange={handleChange} required />
                        </div>
                        <div className="input-group">
                            <label>Sous-titre 2 (facultatif)</label>
                            <input type="text" name="subhead2" value={formData.subhead2} onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label>Contenu 2 (facultatif)</label>
                            <textarea name="content2" value={formData.content2} onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label>URL de l'image 2 (facultatif)</label>
                            <input type="text" name="image2" value={formData.image2} onChange={handleChange} />
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
