
import { useState } from 'react'
import './App.css'
import Card from './components/card'
import Logoutbtn from './components/Logoutbtn'
import Loginbtn from './components/Loginbtn'
import Button from './components/Button'

function App() {
  // const [isLoggedIn, setisLoggedIn] = useState(true)

  // if(isLoggedIn) {
  //   return (
  //     <Logoutbtn/>
  //   )
  // } else {
  //   return (
  //     <Loginbtn/>
  //   )
  // }

  function handleClick() {
    alert("I am  clicked")
  }
  function handleMouseOver() {
    alert("Welcome")
  }
  function handleInputChange(e) {
    console.log("value till now :" + e.target.value )
  }
  function handleFormSubmit() {
    alert("Form Submit kar du kya")
  }
  return (
   <>
   <form  onSubmit={handleFormSubmit}>
   <input type="text" onChange={(e) => handleInputChange(e)} />
   <button type='submit'>Submit</button>
   </form>
   <br/>
   {/* <p onMouseOver={handleMouseOver} style={{border:"1px solid red",gap:"10rem"}}>Hello Guys</p>
   <button onClick={handleClick}>
    Click Me
   </button> */}
   </>
  )
}

export default App
