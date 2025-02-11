import React from 'react'

import "./Card.css"
const Card = (props) => {
  return (
    <div>
        <input type="text" className='input' onChange={(e)=> props.setName(e.target.value)} />
        <p>Name state variable in card: {props.name}</p>
    </div>
  )
}

export default Card