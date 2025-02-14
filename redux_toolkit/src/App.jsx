
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './features/counter/CounterSlice';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0)
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();


  function handleDecrementClick() {
    dispatch(decrement());

  }

  function handleIncrementClick() {
    dispatch(increment());

  }
  function handleResetClick() {
    dispatch(reset())
  }
function handleIncAmount () {
  dispatch(incrementByAmount(amount))
}

  return (
    <div className="container">
      <button onClick={handleIncrementClick}>+</button>
      <p>Count: {count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <button onClick={handleResetClick}>Reset</button>
      <br />
      <input type="number" value={amount} placeholder='Enter Amount' onChange={(e) => setAmount(e.target.value)} />
      <br />
      <br />

      <button onClick={handleIncAmount}>Increment by amount </button>
    </div>
  )
}

export default App
