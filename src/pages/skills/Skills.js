import { Avatar, Box, Card, CardContent, Chip, Divider, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Marquee from "react-fast-marquee";
import { skills } from '../../constants/skills';

function Skills() {

    const [frontendSkills, setFrontendSkills] = useState([]);
    const [backendSkills, setBackendSkills] = useState([]);
    const renderSkills = (skills) => {
        console.log(skills);
        return (
            <Grid container spacing={4}>
                {skills.map((data, index) => (

                    <Grid item key={index} ml={2} mr={2}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Avatar src={data.image}></Avatar>
                        </Box>
                        <Grid item md={12}>
                            <Typography align='center'> {data.name}</Typography>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        );
    };

    useEffect(() => {
        const skillsets = skills.map((item) => item.skills.map((item) => item))

        console.log(skillsets);
        setFrontendSkills(skillsets[0])
        setBackendSkills(skillsets[1]);
    }, [])



    return (
        <Grid container spacing={2} p={2}>



            <Grid item md={12}>
                <Marquee direction='right'>
                    {renderSkills(frontendSkills)}
                </Marquee>
            </Grid>

            <Grid item md={12} mt={3}>
                <Marquee direction='left'>
                    {renderSkills(backendSkills)}
                </Marquee>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
                <Card>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item md={12}>
                                <Typography ml={3} mt={2} mb={1} fontWeight={600} align='center'>Programming</Typography>
                                <Divider />
                                <Typography align='center'>
                                    <b>JavaScript/TypeScript</b>: Proficient in building interactive and responsive web applications using modern JavaScript frameworks and libraries.
                                </Typography>
                                <Typography mt={1} align='center'>
                                    <b>Java</b>:Skilled in creating scalable and efficient enterprise-level applications.
                                </Typography>
                                <Typography mt={1} align='center'>
                                    <b>Python</b>: Experienced in developing backend services, data analysis, and automation scripts.
                                </Typography>
                            </Grid>

                            <Grid item md={12}>
                                <Typography ml={3} mt={2} mb={1} fontWeight={600} align='center'>Web Development</Typography>
                                <Divider />
                                <Typography align='center' >
                                    <b>Frontend</b>: Expertise in HTML, CSS, and JavaScript. Extensive experience with React.js for building dynamic user interfaces and single-page applications.
                                </Typography>
                                <Typography mt={1} align='center'>
                                    <b>Backend</b>: Proficient in Node.js and Express for server-side development. Familiar with RESTful API design and implementation.
                                </Typography>
                                <Typography mt={1} align='center'>
                                    <b>Databases</b>: Knowledgeable in SQL (MySQL, PostgreSQL) and NoSQL (MongoDB) databases. Experience in database design, optimization, and management.
                                </Typography>
                            </Grid>

                            <Grid item md={12}>
                                <Typography ml={3} mt={2} mb={1} fontWeight={600} align='center'>Tools & Technologies</Typography>
                                <Divider />
                                <Typography align='center' >
                                    <b>Version Control</b>: Proficient in using Git and GitHub for version control and collaborative development.
                                </Typography>
                                <Typography mt={1} align='center'>
                                    <b>Development Tools</b>: Experienced with Docker for containerization and deployment. Familiar with CI/CD pipelines using Jenkins, Travis CI, or GitHub Actions.
                                </Typography>
                                <Typography mt={1} align='center'>
                                    <b>Testing</b>: Skilled in writing unit and integration tests using frameworks like Jest, Mocha, and Cypress.
                                </Typography>
                            </Grid>

                            <Grid item md={12}>
                                <Typography ml={3} mt={2} mb={1} fontWeight={600} align='center'>Other Skills</Typography>
                                <Divider />
                                <Typography align='center' >
                                    <b>Problem Solving</b>: Strong analytical and problem-solving abilities, adept at debugging and troubleshooting complex issues.
                                </Typography>
                                <Typography mt={1} align='center'>
                                    <b> Agile Methodologies</b>: Experience working in Agile/Scrum environments, participating in sprint planning, daily stand-ups, and retrospectives.
                                </Typography>
                                <Typography mt={1} align='center'>
                                    <b>Communication</b>: Effective communicator with the ability to convey technical concepts to non-technical stakeholders and collaborate with cross-functional teams.
                                </Typography>
                            </Grid>

                        </Grid>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Skills
