import {
    Box,
    createTheme,
    CssBaseline,
    Paper,
    ThemeProvider
} from "@mui/material";
<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import { useState } from "react";
>>>>>>> 44ef74ca2f6e8c6319cd2aeac12c6d8b3fa32073
import { Route, Routes } from "react-router-dom";
import Contact from "../../pages/about/About";
import Blogs from "../../pages/blogs/Blogs";
import { Journey } from "../../pages/experience/Journey";
import HomePage from "../../pages/home/HomePage";
import { PageNotFound } from "../../pages/notFound/PageNotFound";
import Projects from "../../pages/projects/Projects";
import Skills from "../../pages/skills/Skills";
import { isDarkMode } from "../../util/util";
import { getPersonSchema, getOrganizationSchema } from "../../util/seoUtils";
import NavBar from "../navbar/NavBar";

export const Wrapper = (props) => {
  const ROUTES = [
    { name: "/", value: (index) => <HomePage key={index} /> },
    { name: "/Journey", value: (index) => <Journey key={index} /> },
    { name: "/projects", value: (index) => <Projects key={index} /> },
    { name: "/skills", value: (index) => <Skills key={index} /> },
    { name: "/blogs", value: (index) => <Blogs key={index} /> },
    { name: "/contact", value: (index) => <Contact key={index} /> },
  ];

  const [darkMode, setDarkMode] = useState(isDarkMode());
  const [loading, setLoading] = useState(true);

  const theme = createTheme({
    palette: {
      primary: { main: "#9E9999" },
      secondary: { main: "#000000" },
      mode: darkMode ? "dark" : "light",
    },
  });

  // Add structured data to page
  useEffect(() => {
    // Add Person Schema
    const personScript = document.createElement("script");
    personScript.type = "application/ld+json";
    personScript.innerHTML = JSON.stringify(getPersonSchema());
    document.head.appendChild(personScript);

    // Add Organization Schema
    const orgScript = document.createElement("script");
    orgScript.type = "application/ld+json";
    orgScript.innerHTML = JSON.stringify(getOrganizationSchema());
    document.head.appendChild(orgScript);

    return () => {
      document.head.removeChild(personScript);
      document.head.removeChild(orgScript);
    };
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper></Paper>
        <Box sx={{ position: "sticky", top: 0, zIndex: 1000 }}>
          <NavBar chacked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </Box>
        <Box mt={4} role="main">
          <Routes>
            {ROUTES.map((route, index) => (
              <Route path={route.name} element={route.value(index)} />
            ))}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </>
  );
};
