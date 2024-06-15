import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { DiCssdeck } from "react-icons/di";
import DarkModeToggle from "./DarkModeToggle";

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
              <a
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ThemeDiv>
                  <DiCssdeck size="5rem" />
                </ThemeDiv>
                <P>Alan Yeung</P>
              </a>
            </Link>
          </Div1>
          <LinksDiv>
            <Div2>
              <HeaderItem>
                <Link href="#work">
                  <NavLink>Work</NavLink>
                </Link>
              </HeaderItem>
              <HeaderItem>
                <Link href="#projects">
                  <NavLink>Projects</NavLink>
                </Link>
              </HeaderItem>
              <HeaderItem>
                <Link href="#tech">
                  <NavLink>Technologies</NavLink>
                </Link>
              </HeaderItem>
              <HeaderItem>
                <Link href="#about">
                  <NavLink>About</NavLink>
                </Link>
              </HeaderItem>
              <HeaderItem style={{ position: "relative", top: "-10px" }}>
                {DarkModeToggle()}{" "}
              </HeaderItem>
            </Div2>
            <Div3>
              <SocialIcons target="_blank" href={githubURL}>
                <AiFillGithub size="3rem" />
              </SocialIcons>
              <SocialIcons target="_blank" href={linkedinURL}>
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
