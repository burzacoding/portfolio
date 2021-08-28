import {
  ButtonsWrapper,
  Description,
  DetailsContainer,
  ExternalLink,
  ImageContainer,
  JobContainer,
  TechsContainer,
  Techs,
  Title,
} from "../../styles/organisms/Job";
import ExternalPage from "../SVG/ExternalPage";
import Github from "../SVG/Github";

export interface JobsProps {
  obj: {
    imgSource: string;
    title: string;
    description: string;
    techs: string[];
    gitLink: string;
    liveSiteLink?: string;
    position: "left" | "right";
  };
}

const Jobs: React.FC<JobsProps> = ({ obj }) => {
  const {
    imgSource,
    title,
    description,
    techs,
    gitLink,
    liveSiteLink,
    position,
  } = obj;

  return (
    <JobContainer>
      <ImageContainer url={imgSource} position={position} href={gitLink} target="_blank" rel="noreferrer" />
      <DetailsContainer url={imgSource} position={position}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <TechsContainer position={position}>
          {techs.map((tech) => (
            <Techs>{tech}</Techs>
          ))}
        </TechsContainer>
        <ButtonsWrapper position={position}>
          <ExternalLink href={gitLink} target="_blank" rel="noreferrer">
            <Github />
          </ExternalLink>
          {liveSiteLink && (
            <ExternalLink href={liveSiteLink} target="_blank" rel="noreferrer">
              <ExternalPage />
            </ExternalLink>
          )}
        </ButtonsWrapper>
      </DetailsContainer>
    </JobContainer>
  );
};

export default Jobs;
