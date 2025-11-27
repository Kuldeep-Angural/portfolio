import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Button, CardMedia, Grid, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { projects } from "../../constants/projects";

export const ProjectsCard = (datprojetcs) => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextClick = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    setData(projects);
  }, []);

  return (
     <Box  mt={15}>
      <Typography variant="subtitle1" fontWeight={"700"} textAlign={"center"}>
        My Projects
      </Typography>
    <Grid container mt={10}>

      <Grid item md={12} sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="100%"
          src={data?.[currentIndex]?.image}
          sx={{
            width: "100%",
            backgroundPosition: "cover",
            border: "1px solid black",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "0px",
            height: "100%",
            width: "100%",
            backgroundColor: "black",
            opacity: "0.6",
          }}
        >
          <Typography
            color={"white"}
            fontWeight={600}
            position={"relative"}
            ml={2}
            mt={1}
          >
            {data?.[currentIndex]?.name}
          </Typography>

          <Typography
            color={"white"}
            fontWeight={600}
            position={"relative"}
            ml={2}
            mt={1}
          >
            {data?.[currentIndex]?.info}
          </Typography>

          <Typography
            color={"white"}
            fontWeight={600}
            position={"relative"}
            ml={2}
            mt={2}
          >
            Technologies used to Build{" "}
            {data?.[currentIndex]?.webLink && (
              <Link ml={3} href={data?.[currentIndex]?.webLink}>
                {" "}
                Open
              </Link>
            )}
          </Typography>
          <Box display={"flex"} justifyContent={"flex-start"}>
            {data?.[currentIndex]?.techStack?.map((item, index) => (
              <Typography
                key={index}
                color={"white"}
                fontWeight={600}
                position={"relative"}
                ml={2}
                mt={0}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          position="absolute"
          top="50%"
          left="0"
          right="0"
          sx={{ transform: "translateY(-50%)", zIndex: 1 }}
        >
          <Button
            onClick={previousClick}
            variant="text"
            sx={{
              color: "white",
              height: "120px",
              maxWidth: "20px",
              backgroundColor: "grey",
              opacity: "0.4",
              margin: "6px",
            }}
          >
            <KeyboardArrowLeftIcon />
          </Button>
          <Button
            onClick={nextClick}
            variant="text"
            sx={{
              color: "white",
              height: "120px",
              maxWidth: "20px",
              backgroundColor: "grey",
              opacity: "0.4",
              margin: "6px",
            }}
          >
            <KeyboardArrowRightIcon />
          </Button>
        </Box>
      </Grid>
    </Grid>
    </Box>
  );
};
