import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
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
          </LinksDiv>
        </div>
      </Container>
    </div>
  );
};

export default Header;
