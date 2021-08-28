import { AboutContainer, AboutContent, Body, Subtitle } from "../../styles/Sections/AboutMe";
import SectionSeparator from "../Molecules/SectionSeparator";

const AboutMe = () => {
  return (
    <AboutContainer id="about">
      <SectionSeparator text="Sobre mí" position="right" />
      <AboutContent>
        <Body>
          Hola! Me llamo César Pintos y soy un Full Stack Web Developer. Me fascina todo lo que tenga que ver con programación, y me encanta desarrollar sistemas robustos o páginas hermosas que demuestren mi habilidad, que las cosas me salgan bien es mi meta en todos mis trabajos. Cuando no estoy programando, estoy escuchando música, leyendo documentación, tomando café o simplemente disfrutando el presente. 
        </Body>
        <Subtitle>Tecnologías</Subtitle>
        <Body>
          Trabajo con: React, Typescript, JavaScript, Git, NodeJS y Express.
        </Body>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutMe;
