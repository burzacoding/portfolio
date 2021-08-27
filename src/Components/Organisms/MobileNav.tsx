import React from "react";
import { useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { useActiveBackground } from "../../hooks/Nav";
import { SvgWrapper } from "../../styles/Index";
import { MobileNav } from "../../styles/organisms/Nav";
import Logo from "../Molecules/Logo";
import Hamburguer from "../SVG/Hamburguer";
import MobileDrawer from "./MobileDrawer";
import { isDrawerShownOption, isShownInterface } from "./Nav";

const SVGHandler = styled.div<isShownInterface>`
  position: relative;
  z-index: 3;
  user-select: none;
  width: 40px;
  height: 40px;
  svg > g > #Top {
    transition: transform 0.2s;
    transform: ${(p) => (p.drawerShown ? "translateX(-12px)" : "none")};
  }
  @media screen and (min-width: 410px) {
    width: 48px;
    height: 48px;
  } ;
`;

const MobileNavComponent: React.FC<isDrawerShownOption> = ({
  setDrawerShown,
  drawerShown,
}) => {
  const handleShown = () => {
    setDrawerShown((prev) => !prev);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setDrawerShown(false);
    });
  }, [setDrawerShown]);

  const theme = useTheme();

  const { activeBackground, isShown } = useActiveBackground();

  return (
    <MobileNav activeBackground={activeBackground} isShown={isShown}>
      <Logo />
      <SVGHandler drawerShown={drawerShown}>
        <SvgWrapper color={theme.accent} onClick={handleShown}>
          <Hamburguer />
        </SvgWrapper>
      </SVGHandler>

      <MobileDrawer drawerShown={drawerShown} setDrawerShown={setDrawerShown} />
    </MobileNav>
  );
};

export default MobileNavComponent;
