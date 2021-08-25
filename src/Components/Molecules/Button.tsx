import React from "react";
import styled from "styled-components";
import { BaseLink } from "../../styles/Index";

interface buttonProps {
  text: string;
  path: string;
  width?: number;
  height?: number;
  fontSize?: number;
}

interface ButtonProps {
  width: number;
  height: number;
  fontSize: number;
}


const ButtonStyled = styled.button<ButtonProps>`
  width: ${(p) => p.width + "px"};
  height: ${(p) => p.height + "px"};
  background-color: transparent;
  border-radius: 8px;
  border: 2px solid ${p => p.theme.lightblue};
  transform-origin: 50% 50%;
  transition: transform 0.3s, background-color 0.3s;
  font-size: ${(p) => p.fontSize + "px"};
  cursor: pointer;
  &:hover {
    transform: scale(1.025);
    background-color: #8c98c024;
  }
`;

const Link = styled(BaseLink)`
  color: ${p => p.theme.lightblue};
  font-weight: 500;
  &:visited {
    color: ${p => p.theme.lightblue};
  }
`;

const Button: React.FC<buttonProps> = ({
  text,
  path,
  width = 186,
  height = 50,
  fontSize = 24
}) => {
  return (
    <ButtonStyled width={width} height={height} fontSize={fontSize}>
      <Link to={path}>{text}</Link>
    </ButtonStyled>
  );
};

export default Button;
