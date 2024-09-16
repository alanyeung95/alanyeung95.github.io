import { GoogleOAuthProvider } from "@react-oauth/google";

import BgAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Work from "../components/Work/Work";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID}
    >
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Work />
        <Projects />
        <Technologies />
        <Timeline />
      </Layout>
    </GoogleOAuthProvider>
  );
};

export default Home;
