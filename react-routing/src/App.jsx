
import './App.css'
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dasboard from './components/Dasboard';
import Navbar from './components/Navbar';
import ParamCop from './components/ParamCop';
import Courses from './components/Courses';
import Reports from './components/Reports';
import MockTest from './components/MockTest';
import NotFound from './components/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Navbar />
      <Home />
    </div>
  },
  {
    path: "/about",
    element: <div>
      <Navbar />
      <About />
    </div>
  },
  {
    path: "/dasboard",
    element: <div>
      <Navbar />
      <Dasboard />
    </div>,
    children: [
      {
        path: "courses",
        element: <div>
          <Navbar />
          <Courses />
        </div>
      },
      {
        path: "reports",
        element: <Reports />
      },
      {
        path: "mock-test",
        element: <MockTest />
      }
    ]

  },
  {
    path: "/student/:id",
    element: <div>
      <Navbar />
      <ParamCop />
    </div>
  },

  {
    path:"*",
    element:<NotFound/>
  }
]

)
function App() {

  return (
    <>
      <RouterProvider router={router} />
      {/* <Navbar /> */}
    </>
  )
}

export default App
