import { Box, Button, CardMedia, Grid, Link, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { projects } from '../../constants/projects';
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
    }, [])


    return (
        <Grid container >
            <Grid item md={12}>
                <CardMedia
                    component="img"
                    height="600px"
                    src={data?.[currentIndex]?.image}
                    sx={{ width: '100%', backgroundPosition: 'cover', border: '1px solid black' }}
                />
                <Box sx={{ position: 'absolute', top: '160px', height: '600px', width: '100%', backgroundColor: 'black', opacity: '0.6', }}>
                    <Typography color={'white'} fontWeight={600} position={'relative'} ml={2} mt={1}>
                        {data?.[currentIndex]?.name}
                    </Typography>

                    <Typography color={'white'} fontWeight={600} position={'relative'} ml={2} mt={1}>
                        {data?.[currentIndex]?.info}
                    </Typography>

                    <Typography color={'white'} fontWeight={600} position={'relative'} ml={2} mt={2}>
                        Technologires used to Built {data?.[currentIndex]?.webLink && <Link ml={3} href={data?.[currentIndex]?.webLink}> Open</Link>}
                    </Typography>
                    <Box display={'flex'} justifyContent={'flex-start'}>
                        {data?.[currentIndex]?.techStack?.map((item) => {
                            return (
                                <Typography color={'white'} fontWeight={600} position={'relative'} ml={2} mt={0}>
                                    {item}
                                </Typography>
                            )
                        })}
                    </Box>
                </Box>


                <Box position={'absolute'} sx={{ height: '150px', width: '250px', backgroundColor: 'transparent', bottom: '60px', right: '40px' }}>
                    <Button onClick={previousClick} variant='text' sx={{ position: 'relative', top: '65%', left: '1px', color: 'blue', }}><KeyboardArrowLeftIcon color='pink' /></Button>
                    <Button onClick={nextClick} sx={{ position: 'relative', top: '65%', right: '-120px', color: 'blue', }}><KeyboardArrowRightIcon /></Button>

                    <CardMedia
                        component="img"
                        height="100%"
                        src={data?.[currentIndex]?.image}
                        sx={{ width: '100%', backgroundPosition: 'cover', border: '1px solid black' }}
                    />

                </Box>
            </Grid>
        </Grid>
    )
}

