import { Grid, Typography } from '@mui/material'
import React from 'react'
import { CustomTimeline } from '../../component/timeline/CustomTimeline'

export const Journey = () => {
    return (
        <Grid container spacing={2} p={2} mt={10} >
            <Grid item md={12} sm={12} xs={12}>
            <Typography variant='subtitle1' fontWeight={'700'} textAlign={'center'}>My Journey</Typography>
                <CustomTimeline/>
            </Grid>
        </Grid>
    )
}

