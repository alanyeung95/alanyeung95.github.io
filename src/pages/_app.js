import "../styles/WorkStyles.css";
import "../styles/ProjectStyles.css";
import "../styles/ThemeToggleStyles.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Theme from "../styles/theme";

export default function App({ Component, pageProps }) {
  const [themeType, setThemeType] = useState("dark");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Theme themeType={themeType} setThemeType={setThemeType}>
      <Component {...pageProps} />
    </Theme>
  );
}
