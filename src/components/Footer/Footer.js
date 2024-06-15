import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

import { linkedinURL, githubURL } from "../../constants/constants";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle></LinkTitle>
          <LinkItem target="_blank" href="mailto:alanyeung.dev@gmail.com">
            alanyeung.dev@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>God helps those who help themselves</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons target="_blank" href={githubURL}>
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons target="_blank" href={linkedinURL}>
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
