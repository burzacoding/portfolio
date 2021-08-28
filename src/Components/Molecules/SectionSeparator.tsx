import { HorizontalLine, SectionSeparatorContainer, Title } from "../../styles/molecules/SectionSeparator";

export interface SectionSeparatorProps {
  text: string;
  id: string;
  position: "left" | "right";
}
 
const SectionSeparator: React.FC<SectionSeparatorProps> = ({text, position, id}) => {
  return (
    <SectionSeparatorContainer position={position} id={id}>
      <HorizontalLine/>
      <Title>{text}</Title>
      <HorizontalLine/>
    </SectionSeparatorContainer>
  );
}
 
export default SectionSeparator;
