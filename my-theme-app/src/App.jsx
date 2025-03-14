
import './App.css'
import ThemeToggleButton from './component/ThemeBtn.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';


function App() {

  return (
    <ThemeProvider>
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Theme Switcher</h1>
      <ThemeToggleButton />
    </div>
  </ThemeProvider>
  )
}

export default App
