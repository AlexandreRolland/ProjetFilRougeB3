import React, { useEffect, useState } from 'react';
import { UserServices } from '../../../services/user.services';
import { useNavigate } from 'react-router-dom';

const UserAdminComponent = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('desc');
    const [roleFilter, setRoleFilter] = useState('all');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                let fetchedUsers = await UserServices.getAllUsers();

                if (searchTerm) {
                    fetchedUsers = fetchedUsers.filter(user => user.username.toLowerCase().includes(searchTerm.toLowerCase()));
                }

                if (roleFilter !== 'all') {
                    fetchedUsers = fetchedUsers.filter(user => user.role === roleFilter);
                }

                fetchedUsers.sort((a, b) => sortOrder === 'asc' ? new Date(a.updatedAt) - new Date(b.updatedAt) : new Date(b.updatedAt) - new Date(a.updatedAt));

                setUsers(fetchedUsers);
            } catch (error) {
                console.error("Erreur lors de la récupération des utilisateurs:", error);
            }
        };

        fetchUsers();
    }, [searchTerm, sortOrder, roleFilter]);

    const toggleSortOrder = () => {
        setSortOrder(prevOrder => prevOrder === 'asc' ? 'desc' : 'asc');
    }

    const handleDeleteUser = async (userId) => {
        try {
            await UserServices.removeOneUser(userId);
            const updatedUsers = users.filter(user => user.id !== userId);
            setUsers(updatedUsers);
        } catch (error) {
            console.error("Erreur lors de la suppression de l'utilisateur:", error);
        }
    };

    const handleEditUser = (userId) => {
        navigate(`/user_form/${userId}`);
    };

    return (
        <div className="admin-user">
            <h2>Gestion des <span className='primary-color'>Utilisateurs</span></h2>
            <div className="filter-menu">
                <input type="text" placeholder="Rechercher..." onChange={e => setSearchTerm(e.target.value)} />

                <select onChange={e => setRoleFilter(e.target.value)}>
                    <option value="all">Tous les rôles</option>
                    <option value="Client">Client</option>
                    <option value="Decorateur">Décorateur</option>
                    <option value="Admin">Admin</option>
                </select>

                <button onClick={toggleSortOrder}>
                    Tri ({sortOrder === 'asc' ? 'Ascendant' : 'Descendant'})
                </button>
            </div>
            <div className="admin-users">
                {users.map((user, index) => (
                    <div key={index} className="admin-user">
                        <div className='left'>
                            <h3>{user.username}</h3>
                            <p>Email : {user.email}</p>
                            <p>Role : {user.role}</p>
                            <p>Id : {user.id}</p>
                            <p>Modifié le : {new Date(user.updatedAt).toLocaleDateString()}</p>
                            <p>Crée le : {new Date(user.createdAt).toLocaleDateString()}</p>
                        </div>
                        <div className='right'>
                            <button onClick={() => handleEditUser(user.id)}>Modifier l'utilisateur</button>
                            <button className='delete' onClick={() => handleDeleteUser(user.id)}>Supprimer l'utilisateur</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserAdminComponent;
