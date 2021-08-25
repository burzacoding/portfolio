import { useActiveBackground } from "../../hooks/Nav";
import { Nav, NavLinks, NavLink } from "../../styles/organisms/Nav";
import Button from "../Molecules/Button";
import Logo from "../Molecules/Logo";

export interface NavProps {}

const NavComponent: React.FC<NavProps> = () => {

  const {activeBackground, isShown} = useActiveBackground();

  return (
    <Nav activeBackground={activeBackground} isShown={isShown}>
      <Logo />
      <NavLinks>
        <NavLink to="#">Mis trabajos</NavLink>
        <NavLink to="#">Herramientas</NavLink>
        <NavLink to="#">Sobre mi</NavLink>
      </NavLinks>
      <Button path="#curriculum" text="Curriculum" />
    </Nav>
  );
};

export default NavComponent;
