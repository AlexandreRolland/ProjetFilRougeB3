import React, { useState, useEffect } from "react";
import Nav from "../../layouts/header/nav";
import Footer from "../../layouts/footer/footer";
import { UserServices } from "../../services/user.services";
import { useParams } from 'react-router-dom';

function UserUpdateFormPage() {
    const { id } = useParams();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        role: "Client"
    });

    const [passwordData, setPasswordData] = useState({
        newPassword: ""
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const user = await UserServices.getUserById(id);
                setFormData({
                    username: user.username,
                    email: user.email,
                    role: user.role
                });
            } catch (error) {
                console.error("Erreur lors de la récupération de l'utilisateur:", error);
            }
        }

        fetchUserData();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handlePasswordChange = (event) => {
        const { name, value } = event.target;
        setPasswordData({
            ...passwordData,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await UserServices.updateUser(id, formData);
            alert('Utilisateur mis à jour avec succès !');
        } catch (error) {
            console.error("Erreur lors de la mise à jour de l'utilisateur:", error);
        }
    };

    const handlePasswordUpdate = async (event) => {
        event.preventDefault();
        try {
            await UserServices.updateUserPassword(id, passwordData.newPassword);
            alert('Mot de passe mis à jour avec succès !');
        } catch (error) {
            console.error("Erreur lors de la mise à jour du mot de passe:", error);
        }
    };

    return (
        <>
            <Nav />
            <section className="container">
                <div className="update-user">
                    <h1>Mettre à jour un <span className="primary-color">utilisateur</span></h1>
                    <div className="update-container">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="role">Rôle</label>
                                <select
                                    id="role"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="Client">Client</option>
                                    <option value="Decorateur">Décorateur</option>
                                    <option value="Admin">Admin</option>
                                </select>
                            </div>

                            <button type="submit">Mettre à jour l'utilisateur</button>
                        </form>

                        <form onSubmit={handlePasswordUpdate}>
                            <div className="form-group">
                                <label htmlFor="newPassword">Nouveau mot de passe</label>
                                <input
                                    type="password"
                                    id="newPassword"
                                    name="newPassword"
                                    value={passwordData.newPassword}
                                    onChange={handlePasswordChange}
                                    required
                                />
                            </div>
                            <button type="submit">Mettre à jour le mot de passe</button>
                        </form>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default UserUpdateFormPage;
