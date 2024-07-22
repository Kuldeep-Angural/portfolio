
import { Box, Chip, Grid, Typography } from '@mui/material';
import * as React from 'react';
import WorkIcon from '@mui/icons-material/Work';
import { experience } from '../../constants/Experience';
import { educations } from '../../constants/Educations';

const timelineStyles = {
  width: '85%',
  maxWidth: '700px',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  flexDirection: 'column',
  padding: '32px 0 32px 32px',
  borderLeft: '2px solid #e3e3e3',
  fontSize: '1.125rem',
  lineHeight: '1',
  minHeight: '10vh',
  fontFamily: '"Outfit", sans-serif',
  paddingTop: '10vh',
  paddingBottom: '10vh',
};

const timelineItemStyles = {
  display: 'flex',
  gap: '24px',
  marginTop: '24px',
};


const timelineItemIconStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  marginLeft: '-53px',
  flexShrink: 0,
  overflow: 'hidden',
  boxShadow: '0 0 0 6px inherit',
};



const filledIconStyles = {
  backgroundColor: '#688afd',
  color: '#fff',
};

const timelineItemDescriptionStyles = {
  display: 'flex',
  paddingTop: '6px',
  gap: '8px',
  color: '#7b7b7b',
};




const commentStyles = {
  marginTop: '12px',
  color: 'inherit',
  border: '1px solid #e3e3e3',
  borderRadius: '6px',
  padding: '16px',
  fontSize: '1rem',
};



const timeLine = (pro , icon) => {
  return (
    <li style={{ ...timelineItemStyles, marginTop: '5px' }}>
      <span style={{ ...timelineItemIconStyles, ...filledIconStyles }}>
        {icon || pro?.icon}
      </span>
      <div>
        <div style={timelineItemDescriptionStyles}>
          <Typography color={'inherit'}> {pro?.name} {pro?.time ||"- " +pro?.completed}</Typography>
        </div>
        <div style={commentStyles}>
          { pro?.image && <img src={pro?.image} height={'300px'} width={'100%'}></img>}
          <Typography>{pro?.info}</Typography>

         { pro?.technologies && <Grid container spacing={2} mt={2}>
            {pro?.technologies?.map((item) => {
              return (
                <Grid item >
                  <Chip label={item} />
                </Grid>
              )
            })}
          </Grid>}
         { pro?.university && <Typography mt={1}>{pro?.university}</Typography>}
         { pro?.location && <Typography >{pro?.location}</Typography>}


        </div>
      </div>
    </li>
  )
}



export const CustomTimeline = () => {
  return (
    <Box>
      <Typography align='center' fontSize={'30px'}>Experience -INSONIX</Typography>
      <Box>
        <ol style={timelineStyles}>
          {experience.map((item) => {
            return item.Projects.map((pro) => {
              return timeLine(pro , <WorkIcon/>)
            })
          })}
        </ol>

      </Box>

      <Typography align='center'>Education</Typography>
      <Box>
        <ol style={timelineStyles}>

          {educations.map((item)=>{
            return item.programs.map((program)=>{
              return timeLine(program )
            })
          })}
        </ol>

      </Box>
    </Box>

  );
}

