import React from "react";
import { NavLink } from "react-router-dom";
import { ButtonWrapper, NavLinksMobile } from "../../styles/organisms/Nav";
import Button from "../Molecules/Button";
import { isDrawerShownOption, isShownInterface } from "./Nav";
import styled from "styled-components";
import { useActiveBackground } from "../../hooks/Nav";

const Drawer = styled.div<isShownInterface>`
  padding-top: 80px;
  height: 120%;
  width: 70%;
  /* background-color: ${(p) => p.theme.background}; */
  background-color: aquamarine;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  right: ${p => p.drawerShown ? '0' : '-70%'};
  transition: right 0.25s;
  z-index: -1;
`;

const MobileDrawer: React.FC<isDrawerShownOption> = ({ drawerShown }) => {

  const { prevPosition } = useActiveBackground();

  return (
    <Drawer drawerShown={drawerShown}>
      <NavLinksMobile>
        <NavLink to="#jobs">Mis trabajos</NavLink>
        <NavLink to="#tools">Herramientas</NavLink>
        <NavLink to="#about">Sobre mi</NavLink>
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
