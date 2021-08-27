import styled from "styled-components";
import { AccentTitle } from "../Sections/Home";

interface SectionSeparatorContainerInterface {
  position: "left" | "right";
}

export const SectionSeparatorContainer = styled.div<SectionSeparatorContainerInterface>`
  display: grid;
  grid-template-columns: ${(p) =>
    p.position === "left" ? "1fr auto 3fr" : "3fr auto 1fr"};
  align-items: center;
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background-color: ${(p) => p.theme.fontThree};
  opacity: 0.35;
`;

export const Title = styled(AccentTitle)`
  margin: 0 32px;
`;
