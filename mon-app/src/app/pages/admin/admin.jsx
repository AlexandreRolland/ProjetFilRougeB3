import React, { useState } from 'react';
import Nav from "../../layouts/header/nav";
import Footer from "../../layouts/footer/footer";
import BlogAdminComponent from '../../components/admin/blog/blogAdminComponent';
import UserAdminComponent from '../../components/admin/user/UserAdminComponent';
import AnnonceAdminComponent from '../../components/admin/annonce/annonceAdminComponent';

function AdminPage() {
    const [activeComponent, setActiveComponent] = useState(null);

    const renderComponent = () => {
        switch (activeComponent) {
            case 'user':
                return <UserAdminComponent />;
            case 'annonce':
                return <AnnonceAdminComponent />;
            case 'blog':
                return <BlogAdminComponent />;
            default:
                return null;
        }
    };

    return (
        <>
            <Nav />
            <section className="container">
                <div className="admin">
                    <h1>Admin <span className="primary-color">Dashboard</span></h1>
                    <div className="admin-controls">
                        <button onClick={() => setActiveComponent('user')}>Utilisateurs</button>
                        <button onClick={() => setActiveComponent('annonce')}>Annonces</button>
                        <button onClick={() => setActiveComponent('blog')}>Blog</button>
                    </div>
                    <div className="admin-container">
                        {renderComponent()}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default AdminPage;
