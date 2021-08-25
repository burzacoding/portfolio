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
  size: number,
  color: string,
}
interface SeparatorInterface {
  height: number;
  width: number;
}

export const SvgWrapper = styled.div<SvgWrapperInterface>`
  height: ${p => p.size+ 'px'};
  width: ${p => p.size+ 'px'};
  svg {
    fill: ${p => p.color};
    transition: fill 0.3s;
  }
  svg:hover {
    fill: ${p => p.theme.accent};
  }
`
export const ExternalLink = styled.a`
  display: block;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-4px)
  }
`
export const Separator = styled.div<SeparatorInterface>`
  height: ${p => p.height + 'px'};
  width: ${p => p.width + 'px'};
`
