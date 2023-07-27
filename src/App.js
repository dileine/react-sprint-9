import { GlobalStyles } from "./styles/globalStyles";
import { THEME } from "../src/app/constants/theme";
import { ThemeProvider } from "styled-components";
import Router from "../src/app/routes/Router";
import Header from "../src/components/header/Header";
import NavBar from "../src/components/navBar/NavBar";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyles />
      <header>
        <Header />
        <NavBar />
      </header>
      <main>
        <Router />
      </main>
    </ThemeProvider>
  );
}

export default App;
