import type { NextPage } from "next";
import Grid from "@mui/material/Grid";
import { Typography, Button, CircularProgress } from "@mui/material";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import ArrowBack from "../../../components/ArrowBack";

import "@fontsource/open-sans";
import "@fontsource/mohave";
import "@fontsource/montserrat";
import useSWR from "swr";
import { useEffect, useState } from "react";
import IParticipant from "../../../interfaces/models/participant";
import IParticipantData from "../../../interfaces/data/participantData";
import TaskCard from "../../../components/TaskCard";
import Link from "next/link";

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

const Participants: NextPage = () => {
  const isXXS = useMediaQuery("(max-width:600px)");
  const router = useRouter();
  const { event_id } = router.query;
  const { data, error } = useSWR(
    router.isReady ? `/api/events/${event_id}/participants` : null,
    fetcher,
    { refreshInterval: 10000 }
  );

  const eventData = useSWR(
    router.isReady ? `/api/events/${event_id}` : null,
    fetcher,
    { refreshInterval: 10000 }
  );

  const [participantData, setParticipantData] = useState<IParticipantData>();

  const taskCards = () => {
    return (
      participantData &&
      Object.keys(participantData).map((task: string) => (
        <Grid item xs={12} key={task} sx={{ padding: "1rem" }}>
          <TaskCard title={task} elements={participantData[task]} />
        </Grid>
      ))
    );
  };

  const showCards = () => {
    if (!!data && data.participants.length !== 0) {
      return taskCards()
    } else if (!!data && data.participants.length == 0) {
      return (
        <Grid item xs={12}>
          <Grid container justifyContent={"center"}>
            <Grid item xs={12}>
              <Grid container justifyContent={"center"}>
                <Typography>No One Joined Yet</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container justifyContent={"center"}>
                <Link href={`/event/${router.query.event_id}/join`}>
                  <Button variant="contained" fullWidth={isXXS} color="primary">Join</Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )
    } else {
      return (
        <Grid item xs={12}>
          <Grid container justifyContent={"center"}>
            <CircularProgress />
          </Grid>
        </Grid>
      )
    }
  }

  useEffect(() => {
    let currentData : IParticipantData = {};
    if (!!data && data.participants.length !== 0) {
      data.participants.forEach((participant: IParticipant, i: number) => {
        const task = participant.task;
        if (task in currentData) {
          const test = Object.keys(currentData).filter(
            (index) => index === task
          )[0];
          currentData = {
            ...currentData,
            [task]: [...currentData[test], participant],
          };
        } else {
          currentData = { ...currentData, [task]: [participant] };
        }
      });
    }
    setParticipantData(currentData);
  }, [data]);

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
            <ArrowBack href={`/event/${router.query.event_id}`} />
          </Grid>
          <Grid item>
            <Grid item>
              <Typography
                style={{ fontSize: 16, textAlign: "right", fontWeight: "600" }}
              >
                Participants
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                textTransform="capitalize"
                style={{ fontSize: 20, textAlign: "right", fontWeight: "bold" }}
              >
                {!!eventData.data ? eventData.data.event.title : ""}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <hr
          style={{
            background: "#784CF4",
            borderColor: "#784CF4",
            height: "1px",
          }}
        />

        <Grid
          container
          alignItems="center"
          justifyContent={{ xs: "center", sm: "flex-start" }}
          sx={{ padding: "1rem" }}
        >
          {!!data ? (
            <>
              <Grid item>
                <Typography variant="h2" fontWeight={800} color="#784CF4">
                  {data.participants.length}
                </Typography>
              </Grid>
              <Grid item>
                <Grid container direction={"column"} sx={{ padding: "1rem" }}>
                  <Grid item>
                    <Typography variant="h4" fontWeight={800} color="#784CF4">
                      People
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h4" fontWeight={800} color="#784CF4">
                      Joining
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </>
          ) : (
            <></>
          )}
        </Grid>

        <Grid
          container
          justifyContent="center"
          sx={{ padding: "1rem" }}
        >
          {showCards()}
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Participants;
