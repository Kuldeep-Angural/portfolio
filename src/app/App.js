import {
  createTheme,
  ThemeProvider
} from "@mui/material";
import { useState } from "react";
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
    <ThemeProvider theme={theme}>
      <Wrapper />
    </ThemeProvider>
  );
}

export default App;
