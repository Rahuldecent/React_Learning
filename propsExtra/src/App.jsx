
import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'

function App() {
   const [count ,setCount] = useState(0);

   function handleClick() {
    setCount(count+1);
   }
  return (
    <>
    <Card name="Rahul Kumar">
      <h1>Hi this is heading from props</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, laboriosam.</p>
      <img src="../src/assets/react.svg" alt="" />
      </Card>

      <Button handleClick = {handleClick}>
      <h1>{count}</h1>
      </Button>
    </>
  )
}

export default App
