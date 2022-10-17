import type { NextPage } from "next";
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import CircularProgress from "@mui/material/CircularProgress";
import Clock from "../../components/Clock";
import Dates from "../../components/Date";
import useSWR from "swr";

import "@fontsource/open-sans";
import "@fontsource/mohave";
import "@fontsource/montserrat";
import ArrowBack from "../../components/ArrowBack";
import IEvent from "../../interfaces/models/event";
import IEventData from "../../interfaces/data/eventData";
import BigCard from "../../components/BigCard";
import dayjs from "dayjs";

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

const AllEvents: NextPage = () => {
  // Get events data from api/events route
  const { data, error } = useSWR("api/events", fetcher, {
    refreshInterval: 30000,
  });

  const [eventData, setEventData] = React.useState<IEventData>();

  // Sort the data based on month
  useEffect(() => {
    let currentData : IEventData = {};
    if (!!data && data.events.length !== 0) {
      data.events.forEach((event: IEvent, i: number) => {
        const date = new Date(event.date);
        const month = date.toLocaleString("default", { month: "short" });
        if (month in currentData) {
          const test = Object.keys(currentData).filter(
            (index) => index === month
          )[0];
          currentData = {
            ...currentData,
            [month]: [...currentData[test], event],
          };
        } else {
          currentData = { ...currentData, [month]: [event] };
        }
      });

      setEventData({ ...currentData });
    }
  }, [data]);

  // Function to create cards for displaying
  const bigCards = () => {
    return (
      eventData &&
      Object.keys(eventData).map((month: string) => (
        <Grid item xs={12} key={month} sx={{ padding: "1rem" }}>
          <BigCard title={month} elements={eventData[month]} />
        </Grid>
      ))
    );
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          style={{ padding: "1rem" }}
        >
          <Grid item>
            <ArrowBack href={"/"} />
          </Grid>
          <Grid item>
            <Grid item>
              <Typography
                fontFamily="Open Sans"
                style={{ fontSize: 16, textAlign: "right", fontWeight: "600" }}
              >
                Upcoming
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                fontFamily="Open Sans"
                style={{ fontSize: 20, textAlign: "right", fontWeight: "bold" }}
              >
                Events
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          style={{ backgroundColor: "#784CF4E0", color: "white" }}
        >
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Dates />
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Clock />
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="center"
          sx={{ padding: "1rem" }}
        >
          {!!data && data.events.length !== 0 ? (
            // Show cards if data is not null and length > 0
            bigCards()
          ) : (
            // Else show loading bar
            <Grid item xs={12}>
              <Grid container justifyContent={"center"}>
                <CircularProgress />
              </Grid>
            </Grid>
          )}
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default AllEvents;
