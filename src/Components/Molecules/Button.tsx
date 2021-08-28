import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface buttonProps {
  text: string;
  path: string;
  fontSize?: number;
  isExternal?: boolean;
}

interface ButtonProps {
  fontSize: number;
}

const ButtonStyled = styled.a<ButtonProps>`
  width: 100%;
  height: 100%;
  font-size: 14px;
  background-color: transparent;
  border-radius: 8px;
  border: 2px solid ${(p) => p.theme.lightblue};
  transform-origin: 50% 50%;
  transition: transform 0.3s, background-color 0.3s;
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
  @media screen and (min-width: 410px) {
    font-size: 18px;
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 22px;
  }
`;

const Button: React.FC<buttonProps> = ({
  text,
  path,
  fontSize = 24,
  isExternal = true,
}) => {
  if (!isExternal) {
    return (
      <ButtonStyled fontSize={fontSize} href={path}>
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
