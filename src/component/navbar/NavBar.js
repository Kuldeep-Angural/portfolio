import { Box, Button, Grid, Link, Tooltip } from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from "react";

import DarkModeIcon from '@mui/icons-material/DarkMode';
import FeedIcon from '@mui/icons-material/Feed';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import LightModeIcon from '@mui/icons-material/LightMode';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '../button/IconButton';

const NavBar = ({ chacked, onChange }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const naviGate = useNavigate();
    const CustomLink = ({ to, icon, style, tooltip, onClick }) => (
        <Tooltip title={tooltip || icon}>
            <Button style={{ ...style, color: 'inherit' }} onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)} component={Link} to={to} variant="text" color="primary" size="small" sx={{ mb: 2, minWidth: 'unset' }} onClick={onClick}>
                {icon}
            </Button>
        </Tooltip>
    );

    return (
        <>
            <Grid container>

                <Grid item xs={12}>
                    <Grid container justifyContent="center">
                        <Grid display={'flex'} justifyContent={'end'}>
                            <CustomLink style={{ marginRight: '10px', marginTop: '10px' }} icon={<HomeIcon sx={{ color: chacked ? 'white' : 'black', height: '40px', width: '40px' }} />} onClick={() => naviGate('/')} to="/" tooltip="Home" />
                            <IconButton style={{ marginRight: '10px', marginTop: '10px' }} icon={<FeedIcon sx={{ color: chacked ? 'white' : 'black', height: '40px', width: '40px' }} />} onClick={() => window.open('https://drive.google.com/file/d/1gztQ097DXVDSo_vzwjEVXgCB28ra65pU/view?usp=sharing')} tooltip="Resume" />
                            <IconButton style={{ marginRight: '10px', marginTop: '10px' }} icon={<LinkedInIcon sx={{ color: chacked ? 'white' : 'black', height: '40px', width: '40px' }} />} onClick={() => window.open('https://www.linkedin.com/in/kuldeep-kumar-485a13252/')} tooltip="Linkedin" />
                            <IconButton style={{ marginRight: '10px', marginTop: '10px' }} icon={<GitHubIcon sx={{ color: chacked ? 'white' : 'black', height: '40px', width: '40px' }} />} onClick={() => window.open('https://github.com/Kuldeep-Angural')} tooltip="Git-Hub" />
                            <IconButton style={{ marginRight: '20px', marginTop: '10px' }} onClick={onChange} value={chacked} tooltip={chacked ? 'Turn on The Light' : 'Turn of The Light'} icon={chacked ? <LightModeIcon sx={{ color: chacked ? 'white' : 'black', height: '40px', width: '40px' }} /> : <DarkModeIcon sx={{ color: chacked ? 'white' : 'black', height: '40px', width: '40px' }} />} />
                        </Grid>
                    </Grid>
                    <Grid item md={12}>
                        <Box display={'flex'} justifyContent={'center'} mt={0} >
                            <CustomLink variant="outlined" color="inherit" icon={'Journey'} onClick={() => naviGate('/Journey')} >

                            </CustomLink>

                            <CustomLink variant="outlined" color="inherit" icon={'Projects'} sx={{ backgroundColor: 'inherit' }} onClick={() => naviGate('/projects')}>

                            </CustomLink>

                            <CustomLink variant="outlined" color="inherit" icon={'Skills'} sx={{ backgroundColor: 'inherit' }} onClick={() => naviGate('/skills')}>

                            </CustomLink>

                            {/* <CustomLink variant="outlined" color="inherit" icon={'Blogs'} sx={{ backgroundColor: 'inherit' }} onClick={() => naviGate('/blogs')}>

                            </CustomLink> */}

                            <CustomLink variant="outlined" color="inherit" icon={'Contact'} sx={{ backgroundColor: 'inherit' }} onClick={() => naviGate('/contact')}>

                            </CustomLink>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>

        </>
    );
};
export default NavBar;
