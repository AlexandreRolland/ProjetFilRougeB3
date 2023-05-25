import Footer from "../../layouts/footer/footer";
import Nav from "../../layouts/header/nav";
import RoomType from "../../components/form/room-form/type/room-type.jsx";
import RoomSpecifics from "../../components/form/room-form/specifics/room-specifics.jsx";
import RoomPictures from "../../components/form/room-form/pictures/roomPictures";
import RoomDimensions from "../../components/form/room-form/dimensions/roomDimensions";

const RoomFormPage = () => {
    return (
        <>
            <Nav />
            <section className="container">
            <form action="" className="form-container">
                <div className="row">
                <RoomType />
                <RoomSpecifics />
                
                </div>
                <div className="row">
                <RoomPictures />
                <RoomDimensions />

                </div>
           


            </form>

            </section>
            <Footer />
        </>
    );
}

export default RoomFormPage;