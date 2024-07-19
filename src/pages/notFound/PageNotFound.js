import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import image from '../../images/404.png';
export const PageNotFound = () => {

  const naviGate = useNavigate();

  return (
    <Grid container spacing={2} justifyContent={'center'} alignItems={'center'} style={{ minHeight: '100vh' }}>
      <Grid item md={12} xs={12} sm={12}>
        <img src={image} width={'100%'} height={'400px'}></img>
      </Grid>
      <Grid item>
        <Button style={{ position: 'relative', top: '-123px' }} onClick={() => window.location.reload()} color="primary" variant="text">
          Try Again
        </Button>
      </Grid>
      <Grid item>
        <Button style={{ position: 'relative', top: '-123px' }} onClick={() => { naviGate('/') }} color="primary" variant="text">
          Home Page
        </Button>
      </Grid>
    </Grid>
  )
}