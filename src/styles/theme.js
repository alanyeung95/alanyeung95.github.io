import { ThemeProvider } from "styled-components";

import { useState, createContext, useEffect } from "react";
import { lightTheme, darkTheme } from "../themes/default";
import GlobalStyles from "./globals";

export const ThemeContext = createContext();

const Theme = ({ children }) => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      let savedTheme = localStorage.getItem("theme");

      if (savedTheme === undefined || savedTheme === null) {
        localStorage.setItem("theme", "dark");
        setTheme("dark");
      } else {
        setTheme(savedTheme);
      }
    }
  }, []);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Theme;
