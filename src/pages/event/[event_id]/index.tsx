import type { NextPage } from 'next'
import Grid from '@mui/material/Grid';
import { Paper, Typography } from '@mui/material';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Button from '@mui/material/Button';
import { useMediaQuery } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Image from 'next/image';
import Clock from '../../Clock';

import "@fontsource/open-sans";
import "@fontsource/mohave";

const current = new Date();
const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

const theme = createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      'Mohave',
      'sans-serif',
    ].join(',')
  },
  palette: {
    primary: {
      main: "#784CF4"
    }
  },
});

const EventDetail: NextPage = () => {
  const isXXS = useMediaQuery("(max-width:600px)");
  return (
    <>
      <ThemeProvider theme={theme}>

      <Grid container justifyContent='space-between' style={{ padding: "1rem" }}>
        <Grid item xs={6}>
          <ArrowBackIosNewIcon />
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "right" }}>
          <ThemeProvider theme={theme}>
            <Typography fontFamily='Open Sans'>Brisbane, {date}</Typography>
            <Clock />
          </ThemeProvider>
        </Grid>
      </Grid>

      <Grid container style={isXXS ? {marginBottom:"9rem"} : {marginBottom: "3rem"}}>
        <Grid item xs={12} sm={6} style={{ padding: "1rem" }}>
          <Image src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp" layout='responsive'
            width={16} height={16} quality={65} sizes={"20(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"} alt='' />
        </Grid>
        <Grid item xs={12} sm={6} style={{ padding: "1rem" }}>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{ textTransform: "capitalize", fontWeight: "600", overflowY: 'hidden' }}
              >
                Bibimbap Tutorial
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container direction={"column"}>
                <Typography>Location:</Typography><Typography color={"#784CF4"}> 1st Floor Kitchen</Typography>
                <Typography>Time: </Typography><Typography color={"#784CF4"}>1st of January, 2021 (6 PM)</Typography>
                <Typography>Tasks: </Typography><Typography color={"#784CF4"}>Prepping, Frying, Serving</Typography>
                <Typography>Description:</Typography><Typography color={"#784CF4"}>
                  Let’s learn how to cook this traditional
                  Korean delicacy together! Cook together and eat together with your fellow residents!</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <hr
            style={{
              background: '#784CF4',
              borderColor: '#784CF4',
              height: '1px',
            }}
          />
        </Grid>
        <Grid item xs={12} style={{ padding: "1rem" }}>
          <Typography component="h1" variant="h5" color={"#784CF4"}>Recipe: </Typography>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet varius imperdiet. Proin quis eros eget dolor vehicula facilisis et vitae est. Nam ac metus ac mauris sagittis pretium. Nam elit nunc, luctus in dui ac, dignissim varius mauris. Sed eu mi efficitur, imperdiet eros ut, dignissim elit. Pellentesque cursus magna a lacus laoreet, nec vehicula urna viverra. Donec pharetra, felis at efficitur fringilla, purus sem placerat arcu, eu sagittis ipsum orci nec turpis. Etiam auctor velit non mauris viverra, a fringilla dui vulputate. Nam ut purus mattis, sodales arcu eget, cursus diam. Ut faucibus purus a mi consequat, a rhoncus metus ultrices.

            Aliquam erat volutpat. Mauris non purus id lectus aliquam blandit sit amet eu turpis. Donec dictum libero sit amet finibus tincidunt. Integer auctor placerat neque sed finibus. Phasellus vitae dignissim enim. Praesent ac justo eget orci accumsan scelerisque. Nunc aliquam, ex at imperdiet commodo, enim leo blandit nunc, id auctor tortor justo in quam. Vestibulum dignissim, diam eu consectetur euismod, lacus enim pellentesque lorem, sed lacinia odio quam eu risus.</Typography>
        </Grid>
      </Grid>

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, padding:"0.5rem"}} elevation={3}>
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <Grid item xs={12} sm={6} style={{textAlign:"center"}}>
            <Typography>15 People Joining</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container justifyContent="center">
              <Grid xs={12} sm={"auto"} item style={isXXS ? {padding:"0.5rem 0.5rem"} : {padding:"0rem 0.5rem"}}>
              <Button variant="outlined" fullWidth={isXXS} color="primary">View Participants</Button>
              </Grid>
              <Grid xs={12} sm={"auto"} item style={isXXS ? {padding:"0.5rem 0.5rem"} : {padding:"0rem 0.5rem"}}>
              <Button variant="contained" fullWidth={isXXS} color="primary">Join</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      </ThemeProvider>
    </>
  )
}

export default EventDetail
