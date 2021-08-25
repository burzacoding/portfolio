import Nav from "./Components/Organisms/Nav";
import { ThemeProvider } from "styled-components";
import { theme } from "./Styles";
import BottomNavs from "./Components/Organisms/BottomNavs";
import Decorations from "./Components/Organisms/Decorations";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Decorations />
      <Nav />
      <BottomNavs />
    </ThemeProvider>
  );
}

export default App;
