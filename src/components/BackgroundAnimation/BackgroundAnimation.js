import React, { useContext } from "react";

import { ThemeContext } from "../../styles/theme";
import styles from "./BackgroundAnimation.module.css";

const BackgroundAnimation = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles.BgAnimation__container}>
      <img
        src="/images/pixel-boy-2.webp"
        alt="Pixel boy hiding behind a door"
        className={styles.BgAnimation__img} // Apply CSS module class for the image
        style={{
          filter: theme === "dark" ? "brightness(90%)" : "none", // Brightness adjustment for dark mode
        }}
      />
    </div>
  );
};

export default BackgroundAnimation;
