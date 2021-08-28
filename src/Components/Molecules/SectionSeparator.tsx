import { HorizontalLine, SectionSeparatorContainer, Title } from "../../styles/molecules/SectionSeparator";

export interface SectionSeparatorProps {
  text: string;
  position: "left" | "right";
}
 
const SectionSeparator: React.FC<SectionSeparatorProps> = ({text, position}) => {
  return (
    <SectionSeparatorContainer position={position}>
      <HorizontalLine/>
      <Title>{text}</Title>
      <HorizontalLine/>
    </SectionSeparatorContainer>
  );
}
 
export default SectionSeparator;
