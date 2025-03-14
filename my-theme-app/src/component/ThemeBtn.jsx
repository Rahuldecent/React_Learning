import React from 'react'
import { useTheme } from '../context/ThemeContext'

function ThemeToggleButton() {
    const { theme, toggleTheme } = useTheme(); // Use context
  
    return (
      <button 
        onClick={toggleTheme} 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600"
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    );
  }

export default ThemeToggleButton