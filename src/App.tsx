import Nav from "./Components/Organisms/Nav";
import { ThemeProvider } from "styled-components";
import { theme } from "./Styles";
import BottomNavs from "./Components/Organisms/BottomNavs";
import Decorations from "./Components/Organisms/Decorations";
import Home from "./Components/Sections/Home";
import SectionSeparator from "./Components/Molecules/SectionSeparator";
import { ContentWrapper } from "./styles/Index";
import Works from "./Components/Sections/Works";
import AboutMe from "./Components/Sections/AboutMe";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Decorations />
      <Nav />
      <BottomNavs />
      <ContentWrapper>
        <Home />
        <Works />
        <AboutMe />
      </ContentWrapper>
    </ThemeProvider>
  );
}

export default App;
