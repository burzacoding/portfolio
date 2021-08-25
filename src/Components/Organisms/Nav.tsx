import { useActiveBackground } from "../../hooks/Nav";
import { Nav, NavLinks, NavLink, ButtonWrapper } from "../../styles/organisms/Nav";
import Button from "../Molecules/Button";
import Logo from "../Molecules/Logo";

const NavComponent = () => {
  const { activeBackground, isShown } = useActiveBackground();

  return (
    <Nav activeBackground={activeBackground} isShown={isShown}>
      <Logo />
      <NavLinks>
        <NavLink to="#jobs">Mis trabajos</NavLink>
        <NavLink to="#tools">Herramientas</NavLink>
        <NavLink to="#about">Sobre mi</NavLink>
      </NavLinks>
      <ButtonWrapper>
        <Button
          path="#curriculum"
          text="Curriculum"
          height={44}
          width={160}
          fontSize={20}
        />
      </ButtonWrapper>
    </Nav>
  );
};

export default NavComponent;
