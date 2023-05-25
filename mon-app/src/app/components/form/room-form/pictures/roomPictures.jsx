const RoomPictures = () => {
    return (
        <div className="roomPictures">
            <h2><span className="primary-color">3 -</span> Photos de votre <span className="primary-color">pièce</span></h2>
            <div className="pictures-bg">
                <label htmlFor="">Merci de renseigner des photos de votre pièce sous tous ses angles</label>
                <input type="file"/>
                <p>Vos photos :</p>
                <div>
                    
                </div>

            </div>
        </div>
    );
}

export default RoomPictures;