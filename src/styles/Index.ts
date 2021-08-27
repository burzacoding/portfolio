import { Link } from "react-router-dom";
import styled from "styled-components";

export const BaseLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:visited {
    color: initial;
  }
`;

interface SvgWrapperInterface {
  size?: number;
  color: string;
}
interface SeparatorInterface {
  height: number;
  width: number;
}

export const SvgWrapper = styled.div<SvgWrapperInterface>`
  height: ${(p) => (p.size ? p.size + "px" : "100%")};
  width: ${(p) => (p.size ? p.size + "px" : "100%")};
  svg {
    fill: ${(p) => p.color};
    transition: fill 0.3s;
  }
  svg:hover {
    fill: ${(p) => p.theme.accent};
  }
`;
export const ExternalLink = styled.a`
  display: block;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-4px);
  }
`;

export const ContentWrapper = styled.main`
  padding: 16px;
  display: grid;
  @media screen and (min-width: 410px) {
    padding: 0 32px;
  }
  @media screen and (min-width: 768px) {
    padding: 0 128px;
  }
  @media screen and (min-width: 1024px) {
    padding: 0 10%;
  }
  @media screen and (min-width: 1366px) {
    padding: 0 20%;
  }
`;

export const Separator = styled.div<SeparatorInterface>`
  height: ${(p) => p.height + "px"};
  width: ${(p) => p.width + "px"};
`;
