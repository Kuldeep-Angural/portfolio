import React from "react";
import { CardContent, Grid, Typography, Card, CardMedia, Box, Link, Avatar, Divider, Button } from "@mui/material";
import image from '../../images/Screenshot 2024-07-20 025912.png'
import TypographyWithIcon from "../../component/output/TypographyWithIcon";
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { bio, professionWords, socialMediaHandle } from "../../constants/informationText";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
const BasicInfo = () => {
    const naviGate = useNavigate();
    const SocialMediaAvatar = ({ name, link, image }) => {
        return (
            <Link sx={{ mt: 6 }} key={name} title={name} href={link} color="inherit" underline="none" target="_blank" style={{ fontWeight: '700' }}>
                <Avatar alt={name} src={image} />
            </Link>
        );
    };
    return (

        <Grid container spacing={2} p={2}>
            <Grid item md={5} sm={12} xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <Box>
                        <CardContent>
                            <Grid container>
                                <Grid item md={12}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <CardMedia
                                            component="img"
                                            height="200px"
                                            width="200px"
                                            src={image}
                                            sx={{ width: '200px', backgroundPosition: 'cover', borderRadius: '50%', border: '1px solid black' }}
                                        />
                                    </Box>
                                    <TypographyWithIcon mt={2} fontSize={'20px'} icon={<EmailIcon />} fontWeight='600' text={"kuldeep.navv@gmail.com"} />
                                    <TypographyWithIcon mt={2} fontSize={'20px'} icon={<PhoneAndroidIcon />} fontWeight='600' text={"+91 98551-71485"} />
                                    <TypographyWithIcon mt={2} fontSize={'20px'} icon={<CalendarMonthIcon />} fontWeight='600' text={"march-17-1998"} />
                                    <TypographyWithIcon mt={2} fontSize={'20px'} icon={<LocationOnIcon />} fontWeight='600' text={"Pathankot , Punjab , In"} />

                                    <Grid gap={2} display="flex" justifyContent="center" alignContent="center" alignItems="center">
                                        {socialMediaHandle.map((item) => (
                                            <SocialMediaAvatar key={item.name} name={item.name} link={item.link} image={item.image} />
                                        ))}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Box>
                </Box>
            </Grid>
            <Grid item md={7} sm={12} xs={12}>
                <Box>
                    <Typography variant="h4" textAlign="center" sx={{ mt: 5 }}>
                        <Typography variant="h4" fontFamily={'cursive'} fontWeight={600}>
                            Hi, my name is Kuldeep Kumar
                        </Typography>{' '}
                        <br />
                        <span>I am a </span>
                        <span style={{ color: '#98B1D9', fontFamily: 'monospace', fontWeight: 900, letterSpacing: '.3rem' }}>
                            <Typewriter words={professionWords} loop={5} typeSpeed={40} deleteSpeed={40} cursor />
                        </span>
                        <br />
                    </Typography>
                    <Typography sx={{ margin: '20px' }} fontWeight={600} lineHeight={1.5} variant="h5">
                        {bio + '.'}
                    </Typography>
                </Box>
            </Grid>
        </Grid>

    );
};

export default BasicInfo;
