import type { NextPage } from 'next'
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Button from '@mui/material/Button';
import { useMediaQuery } from "@mui/material";
import Image from 'next/image';
import Clock from '../../../components/Clock';
<<<<<<< HEAD
import Link from 'next/link'
=======
>>>>>>> 6b233674f53b16facd51bd04f8b7b331c17dbe94
import useSWR from "swr";
import { useRouter } from "next/router";

import "@fontsource/open-sans";
import "@fontsource/mohave";
import "@fontsource/montserrat";
import ArrowBack from '../../../components/ArrowBack';

const current = new Date();
const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

const theme = createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      'Mohave',
      'sans-serif',
      'montserrat'
    ].join(',')
  },
  palette: {
    primary: {
      main: "#784CF4"
    }
  },
});

const fetcher = (url : string) => fetch(url).then((res) => res.json());

const EventDetail: NextPage = () => {

  const isXXS = useMediaQuery("(max-width:600px)");
  const router = useRouter();
  const { event_id } = router.query;
  const { data,error } = useSWR(router.isReady ? `/event?id=${event_id}` : null,
    fetcher, { refreshInterval: 10000 }
  )
  return (
    <>
      <ThemeProvider theme={theme}>

      <Grid container justifyContent='space-between' style={{ padding: "1rem" }}>
        <Grid item xs={6}>
          <ArrowBack href={"/event/"}/>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "right" }}>
            <Typography fontFamily='Open Sans'>Brisbane, {date}</Typography>
            <Clock />
        </Grid>
      </Grid>

      <Grid container style={isXXS ? {marginBottom:"9rem"} : {marginBottom: "3rem"}}>
        <Grid item xs={12} sm={6} style={{ padding: "1rem" }}>
          <Grid container>
            <Grid item xs={12}>
              <Image src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp" layout='responsive'
                width={16} height={16} quality={65} sizes={"20(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"} alt='' />
            </Grid>
            <Grid item xs={12} sx={{padding:"0.5rem"}}>
              <Grid container justifyContent={"center"}>
                <Link href={`/event/${router.query.event_id}/recipe`}>
                  <Button variant='contained'>View Recipe</Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} style={{ padding: "1rem" }}>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                fontFamily="Open Sans"
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
                <Typography fontFamily="Open Sans">Location:</Typography><Typography color={"#784CF4"}> 1st Floor Kitchen</Typography>
                <Typography fontFamily="Open Sans">Time: </Typography><Typography color={"#784CF4"}>1st of January, 2021 (6 PM)</Typography>
                <Typography fontFamily="Open Sans">Tasks: </Typography><Typography color={"#784CF4"}>Prepping, Frying, Serving</Typography>
                <Typography fontFamily="Open Sans">Description:</Typography><Typography color={"#784CF4"}>
                  Let’s learn how to cook this traditional
                  Korean delicacy together! Cook together and eat together with your fellow residents!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Box sx={{ backgroundColor:"white", position: 'fixed', bottom: 0, left: 0, right: 0, padding:"0.5rem", borderTop:"solid 1px #784CF4"}}>
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <Grid item xs={12} sm={6} style={{textAlign:"center"}}>
            <Typography fontFamily="Open Sans">15 People Joining</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container justifyContent="center">
              <Grid xs={12} sm={"auto"} item style={isXXS ? {padding:"0.5rem 0.5rem"} : {padding:"0rem 0.5rem"}}>
                <Link href={`/event/${router.query.event_id}/participants`}>
                  <Button variant="outlined" fullWidth={isXXS} color="primary">View Participants</Button>
                </Link>
              </Grid>
              <Grid xs={12} sm={"auto"} item style={isXXS ? {padding:"0.5rem 0.5rem"} : {padding:"0rem 0.5rem"}}>
                <Link href={`/event/${router.query.event_id}/join`}>
                  <Button variant="contained" fullWidth={isXXS} color="primary">Join</Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      </ThemeProvider>
    </>
  )
}

export default EventDetail
