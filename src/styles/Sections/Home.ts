import styled from "styled-components";

export const SectionWrapper = styled.section`
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
  @media screen and (min-width: 410px) {
    max-width: 610px;
  }
  @media screen and (min-width: 768px) {
    max-width: 1428px;
  }
  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }
`;

export const AccentTitle = styled.p`
  color: ${(p) => p.theme.accent};
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  @media screen and (min-width: 410px) {
    font-size: 28px;
    line-height: 40px;
  }
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 48px;
  }
  @media screen and (min-width: 1366px) {
    font-size: 52px;
    line-height: 60px;
  } ;
`;

export const NameTitle = styled.p`
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
  color: ${(p) => p.theme.fontTwo};
  @media screen and (min-width: 410px) {
    font-size: 54px;
    line-height: 58px;
  }
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
  margin-top: 16px;
  margin-bottom: 16px;
  @media screen and (min-width: 410px) {
    margin-bottom: 0;
    font-size: 18px;
    line-height: 22px;
    margin-top: 24px;
  }
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 36px;
    margin-top: 32px;
  } ;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 42px 42px;
  gap: 8px;
  align-items: center;
  @media screen and (min-width: 410px) {
    grid-template-rows: 54px;
    grid-template-columns: 1fr 1fr;
    display: grid;
    margin-top: 24px;
  }
  @media screen and (min-width: 768px) {
    max-width: 532px;
    grid-template-rows: 54px;
    gap: 32px;
    margin-top: 36px;
  } ;
`;
