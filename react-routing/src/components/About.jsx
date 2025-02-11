import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();

function handleClick() {
        navigate("/")
    }
    return (
        <div>
            <h1>About</h1>
            <button onClick={handleClick}>
                Move to Home Page

            </button>
        </div>
    )
}

export default About