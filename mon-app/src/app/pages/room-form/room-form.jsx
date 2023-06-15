import React, { useState, useEffect } from "react";
import { AdvertService } from "../../services/advert.services"; // Remplacer par le chemin correct vers le service

import Footer from "../../layouts/footer/footer";
import Nav from "../../layouts/header/nav";
import RoomType from "../../components/form/room-form/type/room-type.jsx";
import RoomSpecifics from "../../components/form/room-form/specifics/room-specifics.jsx";
import RoomPictures from "../../components/form/room-form/pictures/roomPictures";
import RoomDimensions from "../../components/form/room-form/dimensions/roomDimensions";

const RoomFormPage = () => {
    const [roomSurface, setroomSurface] = useState(0);
    const [total, setTotal] = useState(0);
    const [roomType, setroomType] = useState(null);
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);

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

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        const advert = {
            roomSurface: roomSurface,
            price: total,
            roomType: roomType,
            description: description,
            // Supposons que votre API supporte les envois de fichier.
            // Vous pouvez avoir besoin de modifier cette partie pour correspondre à vos besoins
            picture: file
        }
        await AdvertService.createAdvert(advert);
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
