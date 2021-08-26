import Nav from "./Components/Organisms/Nav";
import { ThemeProvider } from "styled-components";
import { theme } from "./Styles";
import BottomNavs from "./Components/Organisms/BottomNavs";
import Decorations from "./Components/Organisms/Decorations";
import Home from "./Components/Sections/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Decorations />
      <Nav />
      <BottomNavs />
      <Home />
    </ThemeProvider>
  );
}

export default App;
