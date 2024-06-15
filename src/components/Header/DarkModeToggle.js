import React, { useContext } from "react";
import { ThemeContext } from "./../../styles/theme";

// credit to:
// https://www.petermekhaeil.com/adding-dark-mode-to-your-tailwind-css-website/
const DarkModeToggle = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const isChecked = theme === "dark";

  const changeTheme = () => {
    let themeToChangeTo = theme === "dark" ? "light" : "dark";
    setTheme(themeToChangeTo);
    localStorage.setItem("theme", themeToChangeTo);
  };

  return (
    <div>
      <input
        className="toggle"
        type="checkbox"
        id="toggle"
        onChange={changeTheme}
        checked={isChecked}
      />
      <label
        className="toggle_label"
        htmlFor="toggle"
        style={{ position: "relative" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={theme === "dark" ? "white" : "black"}
          height="2rem"
          width="2rem"
          style={{ position: "absolute", top: "0.5rem", left: "5px" }}
        >
          {/* Moon icon path here */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={theme === "dark" ? "white" : "black"}
          height="2rem"
          width="2rem"
          style={{
            position: "absolute",
            top: "0.5rem",
            right: "5px",
          }}
        >
          {/* Sun icon path here */}
          <path
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </label>
    </div>
  );
};

export default DarkModeToggle;
