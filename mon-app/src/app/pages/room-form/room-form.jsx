import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Utilisez cet import à la place de useHistory
import { AdvertService } from "../../services/advert.services";

import Footer from "../../layouts/footer/footer";
import Nav from "../../layouts/header/nav";
import RoomType from "../../components/form/room-form/type/room-type.jsx";
import RoomSpecifics from "../../components/form/room-form/specifics/room-specifics.jsx";
import RoomPictures from "../../components/form/room-form/pictures/roomPictures";
import RoomDimensions from "../../components/form/room-form/dimensions/roomDimensions";
import UserContext from "../../../setup/contexts/UserContext";

const RoomFormPage = () => {
    const [roomSurface, setroomSurface] = useState(0);
    const [total, setTotal] = useState(0);
    const [roomType, setroomType] = useState(null);
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);
    const navigate = useNavigate(); // Nouveau hook pour la redirection

    useEffect(() => {
        setTotal(roomSurface * 1.5);
    }, [roomSurface]);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleRoomChange = (event) => {
        setroomType(event.target.value);
    }

    const handleroomSurfaceChange = (event) => {
        setroomSurface(event.target.value ? +event.target.value : '');
    }

    const { user } = useContext(UserContext);

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        const advert = {
            roomSurface: roomSurface,
            price: total,
            roomType: roomType,
            description: description,
            picture: file,
            user: user
        }
        
        try {
            await AdvertService.createAdvert(advert);
            navigate('/my_annonces'); // Redirection en cas de succès
        } catch (error) {
            alert('Une erreur est survenue lors de la création de l\'annonce.'); // Message d'erreur en cas d'échec
        }
    }

    return (
        <>
            <Nav />
            <section className="container">
                <form action="" className="form-container" onSubmit={handleOnSubmit}>
                    <div className="row">
                        <RoomType roomType={roomType} onRoomChange={handleRoomChange} />
                        <RoomSpecifics description={description} onDescriptionChange={handleDescriptionChange} />
                    </div>
                    <div className="row">
                        <RoomPictures file={file} onFileChange={handleFileChange} />
                        <RoomDimensions roomSurface={roomSurface} total={total} onroomSurfaceChange={handleroomSurfaceChange} />
                    </div>
                </form>
            </section>
            <Footer />
        </>
    );
}

export default RoomFormPage;
