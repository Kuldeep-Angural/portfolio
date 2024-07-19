import { Avatar, Box, Button, Card, CardContent, CardMedia, Chip, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import { projects } from '../../constants/projects'
import { useNavigate } from 'react-router-dom'
import { skills } from '../../constants/skills';

function Projects() {

    const navigate = useNavigate();
    const renderCards = (data) => {
        return (
            <Grid item md={4} sm={6} xs={12}>
                <Card>
                    <CardContent sx={{ minHeight: '400px', maxHeight: '400px' }} >
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <CardMedia
                                component="img"
                                height="200px"
                                width="100%"
                                src={data.image}
                                sx={{ width: '100%', backgroundPosition: 'cover', borderRadius: '5px', border: '1px solid black' }}
                            />
                        </Box>
                        <Typography>{data?.name}</Typography>

                        <Typography>{data?.feature}</Typography>

                        <Grid container spacing={1} mt={2}>
                            {data?.techStack?.map((item) => {
                                return (
                                    <Grid item >
                                        <Chip label={item} />
                                    </Grid>
                                )
                            })}
                        </Grid>

                        <Box display={'flex'} justifyContent={'center'}>
                            {data.webLink && <Link variant='outlined' href={data?.webLink}>Link</Link>}
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        )
    }


    const renderSkills = (data) => {
        return (
            <Grid item >
                <Grid container >
                    <Grid item md={12} alignItems={'center'}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Avatar src={data.image}></Avatar>
                        </Box>
                    </Grid>
                    <Grid item md={12}>
                        <Typography align='center'> {data.name}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
    return (
        <>


            <Typography align='center' fontWeight={550}>Skills</Typography>
            <Grid container spacing={2} p={3}>
                {skills.map((item) => {
                    return item.skills.map((project) => {
                        return (
                            renderSkills(project)
                        )
                    })
                })}
            </Grid>


            <Typography align='center' fontWeight={550}>Projects</Typography>
            <Grid container spacing={2} p={3}>
                {projects.map((item) => {
                    return item.project.map((project) => {
                        return (
                            renderCards(project)
                        )
                    })
                })}
            </Grid>
        </>
    )
}

export default Projects
