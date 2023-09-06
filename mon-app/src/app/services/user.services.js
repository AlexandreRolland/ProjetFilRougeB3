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


export const UserServices = {
    getAllUsers,
    removeOneUser,
};