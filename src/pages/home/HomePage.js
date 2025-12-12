import { Box, Divider } from "@mui/material";
import Contact from "../about/About";
import { Journey } from "../experience/Journey";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import BasicInfo from "./BasicInfo";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Kuldeep Kumar - Full Stack Developer Portfolio | Projects & Experience</title>
        <meta name="description" content="Kuldeep Kumar's portfolio showcasing full stack development projects, experience with MERN stack, React, Node.js, and modern web technologies." />
        <meta name="keywords" content="Kuldeep Kumar, developer portfolio, MERN stack, React developer, Node.js, JavaScript, web development" />
        <canonical href="https://kuldeep-portfolio.com" />
      </Helmet>
      <Box sx={{ width: "100%" }}>
        {/* Home Section */}
        <section id="home" aria-label="About">
          <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "100%" }}>
              <BasicInfo />
            </Box>
          </Box>
        </section>

        <Divider sx={{ my: 4 }} />

        {/* Journey Section */}
        <section id="Journey" aria-label="Experience and Journey">
          <Box sx={{ minHeight: "100vh", py: 4 }}>
            <Box sx={{ mb: 5 }}>
              <Journey />
            </Box>
          </Box>
        </section>

        <Divider sx={{ my: 4 }} />

        {/* Projects Section */}
        <section id="projects" aria-label="Projects">
          <Box sx={{ minHeight: "100vh", py: 4 }}>
            <Box sx={{ mb: 5 }}>
              <Projects />
            </Box>
          </Box>
        </section>

        <Divider sx={{ my: 4 }} />

        {/* Skills Section */}
        <section id="skills" aria-label="Technical Skills">
          <Box sx={{ minHeight: "100vh", py: 4 }}>
            <Box sx={{ mb: 5 }}>
              <Skills />
            </Box>
          </Box>
        </section>

        <Divider sx={{ my: 4 }} />

        {/* Contact Section */}
        <section id="contact" aria-label="Contact Information">
          <Box sx={{ minHeight: "100vh", py: 4 }}>
            <Box sx={{ mb: 5 }}>
              <Contact />
            </Box>
          </Box>
        </section>
      </Box>
    </>
  );
};

export default HomePage;
