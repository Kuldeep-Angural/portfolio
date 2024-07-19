import { Box, Typography } from '@mui/material';
import React from 'react';

const TypographyWithIcon = ({ text, icon, fontSize, color, fontfamily , fontWeight ,...rest }) => {

    return (
        <Typography {...rest} component="div">
            <Box sx={{ display: 'flex', alignItems: 'center' , }}>
                {icon}
                <Box sx={{ ml: 1 }} fontWeight={fontWeight} fontSize={fontSize}>{text}</Box>
            </Box>
        </Typography>
    )
}

export default TypographyWithIcon;