"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

const curMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

function DarkModeProvider({ children }) {
  const [saveMade, setSaveMode] = useLocalStorage("mode");
  const [darkMode, setDarkMode] = useState(
    saveMade ? saveMade : saveMade && curMode
  );

  const toggleDarkMode = () => {
    setDarkMode((isDark) => !isDark);
    setSaveMode((isDark) => !isDark);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
      document.documentElement.classList.add("light-mode");
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  return useContext(DarkModeContext);
}

export { DarkModeProvider, useDarkMode };
