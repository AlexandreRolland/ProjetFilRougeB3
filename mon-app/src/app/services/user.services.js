async function getAllUsers() {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Une erreur est survenue lors de la récupération des utilisateurs');
        }
        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function getUserById(userId) {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Une erreur est survenue lors de la récupération de l\'utilisateur');
        }
        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function removeOneUser(userId) {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Une erreur est survenue lors de la suppression de l\'utilisateur');
        }
        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function updateUser(userId, user) {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(user),
        });
        if (!response.ok) {
            throw new Error('Une erreur est survenue lors de la modification de l\'utilisateur');
        }
        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function updateUserPassword(userId, newPassword) {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/update-password/${userId}`, {
            method: 'PATCH',  // Utilisation de PATCH pour une mise à jour partielle
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ password: newPassword }),
        });
        if (!response.ok) {
            throw new Error('Une erreur est survenue lors de la mise à jour du mot de passe');
        }
        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function updateDecorateur(decorateurId, decorateur) {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/decorateur/${decorateurId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(decorateur),
        });
        if (!response.ok) {
            throw new Error('Une erreur est survenue lors de la modification du décorateur');
        }
        return response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}


export const UserServices = {
    getAllUsers,
    getUserById,
    updateUser,
    updateUserPassword,
    removeOneUser,
    updateDecorateur
};