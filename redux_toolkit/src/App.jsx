
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './features/counter/CounterSlice';

function App() {

const count  = useSelector((state) => state.counter.value);
const dispatch = useDispatch();
function handleDecrementClick() {
  dispatch(decrement());

}

function handleIncrementClick() {
  dispatch(increment());

}
  return (
   <div className="container">
    <button onClick={handleIncrementClick}>+</button>
    <p>Count: {count}</p>
    <button onClick={handleDecrementClick}>-</button>
   </div>
  )
}

export default App
