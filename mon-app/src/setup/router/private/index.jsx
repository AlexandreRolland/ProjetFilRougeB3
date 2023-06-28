import {Routes , Route} from 'react-router-dom';
import AnnonceList from '../../../app/pages/annonce-list/annonceList.jsx';



export const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path="/annonce_list" element={<AnnonceList />} />
        </Routes>
    );
}