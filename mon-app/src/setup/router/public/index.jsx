import { Routes, Route } from 'react-router-dom';
import { useContext } from "react";
import HomePage from '../../../app/pages/home/homePage.jsx';
import SigninPage from '../../../app/pages/auth/signin/signinPage.jsx'
import SignupPage from '../../../app/pages/auth/signup/signupPage.jsx';
import SignupDecoratorPage from '../../../app/pages/auth/decorator/signupDecoratorPage.jsx';
import RoomFormPage from '../../../app/pages/room-form/room-form.jsx';
import AnnonceList from '../../../app/pages/annonce-list/annonceList.jsx';
import MyAnnonceList from '../../../app/pages/my-annonce-list/myAnnonceList.jsx';
import AnnonceChat from '../../../app/pages/annonce-chat/AnnonceChat.jsx';
import UserContext from '../../contexts/UserContext.js';



export const PublicRoutes = () => {

    const { user } = useContext(UserContext);

    return (
        <Routes>

            {/* Publiques */}

            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signup_decorator" element={<SignupDecoratorPage />} />

            {/* Privées */}

            <Route path="/room_form" element={user ? <RoomFormPage /> : <Navigate to="/signin" />} />
            <Route path="/my_annonces" element={user ? <MyAnnonceList /> : <Navigate to="/signin" />} />
            <Route path="/annonce_chat" element={user ? <AnnonceChat /> : <Navigate to="/signin" />} />
            <Route path="/annonce_chat/:id" element={user ? <AnnonceChat /> : <Navigate to="/signin" />} />

            {/* Protégées */}

            <Route path="/annonce_list" element={user ? <AnnonceList /> : <Navigate to="/signin" />} />
            
        </Routes>
    );
}