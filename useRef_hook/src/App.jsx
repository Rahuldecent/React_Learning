
import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0)
  let colorChnage = useRef();
  let timerRef = useRef(null)
  function handleCount() {
    setCount(count + 1)
  }
  function handleChangeColor() {
    colorChnage.current.style.backgroundColor = "red"
  }
  function startTimer() {
     timerRef.current = setInterval(() => {
      setTime(time =>time + 1)
    }, 10)
  }
  function stopTimer() {
   clearInterval(timerRef.current)
   timerRef.current = null
  }
  function resetTimer() {
      stopTimer();
      setTime(0)
  }
  return (
    <>
      <h1>StopWatch:{time} seconds</h1>

      <button onClick={startTimer}> Start</button>
      <br /> <br />
      <button onClick={stopTimer}> Stop</button>
      <br /> <br />
      <button onClick={resetTimer}> Reset</button>

    </>
  )
}

export default App
