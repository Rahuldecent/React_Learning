import React from 'react'
import {  Outlet, useNavigate } from 'react-router-dom'

const Dasboard = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/")
    }


    return (
        <div>
            <h1>Dasboard</h1>
            <button onClick={handleClick}>
                Move to Home Page

            </button>
            <Outlet/>
        </div>
    )
}

export default Dasboard