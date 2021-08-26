import React from "react";
import { ButtonWrapper, NavLinkMobile, NavLinksMobile } from "../../styles/organisms/Nav";
import Button from "../Molecules/Button";
import { isDrawerShownOption, isShownInterface } from "./Nav";
import styled from "styled-components";
// import { useActiveBackground } from "../../hooks/Nav";

const Drawer = styled.div<isShownInterface>`
  padding-top: 50%;
  height: 120%;
  width: 70%;
  background-color: ${(p) => p.theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1;
  right: ${p => p.drawerShown ? '-5px' : '-75%'};
  transition: right 0.25s;
  pointer-events: auto;
  &::after {
    position: absolute;
    top: 0;
    content:  "";
    z-index: -1;
    height: 100%;
    width: 100%;
    box-shadow: 0 0 16px #0000007f;
  };
  @media screen and (min-width: 769px) {
   display: none;
  };
`;

const MobileDrawer: React.FC<isDrawerShownOption> = ({ drawerShown }) => {

  // const { prevPosition } = useActiveBackground();

  return (
    <Drawer drawerShown={drawerShown}>
      <NavLinksMobile>
        <NavLinkMobile to="#jobs">Mis trabajos</NavLinkMobile>
        <NavLinkMobile to="#tools">Herramientas</NavLinkMobile>
        <NavLinkMobile to="#about">Sobre mi</NavLinkMobile>
      </NavLinksMobile>
      <ButtonWrapper>
        <Button
          path="/curriculum.pdf"
          text="Curriculum"
          height={44}
          width={160}
          fontSize={20}
          isLink={false}
        />
      </ButtonWrapper>
    </Drawer>
  );
};

export default MobileDrawer;
