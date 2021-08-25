import styled from "styled-components"

interface EllipseWrapperInterface {
  size: number;
  extraCss?: string;
}

export const EllipseWrapper = styled.div<EllipseWrapperInterface>`
  width: ${p => p.size}px;
  height: ${p => p.size}px;
`
