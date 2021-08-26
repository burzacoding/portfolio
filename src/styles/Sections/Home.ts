import styled from "styled-components";

export const SectionWrapper = styled.div`
  margin-top: 256px;
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  padding: 0 10%;
`;

export const AccentTitle = styled.p`
  color: ${(p) => p.theme.accent};
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 60px;
  } ;
`;

export const NameTitle = styled.p`
  font-weight: 500;
  font-size: 42px;
  line-height: 42px;
  color: ${(p) => p.theme.fontTwo};
  @media screen and (min-width: 768px) {
    font-size: 82px;
    line-height: 102px;
  } ;
`;

export const Subtitle = styled.p`
  color: ${(p) => p.theme.fontOne};
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  margin-top: 18px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 36px;
    margin-top: 32px;
  } ;
`;
