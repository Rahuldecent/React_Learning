import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <div className='grid gap-4 m-4 sm:grid-cols-3'>
      <div className='min-h-[130px] bg-orange-500 rounded-2xl shadow-xl'></div>
      <div className='min-h-[130px] bg-teal-500 rounded-2xl shadow-xl'></div>
      <div className='min-h-[130px] bg-teal-500 rounded-2xl shadow-xl'></div>

    </div> */}

    {/* acept ratio */}
    {/* <div columns-3xs>
    <img src="https://cdn.pixabay.com/photo/2024/12/09/05/57/girl-9254216_1280.jpg" alt="image" className='size-150 aspect-3/2 object-cover ...' />
    </div> */}
    
    {/* <div className='bg-sky-200 h-screen w-screen grid place-content-center' >
      <h1 className='text-4xl text-red-500'>Rahul Kumar</h1>
    </div> */}
  
  <div className='grid place-content-center h-screen'>
   <div className=''>
    <div className='p-5 max-w-sm mx-auto bg-sky-400 rounded-3xl '>
      <div>
      <img src="https://cdn.pixabay.com/photo/2024/12/09/05/57/girl-9254216_1280.jpg" alt=""  className='h-100 w-100 object-cover '/>
      </div>
      <div>
        <div>
        <p>Rahul Kumar</p>
        </div>
      </div>
    </div>       
    </div>
   </div>
    </>
  )
}

export default App
