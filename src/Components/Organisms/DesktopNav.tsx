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
        <NavLink to="#jobs">Mis trabajos</NavLink>
        <NavLink to="#tools">Herramientas</NavLink>
        <NavLink to="#about">Sobre mi</NavLink>
      </NavLinks>
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
    </DesktopNav>
  );
};

export default DesktopNavComponent;
