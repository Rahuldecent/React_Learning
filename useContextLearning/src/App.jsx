
import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'


// step 1 create content
// const userContext = createContext();

const themeContext = createContext()

// step 2 wrap all the child inside a provider
// step 3 pass value
// step 4 consumer ke andar ja ke consume kar lo

function App() {
  // const [user, setUser ] = useState({name:"Rahul kumar"})
  const [theme, setTheme] = useState('light')
  return (
    <>

      <themeContext.Provider value={{theme,setTheme}}>
        <div className='context' style={{backgroundColor:theme==='light' ? "beige":"black"}}>
          <ChildA />

        </div>
      </themeContext.Provider>
      {/* <userContext.Provider value={user}>
    <ChildA/>

    </userContext.Provider> */}
    </>
  )
}

export default App
// export {userContext}

export { themeContext }
