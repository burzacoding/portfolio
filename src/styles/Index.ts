import { Link } from "react-router-dom";
import styled from "styled-components";

export const BaseLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:visited {
    color: initial;
  }
`;
