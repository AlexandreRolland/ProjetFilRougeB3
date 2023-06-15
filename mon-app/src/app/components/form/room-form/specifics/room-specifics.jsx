const RoomSpecifics = ({ description, onDescriptionChange }) => {
    return (
        <div className="roomSpecifics">
            <h2><span className="primary-color">2 -</span> Description de la <span className="primary-color">demande</span></h2>
            <div className="specifics-bg">
                <label htmlFor="">Vous pouvez préciser par exemple un style de décoration qui vous plait, les caractéristiques particulières de votre pièce...</label>
                <textarea placeholder="écrire ici" value={description} onChange={onDescriptionChange} />
            </div>
        </div>
    );
}

export default RoomSpecifics;
