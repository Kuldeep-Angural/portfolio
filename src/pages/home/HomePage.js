import { Box, Divider } from "@mui/material";
import Contact from "../about/About";
import { Journey } from "../experience/Journey";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import BasicInfo from "./BasicInfo";

const HomePage = () => {
  return (
    <Box sx={{ width: "100%" }}>
      {/* Home Section */}
      <Box
        id="home"
        sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
      >
        <Box sx={{ width: "100%" }}>
            <BasicInfo />
          </Box>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Journey Section */}
      <Box id="Journey" sx={{ minHeight: "100vh", py: 4 }}>
        <Box sx={{ mb: 5 }}>
          <Journey />
        </Box>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Projects Section */}
      <Box id="projects" sx={{ minHeight: "100vh", py: 4 }}>
        <Box sx={{ mb: 5 }}>
          <Projects />
        </Box>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Skills Section */}
      <Box id="skills" sx={{ minHeight: "100vh", py: 4 }}>
        <Box sx={{ mb: 5 }}>
          <Skills />
        </Box>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Contact Section */}
      <Box id="contact" sx={{ minHeight: "100vh", py: 4 }}>
        <Box sx={{ mb: 5 }}>
          <Contact />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
