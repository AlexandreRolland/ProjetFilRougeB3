import React from 'react';

const RoomType = ({ roomType, onRoomChange }) => {
    const rooms = ["salon", "chambre", "cuisine", "salledebain", "bureau", "autre"]; 

    return (
        <div className="roomType">
            <h2><span className="primary-color">1 -</span> Choisissez votre <span className="primary-color">pièce</span></h2>
            <div className="type-bg">
            {rooms.map((room, index) => (
    <label key={index} className={room === roomType ? 'active' : ''}>
        <input type="radio" name="room" value={room} onChange={onRoomChange} defaultChecked={room === roomType} />
        <div className={`custom-checkbox ${room}`} />
    </label>
))}
            </div>
        </div>
    );
}

export default RoomType;
