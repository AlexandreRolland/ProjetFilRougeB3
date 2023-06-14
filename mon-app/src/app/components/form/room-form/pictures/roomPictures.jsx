const RoomPictures = () => {
    return (
        <div className="roomPictures">
            <h2><span className="primary-color">3 -</span> Photos de votre <span className="primary-color">pièce</span></h2>
            <div className="pictures-bg">
                <label htmlFor="">Merci de renseigner des photos de votre pièce sous tous ses angles</label>
                <div className="upload-btn-wrapper">
                    <button className="btn">Télécharger un fichier</button>
                    <input type="file" name="myfile" />
                </div>
                <p>Vos photos :</p>
                <div>

                </div>

            </div>
        </div>
    );
}

export default RoomPictures;