import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'

interface buttonProps {
  text: string;
  path: string;
  fontSize?: number;
  isLink?: boolean;
}

interface ButtonProps {
  fontSize: number;
}


const ButtonStyled = styled.a<ButtonProps>`
  width: 160px;
  height: 44px;
  background-color: transparent;
  border-radius: 8px;
  border: 2px solid ${(p) => p.theme.lightblue};
  transform-origin: 50% 50%;
  transition: transform 0.3s, background-color 0.3s;
  font-size: ${(p) => p.fontSize + "px"};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(p) => p.theme.lightblue};
  font-weight: 500;
  text-decoration: none;
  &:visited {
    color: ${(p) => p.theme.lightblue};
  }
  &:hover { 
    background-color: #8c98c024;
  }
`;

const Button: React.FC<buttonProps> = ({
  text,
  path,
  fontSize = 24,
  isLink = true,
}) => {
  if (isLink) {
    return (
      <ButtonStyled
        fontSize={fontSize}
        to={path}
        as={Link}
      >
        {text}
      </ButtonStyled>
    );
  } else {
    return (
      <ButtonStyled
        fontSize={fontSize}
        href={path}
        target="_blank"
        rel="noreferrer"
      >
        {text}
      </ButtonStyled>
    );
  }
};

export default Button;
