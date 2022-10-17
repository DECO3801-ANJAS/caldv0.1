import type { NextPage } from "next";
import Link from "next/link";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
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

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const { data, error } = useSWR("api/events", fetcher, {
    refreshInterval: 30000,
  });

  const upcomingEvent =
    !!data && data.events.length !== 0
      ? data.events.reduce((a: IEvent, b: IEvent) => (a.date < b.date ? a : b))
      : {};

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
          <Grid item style={{ marginTop: "2%", marginBottom: "5%" }} sx={{ padding: "1rem" }}>
            <Image src="/logo.png" width={"680%"} height={"145%"} />
          </Grid>

          <Grid item sx={{ padding: "0.5rem" }}>
            <Link href={`/create`}>
              <Button
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
                variant="contained"
                href="#contained-buttons"
                fullWidth={true}>
                See Events
              </Button>
            </Link>
          </Grid>

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
              {!!upcomingEvent && Object.keys(upcomingEvent).length !== 0 ? (
                <BookCard
                  eventDate={new Date(upcomingEvent.date).getDate()}
                  eventTitle={upcomingEvent.title}
                  hrefUrl={`event/${upcomingEvent._id}`}
                  imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                  imgAlt={upcomingEvent.title}
                />
              ) : (
                <Typography fontFamily="Mohave" textAlign={"center"}>
                  NO UPCOMING EVENTS
                </Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Home;
