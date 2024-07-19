import { Grid } from '@mui/material'
import React from 'react'
import { CustomTimeline } from '../../component/timeline/CustomTimeline'

export const Journey = () => {
    return (
        <Grid container spacing={2} p={2} mt={4}>
            <Grid item md={12} sm={12} xs={12}>
                <CustomTimeline/>
            </Grid>
        </Grid>
    )
}

