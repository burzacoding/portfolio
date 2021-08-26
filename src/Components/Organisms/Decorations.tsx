import Ellipse from "../Molecules/Ellipse";
import { EllipseWrapper } from "../../styles/Ellipse";

const Decorations = () => {
  return (
    <>
      <EllipseWrapper
        size={396}
        extraCss="position: absolute; top: -128px; right: -128px;z-index: -2;"
      >
        <Ellipse />
      </EllipseWrapper>
      <EllipseWrapper
        size={606}
        extraCss="position: absolute; left: -128px; top: 660px;z-index: -2;"
      >
        <Ellipse />
      </EllipseWrapper>
    </>
  );
};
export default Decorations;
