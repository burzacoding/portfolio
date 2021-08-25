import Nav from "./Components/Organisms/Nav";
import { ThemeProvider } from "styled-components";
import { theme } from "./Styles";
import { EllipseWrapper } from "./styles/Ellipse";
import Ellipse from "./Components/Molecules/Ellipse";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <EllipseWrapper size={240}>
        <Ellipse />
      </EllipseWrapper>
      <Nav />
    </ThemeProvider>
  );
}

export default App;
