import type { NextPage } from "next";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import Clock from "../../../components/Clock";
import Dates from "../../../components/Date";
import Carousel from "react-material-ui-carousel";

import Link from "next/link";
import useSWR from "swr";
import { useRouter } from "next/router";

import "@fontsource/open-sans";
import "@fontsource/mohave";
import "@fontsource/montserrat";
import ArrowBack from "../../../components/ArrowBack";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";

const theme = createTheme({
  typography: {
    fontFamily: ["Open Sans", "Mohave", "sans-serif", "montserrat"].join(","),
  },
  palette: {
    primary: {
      main: "#784CF4",
    },
  },
});

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const EventDetail: NextPage = () => {
  const isXXS = useMediaQuery("(max-width:600px)");
  const router = useRouter();
  const { event_id } = router.query;
  const eventData = useSWR(router.isReady ? `/api/events/${event_id}` : null,
    fetcher, { refreshInterval: 10000 }
  )

  const participantData = useSWR(router.isReady ? `/api/events/${event_id}/participants` : null,
    fetcher, { refreshInterval: 10000 }
  )

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container justifyContent='space-between' style={{ padding: "1rem" }}>
          <Grid item xs={6}>
            <ArrowBack href={"/event/"} />
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "right" }}>
            <Dates />
            <Clock />
          </Grid>
        </Grid>

        <Grid container style={isXXS ? { marginBottom: "9rem" } : { marginBottom: "3rem" }}>
          {!!eventData.data ? (
            <>
              <Grid item xs={12} sm={6} style={{ padding: "1rem" }}>
                <Grid container>
                  <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {/* <Image src={eventData.data.event.images[0]} width={500} height={500} alt='' /> */}
                    <Carousel
                      sx={{ width: 600 }}
                      className="Example"
                      autoPlay={true}
                      animation={"slide"}
                      indicators={true}
                      cycleNavigation={true}
                      navButtonsAlwaysVisible={false}
                      navButtonsAlwaysInvisible={false}
                    >
                      {eventData.data.event.images.map((image: string, index: number) => {
                        return (
                          <Box key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Image
                              src={image}
                              height={600}
                              width={650}
                            />
                          </Box>
                        );
                      })}
                    </Carousel>
                  </Grid>
                  <Grid item xs={12} sx={{ padding: "0.5rem" }}>
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
                      {eventData.data.event.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} display={isXXS ? "none" : "block"}>
                    <Grid container>
                      <Grid item xs={12} textAlign={isXXS ? "center" : "left"}>
                        <Typography fontFamily="Open Sans">{!!participantData.data ? participantData.data.participants.length : "0"} JOINING</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Box sx={{ width: 350 }}>
                          <Grid container>
                            <Grid xs={12} sm={6} item style={isXXS ? { padding: "0.5rem 0.5rem" } : { padding: "0.5rem 0rem" }}>
                              <Link href={`/event/${router.query.event_id}/participants`}>
                                <Button variant="outlined" fullWidth={isXXS} color="primary">View Participants</Button>
                              </Link>
                            </Grid>
                            <Grid xs={12} sm={6} item style={isXXS ? { padding: "0.5rem 0.5rem" } : { padding: "0.5rem 0rem" }}>
                              <Link href={`/event/${router.query.event_id}/join`}>
                                <Button variant="contained" fullWidth={isXXS} color="primary">Join</Button>
                              </Link>
                            </Grid>
                          </Grid>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container direction={"column"}>
                      <Typography fontFamily="Open Sans">Location:</Typography><Typography color={"#784CF4"}> {eventData.data.event.location}</Typography>
                      <Typography fontFamily="Open Sans">Time: </Typography><Typography color={"#784CF4"}>{new Date(eventData.data.event.date).toLocaleString()}</Typography>
                      <Typography fontFamily="Open Sans">Tasks: </Typography><Typography color={"#784CF4"}>{eventData.data.event.tasks.join(', ')}</Typography>
                      <Typography fontFamily="Open Sans">Description:</Typography><Typography color={"#784CF4"}>
                        {eventData.data.event.description.split('\n').map((str: string, i: number) => <p key={i}>{str}</p>)}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </>
          ) : (
            <Grid item xs={12}>
              <Grid container justifyContent={"center"}>
                <CircularProgress />
              </Grid>
            </Grid>
          )}
        </Grid>

        <Box display={isXXS ? "block" : "none"} sx={{
          backgroundColor: "white",
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          padding: "0.5rem",
          borderTop: "solid 1px #784CF4"
        }}>
          <Grid container justifyContent={"space-between"} alignItems={"center"}>
            <Grid item xs={12} sm={6} style={{ textAlign: "center" }}>
              <Typography fontFamily="Open Sans">{!!participantData.data ? participantData.data.participants.length : "0"} JOINING</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container justifyContent="center">
                <Grid xs={12} sm={"auto"} item style={isXXS ? { padding: "0.5rem 0.5rem" } : { padding: "0rem 0.5rem" }}>
                  <Link href={`/event/${router.query.event_id}/participants`}>
                    <Button variant="outlined" fullWidth={isXXS} color="primary">View Participants</Button>
                  </Link>
                </Grid>
                <Grid xs={12} sm={"auto"} item style={isXXS ? { padding: "0.5rem 0.5rem" } : { padding: "0rem 0.5rem" }}>
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
  );
};

export default EventDetail;
