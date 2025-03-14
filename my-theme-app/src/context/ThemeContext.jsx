import React, { useState, createContext, useContext, Children } from "react";


const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light"); // Default theme is "light"
  
    // Function to toggle theme between light and dark
    const toggleTheme = () => {
      setTheme(theme === "dark" ? "light" : "dark");
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={theme === "dark" ? "dark bg-black text-white" : "bg-white text-black"}>
          {children} 
        </div>
      </ThemeContext.Provider>
    );
  };



