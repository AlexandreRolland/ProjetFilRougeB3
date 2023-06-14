import React, { useState, useEffect } from "react";

const RoomDimensions = () => {
    const [area, setArea] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(area * 1.5);
    }, [area]);

    return (
        <div className="roomDimensions">
            <h2><span className="primary-color">4 -</span> Les <span className="primary-color">dimensions</span></h2>
            <div className="dimensions-bg">
                <label><strong>Saisissez la surface totale de votre pièce en m².</strong></label>
                <div className="dimensions-surface">
                <input type="number" placeholder="" onChange={e => setArea(e.target.value ? +e.target.value : '')} />
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
