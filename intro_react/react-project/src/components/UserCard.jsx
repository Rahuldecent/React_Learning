import React from 'react'
import MaharanaPratap from "../assets/images.jpeg"
import "./UserCard.css"
const UserCard = (props) => {
    return (
        <div className='user-container'>
            <p id='user-name'>{props.name}</p>
             
            <img id='user-image' src={MaharanaPratap} alt="user-image" />

            <p>Description of {props.name}</p>

        </div>
    )
}

export default UserCard