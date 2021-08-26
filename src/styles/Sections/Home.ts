import styled from "styled-components";

export const SectionWrapper = styled.div`
  margin-top: 218px;
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  padding: 0 32px;
  overflow-x: hidden;
  @media screen and (min-width: 768px) {
  padding: 0 124px;
  };
`;

export const AccentTitle = styled.p`
  color: ${(p) => p.theme.accent};
  font-weight: 500;
  font-size: 20px;
  line-height: 36px;
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
  font-size: 12px;
  line-height: 20px;
  margin-top: 12px;
  margin-bottom: 16px;
  @media screen and (min-width: 411px) {
    margin-bottom: 0;
    font-size: 20px;
    line-height: 24px;
    margin-top: 8px;
  } ;
  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 36px;
    margin-top: 32px;
  } ;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 411px) {
    margin-top: 16px;
    flex-direction: row;
    justify-content: space-between;
  } ;
`;
