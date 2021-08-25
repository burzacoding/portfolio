import styled from "styled-components";
import { BaseLink } from "../Index";

interface NavAttributes {
  activeBackground?: string;
  isShown?: string;
}

export const Nav = styled.nav<NavAttributes>`
  width: 100%;
  height: 80px;
  transition: background-color 0.3s, top 0.3s ease-in;
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

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
`;

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
  };
  &:visited {
    color: ${(p) => p.theme.lightblue};
  };
  &:hover {
    transform: scale(1.05);
    color: #DDDDDD;
  };
`;
