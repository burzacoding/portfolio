import styled from "styled-components";
import { BaseLink } from "../../styles/Index";


const LogoSpan = styled.span`
color: ${(p) => p.theme.fontTwo};
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 40px;
display: block;
transition: transform 0.3s;
`
const LogoSpanDesktop = styled(LogoSpan)`
  @media screen and (max-width: 920px) {
   display: none;
  };
  &:hover {
    transform: scale(1.025);
  }
`;

const LogoSpanMobile = styled(LogoSpan)`
  @media screen and (min-width: 921px) {
   display: none;
  };
`

const Logo = () => {
  return (
    <BaseLink to="/">
      <LogoSpanDesktop>./Burzacoding</LogoSpanDesktop>
      <LogoSpanMobile>./B</LogoSpanMobile>
    </BaseLink>
  );
};

export default Logo;
