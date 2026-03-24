import React from "react";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { TiThMenuOutline } from "react-icons/ti";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [navOpen, setNavopen] = useState(false);

  // Apply theme
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, navOpen, setNavopen }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
