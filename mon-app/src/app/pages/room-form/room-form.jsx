import Footer from "../../layouts/footer/footer";
import Nav from "../../layouts/header/nav";
import RoomType from "../../components/form/room-form/type/room-type.jsx";

const RoomFormPage = () => {
    return (
        <>
            <Nav />
            <section className="container">
            <form action="" className="form-container">
                <div className="row">
                <RoomType />
                
                </div>
                <div className="row">

                </div>
           


            </form>

            </section>
            <Footer />
        </>
    );
}

export default RoomFormPage;