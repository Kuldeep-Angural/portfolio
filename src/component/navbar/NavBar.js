import DarkModeIcon from "@mui/icons-material/DarkMode";
import FeedIcon from "@mui/icons-material/Feed";
import GitHubIcon from "@mui/icons-material/GitHub";
import LightModeIcon from "@mui/icons-material/LightMode";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Button, Grid, Tooltip } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "../button/IconButton";

const NavBar = ({ chacked, onChange }) => {
  const [activeSection, setActiveSection] = React.useState("home");
  const naviGate = useNavigate();

  const scrollToSection = (sectionId, path) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (path) naviGate(path);
  };

  const CustomLink = ({ icon, tooltip, onClick, active }) => (
    <Tooltip title={tooltip || icon}>
      <Button
        style={{
          padding: "1px 4px",
          margin: "0 6px",
          fontWeight: active ? "bold" : "normal",
          transition: "0.3s ease",
        }}
        variant="text"
        size="small"
        sx={{ mb: 2, minWidth: "unset" }}
        onClick={onClick}
      >
        {icon}
      </Button>
    </Tooltip>
  );

  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: chacked ? "#1e1e1e" : "#ffffff", // NON-TRANSPARENT SOLID NAVBAR
          color: chacked ? "#ffffff" : "#141414ff",
          transition: "background-color 0.3s ease, color 0.3s ease",
          mb: 5,
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          padding: "1px 0",
          position: "sticky", // keeps navbar visible
          top: 0,
          zIndex: 1000,
        }}
      >
        <Grid item xs={12}>
          <Grid container justifyContent="center">
            <Grid display={"flex"} justifyContent={"end"}>
              <IconButton
                style={{ marginRight: "10px", marginTop: "10px" }}
                icon={
                  <FeedIcon
                    sx={{
                      color: chacked ? "white" : "black",
                      height: "40px",
                      width: "40px",
                    }}
                  />
                }
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1gztQ097DXVDSo_vzwjEVXgCB28ra65pU/view?usp=sharing"
                  )
                }
                tooltip="Resume"
              />

              <IconButton
                style={{ marginRight: "10px", marginTop: "10px" }}
                icon={
                  <LinkedInIcon
                    sx={{
                      color: chacked ? "white" : "black",
                      height: "40px",
                      width: "40px",
                    }}
                  />
                }
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/kuldeep-kumar-485a13252/"
                  )
                }
                tooltip="Linkedin"
              />

              <IconButton
                style={{ marginRight: "10px", marginTop: "10px" }}
                icon={
                  <GitHubIcon
                    sx={{
                      color: chacked ? "white" : "black",
                      height: "40px",
                      width: "40px",
                    }}
                  />
                }
                onClick={() =>
                  window.open("https://github.com/Kuldeep-Angural")
                }
                tooltip="Git-Hub"
              />

              <IconButton
                style={{ marginRight: "20px", marginTop: "10px" }}
                onClick={onChange}
                value={chacked}
                tooltip={chacked ? "Turn on The Light" : "Turn off The Light"}
                icon={
                  chacked ? (
                    <LightModeIcon
                      sx={{
                        color: chacked ? "white" : "black",
                        height: "40px",
                        width: "40px",
                      }}
                    />
                  ) : (
                    <DarkModeIcon
                      sx={{
                        color: chacked ? "white" : "black",
                        height: "40px",
                        width: "40px",
                      }}
                    />
                  )
                }
              />
            </Grid>
          </Grid>

          {/* SECTION NAVIGATION */}
          <Grid item md={12}>
            <Box display={"flex"} justifyContent={"center"} mt={0}>
              <CustomLink
                icon={"About Me."}
                active={activeSection === "home"}
                onClick={() => scrollToSection("home")}
              />

              <CustomLink
                icon={"Journey"}
                active={activeSection === "Journey"}
                onClick={() => scrollToSection("Journey")}
              />

              <CustomLink
                icon={"Projects"}
                active={activeSection === "projects"}
                onClick={() => scrollToSection("projects")}
              />

              <CustomLink
                icon={"Skills"}
                active={activeSection === "skills"}
                onClick={() => scrollToSection("skills")}
              />

              <CustomLink
                icon={"Contact"}
                active={activeSection === "contact"}
                onClick={() => scrollToSection("contact")}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default NavBar;
