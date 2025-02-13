import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/about")
    }
  return (
    <div>
        <h1>Home</h1>
        <br />
        <button onClick={handleClick}>
            Move to About Page
        </button>
    </div>
    
  )
}

export default Home