import styled from "styled-components";

interface imageProps {
  url: string;
}

interface side {
  position: "left" | "right";
}

export const JobContainer = styled.article`
  position: relative;
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    display: grid;
    align-items: center;
    gap: 10px;
    margin-bottom: 72px;
    grid-template-columns: repeat(12, 1fr);
  } ;
`;

export const ImageContainer = styled.div<imageProps & side>`
  display: none;
  @media screen and (min-width: 768px) {
    height: auto;
    width: 100%;
    overflow: hidden;
    aspect-ratio: 16/9;
    min-height: 200px;
    max-width: 700px;
    grid-area: ${(p) =>
      p.position === "left" ? "1 / 7 / -1 / 13" : "1 / 1 / 1 / 7"};
    border-radius: 6px;
    background-image: url(${(p) => p.url});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: block;
  } ;
`;

export const DetailsContainer = styled.div<imageProps & side>`
  color: ${(p) => p.theme.fontOne};
  width: 100%;
  height: 100%;
  padding: 24px;
  background-image: linear-gradient(
      to bottom,
      rgb(2 2 38 / 80%),
      rgb(2 2 38 / 80%)
    ),
    url(${(p) => p.url});
  background-image: -webkit-linear-gradient(
      top,
      rgb(2 2 38 / 80%),
      rgb(2 2 38 / 80%)
    ),
    url(${(p) => p.url});
  background-size: cover, cover;
  background-position: center, center;
  @media screen and (min-width: 768px) {
    height: auto;
    position: relative;
    background: transparent;
    text-align: ${(p) => p.position};
    grid-area: ${(p) =>
      p.position === "left" ? "-1 / 1 / 1 / 9" : "1 / 5 / 1 / 13"};
    &::nth-child(n + 1) {
      grid-column: 5 / -1;
      text-align: right;
    }
  } ;
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 28px;
  line-height: 38px;
  margin-bottom: 16px;
  @media screen and (min-width: 410px) {
    font-size: 36px;
    line-height: 48px;
  }
  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 60px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 48px;
    line-height: 60px;
  }
  @media screen and (min-width: 1366px) {
    font-size: 48px;
    line-height: 60px;
  } ;
`;

export const Description = styled.p`
  font-size: 18px;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    border-radius: 6px;
    padding: 18px;
    background-color: #15182b;
  } ;
`;

export const TechsContainer = styled.div<side>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(p) =>
    p.position === "right" ? "flex-end" : "flex-start"};
`;

export const Techs = styled.p`
  line-height: 32px;
  margin-right: 16px;
  font-size: 14px;
  color: ${(p) => p.theme.accent};
`;

export const ButtonsWrapper = styled.div<side>`
  margin-top: 16px;
  display: flex;
  justify-content: ${(p) =>
    p.position === "right" ? "flex-end" : "flex-start"};
`;

export const ExternalLink = styled.a`
  width: 24px;
  height: 24px;
  margin-right: 16px;
  svg {
    transition: fill 0.3s;
    fill: ${(p) => p.theme.fontThree};
  }
  &:hover {
    svg {
      fill: ${(p) => p.theme.accent};
    }
  }
`;
