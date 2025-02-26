
import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {


  return (
   <Router>
  <Header/>
  <Home/>
  <Footer/>
  </Router>
  )
}

export default App
