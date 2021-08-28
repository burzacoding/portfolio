import { useActiveBackground } from "../../hooks/Nav";
import { NavLinks, NavLink, ButtonWrapper, DesktopNav } from "../../styles/organisms/Nav";
import Button from "../Molecules/Button";
import Logo from "../Molecules/Logo";

const DesktopNavComponent = () => {
  const { activeBackground, isShown } = useActiveBackground();

  return (
    <DesktopNav activeBackground={activeBackground} isShown={isShown}>
      <Logo />
      <NavLinks>
        <NavLink href="#jobs">Mis trabajos</NavLink>
        <NavLink href="#tools">Herramientas</NavLink>
        <NavLink href="#about">Sobre mi</NavLink>
      </NavLinks>
      <ButtonWrapper>
        <Button
          path="/curriculum.pdf"
          text="Curriculum"
          fontSize={20}
          isExternal={true}
        />
      </ButtonWrapper>
    </DesktopNav>
  );
};

export default DesktopNavComponent;
