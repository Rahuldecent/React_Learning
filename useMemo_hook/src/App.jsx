import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0);

  function expensiveTask(num) {
    console.log("inside Expensive Task")
    for (let i = 0; i < 1000000000; i++) { }
    return num * 2
  }
  let doubleVal = expensiveTask(4)
  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <div>
        count : {count}
      </div>
      <div>
   double : {doubleVal}
      </div>
    </>
  )
}

export default App
