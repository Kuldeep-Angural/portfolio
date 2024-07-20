import React, { useEffect, useState } from "react";
import NavBar from "../navbar/NavBar";
import { addDelay, isDarkMode } from "../../util/util";
import { Box, CircularProgress, createTheme, CssBaseline, Paper, Stack, ThemeProvider } from "@mui/material";
import BasicInfo from "../../pages/home/BasicInfo";
import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "../../pages/notFound/PageNotFound";
import Qualification from "../../pages/qualification/Qualification";
import Projects from "../../pages/projects/Projects";
import Contact from "../../pages/about/About";
import { Journey } from "../../pages/experience/Journey";
import Skills from "../../pages/skills/Skills";
import Blogs from "../../pages/blogs/Blogs";

export const Wrapper = (props) => {

    const ROUTES = [
        { name: '/', value: (index) => (<BasicInfo key={index}   />) },
        { name: '/Journey', value: (index) => (<Journey key={index}   />) },
        { name: '/projects', value: (index) => <Projects key={index}   /> },
        { name: '/skills', value: (index) => <Skills key={index}   /> },
        { name: '/blogs', value: (index) => (<Blogs key={index}   />) },
        { name: '/contact', value: (index) => (<Contact key={index}   />) },
    ];

    const [darkMode, setDarkMode] = useState(isDarkMode());
    const [loading, setLoading] = useState(true);

    const theme = createTheme({
        palette: {
            primary: { main: '#9E9999' },
            secondary: { main: '#000000' },
            mode: darkMode ? 'dark' : 'light',
        },
    });

    useEffect(() => {
        let randomNumber = Math.random() + 3000;
        addDelay(randomNumber).then(() => {
            setLoading(false);
        });
    }, []);

    return (

        loading === true ? (
            <Stack spacing={2} sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', }} direction="column" >
                <CircularProgress color="inherit" thickness={10} size={100} />
            </Stack>
        ) : (

            <>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Paper>
                    </Paper>
                    <NavBar chacked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                    <Box mt={4}>
                        <Routes>
                            {ROUTES.map((route, index) => (
                                <Route path={route.name} element={route.value(index) }/>
                            ))}
                            <Route path="*" element={<PageNotFound />} />
                        </Routes>
                    </Box>
                </ThemeProvider>
            </>
        ))

};

