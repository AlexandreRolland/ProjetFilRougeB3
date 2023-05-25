const RoomDimensions = () => {
    return (
        <div className="roomDimensions">
            <h2><span className="primary-color">4 -</span> Les <span className="primary-color">dimensions</span></h2>
            <div className="dimensions-bg">
                <label htmlFor=""><strong>Sélectionnez les dimensions de votre pièce.</strong><br />(Arrondissez si votre pièce n’est pas rectangulaire)</label>
                <input type="text" />
                <p>Total à payer</p>
                <div>

                </div>


            </div>
        </div>
    );
}

export default RoomDimensions;