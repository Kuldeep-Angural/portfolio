import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import {
  Avatar,
  Box,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import TypographyWithIcon from "../../component/output/TypographyWithIcon";
import {
  bio,
  professionWords,
  socialMediaHandle,
} from "../../constants/informationText";
import image from "../../images/pic-1.png";

const BasicInfo = () => {
  // ---------- Vertical Up-Down Animation CSS ----------
  const styles = `
    @keyframes slide {
      0% { transform: translateY(0); }
      15% { transform: translateY(0); }

      20% { transform: translateY(-40px); }
      35% { transform: translateY(-40px); }

      40% { transform: translateY(-80px); }
      55% { transform: translateY(-80px); }

      60% { transform: translateY(-120px); }
      75% { transform: translateY(-120px); }

      80% { transform: translateY(-160px); }
      95% { transform: translateY(-160px); }

      100% { transform: translateY(0); }
    }
  `;

  const verticalTextStyles = {
    container: {
      height: "40px",
      overflow: "hidden",
      display: "inline-block",
    },
    animated: {
      display: "flex",
      flexDirection: "column" as "column",
      animation: "slide 6s infinite",
    },
  };

  const SocialMediaAvatar = ({ name, link, image }) => {
    return (
      <Link
        sx={{ mt: 1 }}
        key={name}
        title={name}
        href={link}
        color="inherit"
        underline="none"
        target="_blank"
        style={{ fontWeight: "700" }}
      >
        <Avatar alt={name} src={image} />
      </Link>
    );
  };

  return (
    <>
      {/* Inject slide animation styles */}
      <style>{styles}</style>

      <Grid container spacing={2} p={2}>
        {/* LEFT SIDE */}
        <Grid item md={5} sm={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box>
              <CardContent>
                <Grid container>
                  <Grid item md={12}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="200px"
                        width="200px"
                        src={image}
                        sx={{
                          width: "200px",
                          backgroundPosition: "cover",
                          borderRadius: "50%",
                          border: "1px solid black",
                        }}
                      />
                    </Box>

                    <TypographyWithIcon
                      mt={2}
                      fontSize={"20px"}
                      icon={<EmailIcon />}
                      fontWeight="600"
                      text={"kuldeep.navv@gmail.com"}
                    />

                    <TypographyWithIcon
                      mt={2}
                      fontSize={"20px"}
                      icon={<PhoneAndroidIcon />}
                      fontWeight="600"
                      text={"+91 98551-714XX"}
                      tooltip="For some reason, the mobile number is hidden."
                    />

                    <TypographyWithIcon
                      mt={2}
                      fontSize={"20px"}
                      icon={<CalendarMonthIcon />}
                      fontWeight="600"
                      text={"march-17-199X"}
                    />

                    <TypographyWithIcon
                      mt={2}
                      fontSize={"20px"}
                      icon={<LocationOnIcon />}
                      fontWeight="600"
                      text={"Pathankot , Punjab , In"}
                    />

                    <Grid
                      gap={2}
                      display="flex"
                      justifyContent="center"
                      alignContent="center"
                      alignItems="center"
                    >
                      {socialMediaHandle.map((item) => (
                        <SocialMediaAvatar
                          key={item.name}
                          name={item.name}
                          link={item.link}
                          image={item.image}
                        />
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Box>
          </Box>
        </Grid>

        {/* RIGHT SIDE */}
        <Grid item md={7} sm={12} xs={12}>
          <Box>
            <Typography variant="h4" textAlign="center" sx={{ mt: 5 }}>
              <Typography variant="h4" fontFamily={"cursive"} fontWeight={600}>
                Hi, my name is Kuldeep Kumar
              </Typography>
              <br />

              <span>I am a </span>

              {/* ---------- Vertical Up-Down Animated Text ---------- */}
              <span
                style={{
                  color: "#98B1D9",
                  fontFamily: "monospace",
                  fontWeight: 900,
                  letterSpacing: ".3rem",
                }}
              >
                <div style={verticalTextStyles.container}>
                  <div style={verticalTextStyles.animated}>
                    {professionWords.map((word, index) => (
                      <div key={index} style={{ height: "40px" }}>
                        {word}
                      </div>
                    ))}
                  </div>
                </div>
              </span>
              <br />
            </Typography>

            <Typography
              sx={{ margin: "20px" }}
              fontWeight={600}
              lineHeight={1.5}
              variant="h5"
            >
              {bio + "."}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default BasicInfo;
