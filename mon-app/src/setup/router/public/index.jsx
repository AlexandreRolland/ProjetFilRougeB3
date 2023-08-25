import {Routes , Route, Navigate} from 'react-router-dom';
import HomePage from '../../../app/pages/home/homePage.jsx';
import SigninPage from '../../../app/pages/auth/signin/signinPage.jsx'
import SignupPage from '../../../app/pages/auth/signup/signupPage.jsx';
import SignupDecoratorPage from '../../../app/pages/auth/decorator/signupDecoratorPage.jsx';
import RoomFormPage from '../../../app/pages/room-form/room-form.jsx';
import AnnonceList from '../../../app/pages/annonce-list/annonceList.jsx';
import MyAnnonceList from '../../../app/pages/my-annonce-list/myAnnonceList.jsx';
import AnnonceChat from '../../../app/pages/annonce-chat/AnnonceChat.jsx';
import {useContext} from "react"
import UserContext from '../../contexts/UserContext.js';


export const AppRoutes = () => {
    const { user } = useContext(UserContext);
    return (
        <Routes>
            {/* test */}
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={!user ? <SigninPage/> : <Navigate to="/" />} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/signup_decorator" element={<SignupDecoratorPage />} />

            <Route path="/room_form" element={user ? <RoomFormPage /> : <Navigate to="/signin" />} />
      <Route path="/annonce_list" element={user ? <AnnonceList /> : <Navigate to="/signin" />} />
      <Route path="/my_annonces" element={user ? <MyAnnonceList /> : <Navigate to="/signin" />} />
      <Route path="/annonce_chat" element={user ? <AnnonceChat /> : <Navigate to="/signin" />} />
      <Route path="/annonce_chat/:id" element={user ? <AnnonceChat /> : <Navigate to="/signin" />} />
        </Routes>
        );
    };
    
    export default AppRoutes;