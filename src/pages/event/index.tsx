import type { NextPage } from 'next'
import * as React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Card, Box, CardMedia, CardActionArea } from '@mui/material';
import { createTheme, useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Clock from '../../components/Clock'
import Link from 'next/link'
import useSWR from "swr";

import "@fontsource/open-sans";
import "@fontsource/mohave";
import "@fontsource/montserrat";
import ArrowBack from '../../components/ArrowBack';

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

const AllEvents: NextPage = () => {

  const isXXS = useMediaQuery("(max-width:600px)");
  const { data, error } = useSWR('event', fetch,
    { refreshInterval: 30000 }
  )
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container alignItems='center' justifyContent='space-between' style={{ padding: "1rem" }}>
          <Grid item>
            <ArrowBack href={"/"} />
          </Grid>
          <Grid item>
            <Grid item>
              <Typography fontFamily="Open Sans" style={{ fontSize: 16, textAlign: "right", fontWeight: "600" }}>Upcoming</Typography>
            </Grid>
            <Grid item>
              <Typography fontFamily="Open Sans" style={{ fontSize: 20, textAlign: "right", fontWeight: "bold" }}>Events</Typography>
            </Grid>
          </Grid>
        </Grid>


        <Grid container justifyContent={"center"} alignItems={"center"} style={{ backgroundColor: "#784CF4E0", color: "white" }}>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Typography fontFamily="Open Sans">Brisbane, {date}</Typography>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Clock />
          </Grid>
        </Grid>

        <Grid container spacing={3} justifyContent="center" sx={{ padding: "1rem" }}>
          <Grid item xs={12} md={6}>
            <Card sx={isXXS ? { display: "flex", flexDirection: "column" } : { display: "flex" }}>
              <Box justifyContent="center" sx={{ display: "flex", alignItems: "center", backgroundColor: "#784CF4", padding: "1rem" }}>
                <Typography
                  variant="h4"
                  fontFamily="Mohave"
                  sx={{
                    textTransform: "uppercase",
                    color: "white",
                    fontWeight: 700
                  }}>
                  {'january'.slice(0, 3)}
                </Typography>
              </Box>
              <Box sx={{ padding: "0.5rem" }}>
                <Grid container spacing={1} justifyContent="space-around" direction={{ xs: "column", sm: "row" }}>

                  <Grid item>
                    <Card>
                      <Link href={"/event/1"}>
                        <CardActionArea sx={{ display: "flex", alignItems: "center" }} >
                          <CardMedia
                            component="img"
                            sx={{ width: 100, height: 100 }}
                            image="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
                            alt="Live from space album cover"
                          />
                          <Grid container direction={"column"} sx={{ padding: "0.5rem" }}>
                            <Grid item>
                              <Typography fontFamily='Montserrat' component="div" variant="h5" textAlign="right" fontWeight={800}>
                                01
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography
                                fontFamily="Open Sans"
                                variant="subtitle1"
                                color="text.secondary"
                                component="div"
                                noWrap
                                sx={isXXS ? { width: "13rem" } : { width: "10rem" }}>
                                Bibimbap Tutorial
                              </Typography>
                            </Grid>
                          </Grid>
                        </CardActionArea>
                      </Link>
                    </Card>
                  </Grid>

                  <Grid item>
                    <Card>
                      <Link href={"/event/1"}>
                        <CardActionArea sx={{ display: "flex", alignItems: "center" }} >
                          <CardMedia
                            component="img"
                            sx={{ width: 100, height: 100 }}
                            image="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
                            alt="Live from space album cover"
                          />
                          <Grid container direction={"column"} sx={{ padding: "0.5rem" }}>
                            <Grid item>
                              <Typography fontFamily='Montserrat' component="div" variant="h5" textAlign="right" fontWeight={800}>
                                01
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Typography
                                fontFamily="Open Sans"
                                variant="subtitle1"
                                color="text.secondary"
                                component="div"
                                noWrap
                                sx={isXXS ? { width: "13rem" } : { width: "10rem" }}>
                                Bibimbap Tutorial
                              </Typography>
                            </Grid>
                          </Grid>
                        </CardActionArea>
                      </Link>
                    </Card>
                  </Grid>

                </Grid>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  )
}

export default AllEvents
