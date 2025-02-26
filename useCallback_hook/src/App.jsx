import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildComponents from './components/ChildComponents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>Count:{count}</p>

      </div>
      <br />
      <div>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
      </div>
      <br />
      <div>
        <ChildComponents btnName="Hello2" />
      </div>
    </>
  )
}

export default App
