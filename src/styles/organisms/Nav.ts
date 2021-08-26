import styled from "styled-components";
import { BaseLink } from "../Index";

interface NavAttributes {
  activeBackground?: string;
  isShown?: string;
}

interface Lineinterface {
  lineHeight: number;
}

interface positionInterface {
  position: "left" | "right";
}

export const Nav = styled.nav<NavAttributes>`
  width: 100%;
  height: 80px;
  background-color: ${(p) =>
    p.activeBackground === "true" ? p.theme.backgroundOpacity : "transparent"};
  display: flex;
  position: fixed;
  top: ${(p) => (p.isShown === "true" ? "0" : "-110px")};
  left: 0;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  color: ${(p) => p.theme.fontOne};
  transition: background-color 0.3s, top 0.3s ease-out;
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: ${(p) => (p.activeBackground === "true" ? "1" : "0")};
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.25);
    transition: opacity 0.3s ease-in-out;
  }
`;

export const DesktopNav = styled(Nav)`
  display: none;
  @media screen and (min-width: 769px) {
    display: fixed;
  } ;
`;

export const MobileNav = styled(Nav)`
  height: 70px;
  z-index: 1;
  @media screen and (min-width: 769px) {
    display: none;
  } ;
`;

export const EmailSpan = styled.a`
  display: block;
  transition: transform 0.2s, color 0.2s;
  text-decoration: none;
  transform: rotate(90deg) translateX(-108px);
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  color: ${(p) => p.theme.fontThree};
  &:hover {
    transform: translateY(-112px) rotate(90deg);
    color: ${(p) => p.theme.accent};
  }
`;

export const Line = styled.div<Lineinterface>`
  margin-top: 16px;
  width: 2px;
  height: ${(p) => p.lineHeight + "px"};
  background-color: ${(p) => p.theme.fontThree};
`;

export const BottomNavColumn = styled.div<positionInterface>`
  position: fixed;
  bottom: 0;
  left: ${(p) => (p.position === "left" ? "58px" : "unset")};
  right: ${(p) => (p.position === "right" ? "58px" : "unset")};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 32px;
  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
`;

export const NavLinksMobile = styled(NavLinks)`
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: unset;
`;

export const ButtonWrapper = styled.div``;

export const NavLink = styled(BaseLink)`
  color: ${(p) => p.theme.lightblue};
  height: 28px;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  margin-right: 32px;
  text-align: center;
  display: block;
  transition: transform 0.3s;
  @media screen and (min-width: 1281px) {
    font-size: 22px;
    margin-right: 32px;
  }
  &:visited {
    color: ${(p) => p.theme.lightblue};
  }
  &:hover {
    transform: scale(1.05);
    color: #dddddd;
  }
`;

export const NavLinkMobile = styled(NavLink)`
  text-align: center;
  margin-bottom: 32px;
  margin-right: 0;
  font-size: 24px;
  &:active {
    color: #ffffff;
  }
`;
