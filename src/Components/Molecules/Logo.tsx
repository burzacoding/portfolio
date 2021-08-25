import styled from "styled-components";
import { BaseLink } from "../../styles/Index";

const LogoSpan = styled.span`
  color: ${(p) => p.theme.fontTwo};
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
`;

const Logo = () => {
  return (
    <BaseLink to="/">
      <LogoSpan>./Burzacoding</LogoSpan>;
    </BaseLink>
  );
};

export default Logo;
