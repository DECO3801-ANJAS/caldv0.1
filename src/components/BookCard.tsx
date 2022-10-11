import { ThemeProvider } from "@emotion/react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  createTheme,
} from "@mui/material";
import React from "react";
import IBookCardProps from "../interfaces/props/bookCardProps";

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

function BookCard(props: IBookCardProps) {
  const { hrefUrl, imageUrl, imgAlt, eventDate, eventTitle } = props;
  const isXXS = useMediaQuery("(max-width:600px)");
  return (
    <>
      <ThemeProvider theme={theme}>
        <Card>
          <Link href={hrefUrl} style={{ textDecoration: "none" }}>
            <CardActionArea sx={{ display: "flex", alignItems: "center" }}>
              <CardMedia
                component="img"
                sx={{ width: 100, height: 100 }}
                image={imageUrl}
                alt={imgAlt}
              />
              <Grid container direction={"column"} sx={{ padding: "0.5rem" }}>
                <Grid item>
                  <Typography
                    fontFamily="Montserrat"
                    component="div"
                    variant="h5"
                    textAlign="right"
                    fontWeight={900}
                  >
                    {eventDate}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    fontFamily="Open Sans"
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    noWrap
                    sx={isXXS ? { width: "13rem" } : { width: "10rem" }}
                  >
                    {eventTitle}
                  </Typography>
                </Grid>
              </Grid>
            </CardActionArea>
          </Link>
        </Card>
      </ThemeProvider>
    </>
  );
}

export default BookCard;
