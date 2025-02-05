import React from 'react'
import MaharanaPratap from "../assets/images.jpeg"
import "./UserCard.css"
const UserCard = () => {
    return (
        <div className='user-container'>
            <p id='user-name'>Rahul Kumar</p>
             
            <img id='user-image' src={MaharanaPratap} alt="user-image" />

            <p>Description of Rahul Kumar</p>

        </div>
    )
}

export default UserCard