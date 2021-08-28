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
        Soy un desarrollador web con experiencia desarrollando desde paginas
        ecommerce hasta sistemas robustos y seguros a medida para todo tipo de
        clientes.
      </Subtitle>
      <ButtonsWrapper>
        <Button
          text="Ver trabajos"
          path="#jobs"
          fontSize={20}
          isExternal={false}
        />
        <Button text="Curriculum" path="/curriculum.pdf" fontSize={20} />
      </ButtonsWrapper>
    </SectionWrapper>
  );
};

export default Home;
