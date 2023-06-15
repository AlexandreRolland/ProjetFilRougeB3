const RoomDimensions = ({ roomSurface, total, onroomSurfaceChange }) => {
    return (
        <div className="roomDimensions">
            <h2><span className="primary-color">4 -</span> Les <span className="primary-color">dimensions</span></h2>
            <div className="dimensions-bg">
                <label><strong>Saisissez la surface totale de votre pièce en m².</strong></label>
                <div className="dimensions-surface">
                <input type="number" placeholder="" value={roomSurface} onChange={(event) => onroomSurfaceChange(event)} />
                <span>M²</span>
                </div>
                <p>Total à payer</p>
                <div className="dimensions-checkout">
                    <span className="dimensions-price">{total} € TTC</span>
                    <button type="submit" className="button">Discuter avec un décorateur</button>
                </div>
            </div>
        </div>
    );
}

export default RoomDimensions;
