import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { GoogleLogin } from "@react-oauth/google";

import DarkModeToggle from "./DarkModeToggle";
import { trackEvent } from "../../utils/analytics"; // Import the tracking function

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  ThemeDiv,
  HeaderItem,
  LinksDiv,
  P,
} from "./HeaderStyles";
import { githubURL, linkedinURL } from "../../constants/constants";

const Header = () => {
  const handleSocialClick = (platform) => {
    trackEvent("social_click", "Social Links", platform);
  };

  const clientId = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID;
  const authUrl = `https://accounts.google.com/o/oauth2/auth?scope=https://www.googleapis.com/auth/drive&response_type=code&access_type=offline&redirect_uri=http://localhost:3000&client_id=${clientId}`;

  return (
    <div>
      <Container>
        <div
          style={{
            maxWidth: "1040px",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Div1>
            <Link href="#">
              <a style={{ display: "flex", alignItems: "center" }}>
                <ThemeDiv>
                  <DiCssdeck size="5rem" />
                </ThemeDiv>
                <P>Alan Yeung</P>
              </a>
            </Link>
          </Div1>
          <LinksDiv>
            <Div2>
              {/* Track clicks on navigation links */}
              <HeaderItem>
                <Link href="#work">
                  <NavLink
                    onClick={() => trackEvent("navigate", "Nav Links", "Work")}
                  >
                    Work
                  </NavLink>
                </Link>
              </HeaderItem>
              <HeaderItem>
                <Link href="#projects">
                  <NavLink
                    onClick={() =>
                      trackEvent("navigate", "Nav Links", "Projects")
                    }
                  >
                    Projects
                  </NavLink>
                </Link>
              </HeaderItem>
              <HeaderItem>
                <Link href="#tech">
                  <NavLink
                    onClick={() =>
                      trackEvent("navigate", "Nav Links", "Technologies")
                    }
                  >
                    Technologies
                  </NavLink>
                </Link>
              </HeaderItem>
              <HeaderItem>
                <Link href="#about">
                  <NavLink
                    onClick={() => trackEvent("navigate", "Nav Links", "About")}
                  >
                    About
                  </NavLink>
                </Link>
              </HeaderItem>
              <HeaderItem style={{ position: "relative", top: "-10px" }}>
                {DarkModeToggle()}{" "}
              </HeaderItem>
            </Div2>
            <Div3>
              {/* Track clicks on social icons */}
              <SocialIcons
                target="_blank"
                href={githubURL}
                onClick={() => handleSocialClick("GitHub")}
              >
                <AiFillGithub size="3rem" />
              </SocialIcons>
              <SocialIcons
                target="_blank"
                href={linkedinURL}
                onClick={() => handleSocialClick("LinkedIn")}
              >
                <AiFillLinkedin size="3rem" />
              </SocialIcons>
            </Div3>
            <Div3>
              {/* 
                using access token
                tutorial: https://medium.com/automationmaster/getting-google-oauth-access-token-using-google-apis-18b2ba11a11a
                <a href={authUrl}>Login with Google</a>
              */}
              <GoogleLogin
                scope="profile email https://www.googleapis.com/auth/calendar"
                onSuccess={(credentialResponse) => {
                  //console.log(credentialResponse);
                  //console.log(credentialResponse);
                  /* example
                  {
                    clientId: "xxxxxx.apps.googleusercontent.com",
                    credential: "eyJhbGciOiJSUzI1Nxxxxx", // id token
                    select_by: "btn"
                  }
                  */
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </Div3>
          </LinksDiv>
        </div>
      </Container>
    </div>
  );
};

export default Header;
