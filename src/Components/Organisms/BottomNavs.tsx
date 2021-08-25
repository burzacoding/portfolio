import { ExternalLink, Separator, SvgWrapper } from "../../styles/Index";
import {
  BottomNavColumn,
  BottomNavWrapper,
  EmailSpan,
  Line,
} from "../../styles/organisms/Nav";
import Github from "../SVG/Github";
import { useTheme } from "styled-components";
import LinkedIn from "../SVG/LinkedIn";
import Instagram from "../SVG/Instagram";

const BottomNavs = () => {
  const theme = useTheme();

  return (
    <BottomNavWrapper>
      <BottomNavColumn>
        <ExternalLink
          href="https://github.com/burzacoding"
          target="_blank"
          rel="noreferrer"
        >
          <SvgWrapper size={32} color={theme.fontThree}>
            <Github />
          </SvgWrapper>
        </ExternalLink>
        <Separator width={16} height={16} />
        <ExternalLink
          href="https://www.instagram.com/burzacoding"
          target="_blank"
          rel="noreferrer"
        >
          <SvgWrapper size={32} color={theme.fontThree}>
            <Instagram />
          </SvgWrapper>
        </ExternalLink>
        <Separator width={16} height={16} />
        <ExternalLink
          href="https://linkedin.com/in/cepintos"
          target="_blank"
          rel="noreferrer"
        >
          <SvgWrapper size={32} color={theme.fontThree}>
            <LinkedIn />
          </SvgWrapper>
        </ExternalLink>
        <Line lineHeight={124} />
      </BottomNavColumn>
      <BottomNavColumn>
        <EmailSpan href="mailto:burzacoding@gmail.com" target="_blank" rel="noreferrer">burzacoding@gmail.com</EmailSpan>
        <Line lineHeight={84} />
      </BottomNavColumn>
    </BottomNavWrapper>
  );
};

export default BottomNavs;
