import { TokenServices } from './token.services';

async function createArticle(article) {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/article`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + TokenServices.getToken(),
            },
            body: JSON.stringify(article)
        });

        if (!response.ok) {
            throw new Error('Une erreur est survenue lors de la création de l\'article');
        }

        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function getArticles() {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/article`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + TokenServices.getToken(),
            },
        });

        if (!response.ok) {
            throw new Error('Une erreur est survenue lors de la récupération des articles');
        }

        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function getArticleById(articleId) {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/article/${articleId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + TokenServices.getToken(),
            },
        });

        if (!response.ok) {
            throw new Error('Une erreur est survenue lors de la récupération des détails de l\'article');
        }

        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function deleteArticle(articleId) {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/article/${articleId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + TokenServices.getToken(),
            },
        });

        if (!response.ok) {
            throw new Error('Une erreur est survenue lors de la suppression de l\'article');
        }

        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function updateArticle(articleId, updatedArticle) {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/article/${articleId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + TokenServices.getToken(),
            },
            body: JSON.stringify(updatedArticle)
        });

        if (!response.ok) {
            throw new Error('Une erreur est survenue lors de la mise à jour de l\'article');
        }

        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}



export const ArticleService = {
    createArticle,
    getArticles,
    getArticleById,
    deleteArticle,
    updateArticle,

};
