import styled from "styled-components";

export const SectionWrapper = styled.div`
  margin-top: 124px;
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  padding: 0 32px;
  overflow-x: hidden;
  @media screen and (min-width: 410px) {
  };
  @media screen and (min-width: 768px) {
  padding: 0 124px;
  max-width: 1428px;
  margin: 212px auto;
  };
`;

export const AccentTitle = styled.p`
  color: ${(p) => p.theme.accent};
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  @media screen and (min-width: 410px) {
  font-size: 24px;
  line-height: 40px;
  };
  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 48px;
  };
  @media screen and (min-width: 1366px) {
    font-size: 48px;
    line-height: 60px;
  };
`;

export const NameTitle = styled.p`
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
  color: ${(p) => p.theme.fontTwo};
  @media screen and (min-width: 410px) {
    font-size: 54px;
    line-height: 58px;
  } ;
  @media screen and (min-width: 768px) {
    font-size: 72px;
    line-height: 82px;
  } ;
`;

export const Subtitle = styled.p`
  color: ${(p) => p.theme.fontOne};
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  margin-top: 12px;
  margin-bottom: 16px;
  @media screen and (min-width: 410px) {
    margin-bottom: 0;
    font-size: 18px;
    line-height: 22px;
    margin-top: 8px;
  } ;
  @media screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 36px;
    margin-top: 24px;
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
