import React from 'react'

const Button = (props) => {
  return (
    <div>
        <p>{props.children}</p>
        <button onClick={props.handleClick}>Click me</button>
    </div>
  )
}

export default Button