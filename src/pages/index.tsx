import type { NextPage } from 'next'
import Link from 'next/link'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Clock from './clock';

import "@fontsource/open-sans";
import "@fontsource/mohave";

const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

const theme = createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      'Mohave',
      'sans-serif',
    ].join(','),
    body1: {
      fontWeight: 700,
    },
  },
});

const Home: NextPage = () => {
  return (

    <Container>
      <Grid container justifyContent='flex-end'>
        <Grid item style={{marginTop:"2%"}}>
          <ThemeProvider theme={theme}>
            <Typography fontFamily='Open Sans'>Brisbane, {date}</Typography>
            <Clock />
          </ThemeProvider>
        </Grid>
      </Grid>

        <Grid container direction="column" justifyContent="center" alignItems="center" spacing = {2}>

          <Grid item style={{marginTop: "2%", marginBottom:"5%"}}>
            <Image src="/logo.png" width={"680%"} height={"145%"} />
          </Grid>
          
          <Grid item>
            <Link href={`\create`}>
              <Button variant="contained" href="#contained-buttons" fullWidth={true}>
                Create an Event 
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link href={`\event`}>
              <Button variant="contained" href="#contained-buttons">
                See Events
              </Button>
            </Link>
          </Grid>

          <Grid item style={{marginTop: "2%"}}>
            <hr style={{color:"#784CF4", backgroundColor:"#784CF4"}}/>
            <Typography fontFamily={'Mohave'} fontSize={'2.2rem'} style= {{color:"#784CF4", fontWeight:"bold"}}>UPCOMING EVENTS</Typography>
          </Grid>
        </Grid>
      </Container>
  )
}

export default Home
