import { Box, Button, Card, CardContent, CardMedia, CircularProgress, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { GoogleMap } from '../../component/googleMap/GoogleMap'
import { addDelay } from '../../util/util'
import emailjs from '@emailjs/browser';
import Toast from '../../component/toaster/Toast';
function Contact() {

    const [date, setData] = useState({})
    const [values, setValues] = useState({})
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('');
    const [mesageType, setMessageType] = useState('success');
    const [error, setError] = useState('');
    const [opentoast, setopentoast] = useState(false);



    const getLocationParams = () => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const { latitude, longitude } = position.coords;
                getExactLocation(latitude, longitude);
            });
        } else {
            alert('Geolocation is not supported by your browser.');
        }
    };

    const getExactLocation = async (latitude, longitude) => {
        try {
            const api_key = process.env.REACT_APP_LOCATION_API_KEY;
            const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${api_key}`;

            const response = await fetch(url);

            if (response.status === 200) {
                setMessage(`Email sent successfully!`);
              } else {
                setMessageType('error');
                setMessage(`Something went-wrong`);
              }
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const { country, state, name } = data[0] || {};

            setData({ city: name, state, country, });
        } catch (error) {
            console.error('Error:', error);
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }




    useEffect(() => {
        setData({ city: 'pathankot', state: 'punjab', zip: '145001', country: 'india' })
    }, [])



    const onSubmit = () => {
        setLoading(true);

        if (values.name && values.email && values.message) {

            const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
            const templateid = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
            const publicKey = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;



            const templateParams = {
                from_name: values?.name,
                from_email: values?.email,
                to_name: 'Kuldeep kumar',
                message: ` getting this message :${values.message} , from ${values?.email}`,
            };

            emailjs.send(serviceId, templateid, templateParams, publicKey).then((result) => {
                if (result.status === 200) {
                    setMessage(`Email sent successfully!`);
                } else {
                    setMessageType('error');
                    setMessage(`Something went-wrong`);
                }
            });
            setopentoast(true);
        }
        setLoading(false);

    };

    const handleClose = () => {
        setopentoast(false);
      };

    return (

        <Grid container p={2}>
             <Toast opentoast={opentoast} handleClose={handleClose} time={3000} mesageType={mesageType} message={message} vertical="top" horizontal="center" />
            <Grid item md={12} sm={12} xs={12}>
                <CardMedia sx={{ width: '100%' }}>
                    {GoogleMap(date)}
                </CardMedia>
                <Button color='secondary' variant='outlined' sx={{ position: 'absolute', top: '185px', right: '30px', backgroundColor: 'white' }} onClick={getLocationParams}>check your Location</Button>
            </Grid>


            <Grid item md={12} sm={12} xs={12} mt={3} p={3}>
                <Typography align='center' fontWeight={550}> Contact-me</Typography>
                <Grid container spacing={2}>
                    <Grid item md={6} sm={12} xs={12}>
                        <TextField id="standard-basic" value={values?.name} name='name' onChange={handleChange} fullWidth label="name" variant="standard" />
                    </Grid>

                    <Grid item md={6} sm={12} xs={12}>
                        <TextField id="standard-basic" value={values?.email} name='email' onChange={handleChange} fullWidth label="email" variant="standard" />
                    </Grid>

                    <Grid item md={12} sm={12} xs={12}>
                        <TextField id="standard-basic" value={values?.message} name='message' onChange={handleChange} fullWidth multiline rows={4} label="message" variant="standard" />
                        <span>{error.message}</span>
                    </Grid>

                    <Grid item md={12} sm={12} xs={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                            <Button id="standard-basic" multiline label="message" onClick={onSubmit} variant="outlined">
                                {loading ? < CircularProgress color="inherit" thickness={10} size={10} /> : 'Submit'}
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default Contact
