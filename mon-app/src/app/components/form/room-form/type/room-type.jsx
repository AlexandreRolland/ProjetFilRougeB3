import React, { useState } from 'react';

const RoomType = () => {
    const rooms = ["salon", "chambre", "cuisine", "salledebain", "bureau", "autre"]; 
    const [selectedRoom, setSelectedRoom] = useState(null);

    const handleChange = (event) => {
        setSelectedRoom(event.target.value);
    };

    return (
        <div className="roomType">
            <h2><span className="primary-color">1 -</span> Choisissez votre <span className="primary-color">pièce</span></h2>
            <div className="type-bg">
            {rooms.map((room, index) => (
    <label key={index} className={room === selectedRoom ? 'active' : ''}>
        <input type="radio" name="room" value={room} onChange={handleChange} checked={room === selectedRoom} />
        <div className={`custom-checkbox ${room}`} />
    </label>
))}
            </div>
        </div>
    );
}

export default RoomType;
