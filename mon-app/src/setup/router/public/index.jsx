import {Routes , Route} from 'react-router-dom';
import HomePage from '../../../app/pages/home/index.jsx';
import SigninPage from '../../../app/pages/auth/signin/index.jsx'


export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SigninPage/>} />
        </Routes>
    );
}