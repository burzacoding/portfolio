import {
  AccentTitle,
  ButtonsWrapper,
  NameTitle,
  SectionWrapper,
  Subtitle,
} from "../../styles/Sections/Home";
import Button from "../Molecules/Button";

const Home = () => {
  return (
    <SectionWrapper>
      <AccentTitle>Hola! soy</AccentTitle>
      <NameTitle>César Pintos</NameTitle>
      <AccentTitle>desarrollo software a medida.</AccentTitle>
      <Subtitle>
        Soy un desarrollador web con experiencia desarrollando sistemas robustos
        y seguros para todo tipos de clientes, desde pequeños emprendedores a
        empresas multinacionales.
      </Subtitle>
      <ButtonsWrapper>
        <Button text="Ver trabajos" path="#jobs" fontSize={20} />
        <Button text="Curriculum" path="/curriculum.pdf" isLink={false} fontSize={20} />
      </ButtonsWrapper>
    </SectionWrapper>
  );
};

export default Home;
