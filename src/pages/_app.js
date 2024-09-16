import { useEffect, useState } from "react";
import AOS from "aos";
import Script from "next/script";

import "../styles/WorkStyles.css";
import "../styles/ProjectStyles.css";
import "../styles/ThemeToggleStyles.css";
import "aos/dist/aos.css";
import Theme from "../styles/theme";

export default function App({ Component, pageProps }) {
  const [themeType, setThemeType] = useState("dark");

  useEffect(() => {
    AOS.init();

    // Check if window.gtag is defined after GA script loads
    const checkGATag = () => {
      if (typeof window.gtag !== "function") {
        console.error("Google Analytics not initialized");
      }
    };

    window.addEventListener("load", checkGATag);
    return () => window.removeEventListener("load", checkGATag);
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
        `,
        }}
      />
      <Theme themeType={themeType} setThemeType={setThemeType}>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
