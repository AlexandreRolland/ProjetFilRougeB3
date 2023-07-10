import {Routes , Route} from 'react-router-dom';
import HomePage from '../../../app/pages/home/homePage.jsx';
import SigninPage from '../../../app/pages/auth/signin/signinPage.jsx'
import SignupPage from '../../../app/pages/auth/signup/signupPage.jsx';
import SignupDecoratorPage from '../../../app/pages/auth/decorator/signupDecoratorPage.jsx';
import RoomFormPage from '../../../app/pages/room-form/room-form.jsx';
import AnnonceList from '../../../app/pages/annonce-list/annonceList.jsx';
import MyAnnonceList from '../../../app/pages/my-annonce-list/myAnnonceList.jsx';
import AnnonceChat from '../../../app/pages/annonce-chat/AnnonceChat.jsx';



export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SigninPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/room_form" element={<RoomFormPage />} />
            <Route path="/signup_decorator" element={<SignupDecoratorPage />} />
            <Route path="/annonce_list" element={<AnnonceList />} />
            <Route path="/my_annonces" element={<MyAnnonceList />} />
            <Route path="/annonce_chat" element={<AnnonceChat />} />
        </Routes>
    );
}