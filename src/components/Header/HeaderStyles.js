import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 1rem;
  padding-top: 2rem;
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.colors.background1};
  z-index: 1;

  width: 100%;
  justify-content: space-between;

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 90px;
    display: none;
  }
`;

export const Span = styled.span`
  font-size: 2rem;
  width: 100%;
  color: ${(props) => props.theme.colors.primary1};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2.5rem;
  }
`;

export const LinksDiv = styled.div`
  padding-left: 20px;
  display: flex;

  @media (max-width: 870px) {
    display: block;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: block;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  margin-left: 2rem;
  justify-content: space-between;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
  }
`;
export const Div2 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: ${(props) => props.color ?? props.theme.colors.primary2};
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    font-size: 1.7rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

// Social Icons

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: ${(props) => props.theme.colors.primary1};
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const ThemeDiv = styled.div`
  color: ${(props) => props.theme.colors.primary1};

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const P = styled.p`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.primary1};

  @media (max-width: 721px) {
    font-size: 2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 3rem;
    white-space: nowrap;
  }

  @media ${(props) => props.theme.breakpoints.xs} {
    font-size: 2rem;
    white-space: break-spaces;
  }
`;

export const HeaderItem = styled.li`
  padding: 1rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.25rem;
  }

  @media (max-width: 761px) {
    padding: 0.5rem;
  }

  @media (max-width: 700px) {
    padding: 0.25rem;
  }
`;

export const BackgroundDiv = styled.div`
  background-color: ${(props) => props.theme.colors.background1};
  width: 100%;
`;
