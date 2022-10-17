import type { NextPage } from "next";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import Clock from "../../../components/Clock";
import Dates from "../../../components/Date";

import "@fontsource/open-sans";
import "@fontsource/mohave";
import "@fontsource/montserrat";
import ArrowBack from "../../../components/ArrowBack";
import { useRouter } from "next/router";
import useSWR from "swr";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";

const current = new Date();
const date = `${current.getDate()}/${
  current.getMonth() + 1
}/${current.getFullYear()}`;

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

const EventDetailRecipe: NextPage = () => {
  const isXXS = useMediaQuery("(max-width:600px)");
  const router = useRouter();
  const { event_id } = router.query;
  const { data, error } = useSWR(
    router.isReady ? `/api/events/${event_id}` : null,
    fetcher,
    { refreshInterval: 10000 }
  );

    return (
        <>
            <ThemeProvider theme={theme}>
                <Grid container justifyContent='space-between' style={{ padding: "1rem" }}>
                    <Grid item xs={6}>
                        <ArrowBack href={`/event/${router.query.event_id}`} />
                    </Grid>
                    <Grid item xs={6} sx={{ textAlign: "right" }}>
                        <Dates />
                        <Clock />
                    </Grid>
                </Grid>

                <Grid container style={isXXS ? { marginBottom: "9rem" } : { marginBottom: "3rem" }}>
                    {!!data ? (
                        <>
                            <Grid item xs={12} style={{ padding: "1rem" }}>
                                <Typography fontFamily="Open Sans" component="h1" variant="h5" color={"#784CF4"}>Ingredients: </Typography>
                                <Typography fontFamily="Open Sans">
                                    {data.event.recipe.recipeIngredients.split('\n').map((str:string, i:number) => <p key={i}>{str}</p>)}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} style={{ padding: "1rem" }}>
                                <Typography fontFamily="Open Sans" component="h1" variant="h5" color={"#784CF4"}>Recipe: </Typography>
                                <Typography fontFamily="Open Sans">
                                    {data.event.recipe.recipeSteps.split('\n').map((str:string, i:number) => <p key={i}>{str}</p>)}
                                </Typography>
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

            </ThemeProvider>
        </>
    )
}

export default EventDetailRecipe
