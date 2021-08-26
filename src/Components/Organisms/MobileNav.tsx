
import React from "react";
import styled, { useTheme } from "styled-components";
import { useActiveBackground } from "../../hooks/Nav";
import { SvgWrapper } from "../../styles/Index";
import {
  MobileNav,
} from "../../styles/organisms/Nav";
import Logo from "../Molecules/Logo";
import Hamburguer from "../SVG/Hamburguer";
import { isDrawerShownOption, isShownInterface } from "./Nav";


const SVGHandler = styled.div<isShownInterface>`
  svg > g > #Top {
    transition: transform 0.2s;
    transform: ${(p) => (p.drawerShown ? "translateX(-12px)" : "none")};
  }
`;

const MobileNavComponent: React.FC<isDrawerShownOption> = ({setDrawerShown, drawerShown}) => {
  
  const handleShown = () => {
    setDrawerShown((prev) => !prev);
  };

  const { activeBackground, isShown } = useActiveBackground()

  const theme = useTheme();

  return (
    <MobileNav activeBackground={activeBackground} isShown={isShown} >
      <Logo />
      <SVGHandler drawerShown={drawerShown}>
        <SvgWrapper size={60} color={theme.accent} onClick={handleShown}>
          <Hamburguer />
        </SvgWrapper>
      </SVGHandler>
    </MobileNav>
  );
};

export default MobileNavComponent;
