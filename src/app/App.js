import { CircularProgress, createTheme, CssBaseline, Paper, Stack, ThemeProvider, Typography, } from "@mui/material";
import { Wrapper } from "../component/wrapper/Wrapper";
import { useEffect, useState } from "react";
import { addDelay, isDarkMode } from "../util/util";

function App() {

  const [darkMode, setDarkMode] = useState(isDarkMode());
  const [loading, setLoading] = useState(true);

  const theme = createTheme({
    palette: {
      primary: { main: '#9E9999' },
      secondary: { main: '#000000' },
      mode: darkMode ? 'dark' : 'light',
    },
  });

 


  return (
   
      <ThemeProvider theme={theme}>
        <Wrapper/>
      </ThemeProvider>
    )
}

export default App;
