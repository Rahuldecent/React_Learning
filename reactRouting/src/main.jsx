import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Offices from './components/Offices/Offices.jsx'
import Services from './components/services/Services.jsx'

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='offices' element={<Offices />} />
      <Route path='contact' element={<Contact />} />
      <Route path='services' element= {<Services/>} />

    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
