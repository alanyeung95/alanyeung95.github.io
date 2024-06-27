import ReactGA from "react-ga";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AOS from "aos";

import "../styles/WorkStyles.css";
import "../styles/ProjectStyles.css";
import "../styles/ThemeToggleStyles.css";
import "aos/dist/aos.css";
import Theme from "../styles/theme";

export default function App({ Component, pageProps }) {
  const [themeType, setThemeType] = useState("dark");
  const router = useRouter();

  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);

    const handleRouteChange = (url) => {
      ReactGA.set({ page: url });
      ReactGA.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    AOS.init();

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Theme themeType={themeType} setThemeType={setThemeType}>
      <Component {...pageProps} />
    </Theme>
  );
}
