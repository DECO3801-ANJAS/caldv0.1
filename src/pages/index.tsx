// @refresh reset
import type { NextPage } from "next";
import Link from "next/link";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { Typography } from "@mui/material";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Clock from "../components/Clock";
import Dates from "../components/Date"

import "@fontsource/open-sans";
import "@fontsource/mohave";
import "@fontsource/montserrat";
import BookCard from "../components/BookCard";
import IEvent from "../interfaces/models/event";
import useSWR from "swr";

const current = new Date();
const date = `${current.getDate()}/${current.getMonth() + 1
  }/${current.getFullYear()}`;

const theme = createTheme({
  typography: {
    fontFamily: ["Open Sans", "Mohave", "sans-serif", "Montserrat"].join(","),
  },
  palette: {
    primary: {
      main: "#784CF4",
    },
  },
});

// Fetcher function for useSWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {

  // Get events data from api/events route
  const { data, error } = useSWR("api/events", fetcher, {
    refreshInterval: 30000,
  });

  // Sort events based on date and get the first one
  const upcomingEvent =
    !!data && data.events.length !== 0
      ? data.events.reduce((a: IEvent, b: IEvent) => (a.date < b.date ? a : b))
      : {};

  const showUpcomingEvent = () => {
    if (!!upcomingEvent && Object.keys(upcomingEvent).length !== 0) {
      return (
        <BookCard
          eventDate={new Date(upcomingEvent.date).getDate()}
          eventTitle={upcomingEvent.title}
          hrefUrl={`event/${upcomingEvent._id}`}
          imageUrl={upcomingEvent.images.length !== 0 ? upcomingEvent.images[0] : "https://via.placeholder.com/150?text=No_Image"}
          imgAlt={upcomingEvent.title}
        />
      )
    } else {
      return (
        <Typography fontFamily="Mohave" textAlign={"center"}>
          NO UPCOMING EVENTS
        </Typography>
      )
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container justifyContent="flex-end" sx={{ padding: "1rem" }}>
          <Grid item>
            <Dates />
            <Clock />
          </Grid>
        </Grid>

        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          {/* LOGO */}
          <Grid item style={{ marginTop: "2%", marginBottom: "5%" }} sx={{padding: "1rem"}}>
            <Image data-testid='logo-at-landing-page' id="logo" src="/logo.png" width={"680%"} height={"145%"} />
          </Grid>

          {/* Buttons */}
          <Grid item>
            <Link href={`/create`}>
              <Button
                data-testid='create-event-button-at-landing-page'
                variant="contained"
                href="#contained-buttons"
                fullWidth={true}
              >
                Create an Event
              </Button>
            </Link>
          </Grid>
          <Grid item sx={{ padding: "0.5rem" }}>
            <Link href={`/event`}>
              <Button
                data-testid='see-events-button-at-landing-page'
                variant="contained"
                href="#contained-buttons"
                fullWidth={true}>
                See Events
              </Button>
            </Link>
          </Grid>

          {/* Upcoming Event Card */}
          <Grid item style={{ marginTop: "2%" }}>
            <hr style={{ color: "#784CF4", backgroundColor: "#784CF4" }} />
            <Typography
              fontFamily={"Mohave"}
              fontSize={"2.2rem"}
              style={{
                color: "#784CF4",
                fontWeight: "bold",
                justifyContent: "center",
              }}
            >
              UPCOMING EVENTS
            </Typography>
            <Grid item style={{ marginTop: "5%" }}>
              {showUpcomingEvent()}
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Home;
