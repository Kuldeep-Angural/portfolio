import {
  createTheme,
  ThemeProvider
} from "@mui/material";
import { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Wrapper } from "../component/wrapper/Wrapper";
import { isDarkMode } from "../util/util";

function App() {
  const [darkMode, setDarkMode] = useState(isDarkMode());
  const theme = createTheme({
    palette: {
      primary: { main: "#9E9999" },
      secondary: { main: "#000000" },
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <Wrapper />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
