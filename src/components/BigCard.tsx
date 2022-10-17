import { Card, useMediaQuery, Box, Typography, Grid } from "@mui/material";
import IEvent from "../interfaces/models/event";
import IBigCardProps from "../interfaces/props/bigCardProps";
import BookCard from "./BookCard";

function BigCard({ title, elements }: IBigCardProps) {
  const isXXS = useMediaQuery("(max-width:600px)");
  const isSM = useMediaQuery("(max-width:900px)");

  const elementCards = elements.map((event: IEvent, i: number) => {
    return (
      <Grid item key={i} sx={{ padding: "0.5rem" }}>
        <BookCard
          eventDate={new Date(event.date).getDate()}
          eventTitle={event.title}
          hrefUrl={`event/${event._id}`}
          imageUrl={(event.images?.length !== 0) ? event.images![0] : "https://via.placeholder.com/150?text=No_Image"}
          imgAlt={event.title}
        />
      </Grid>
    )
  });

  return (
    <Card
      sx={
        isXXS
          ? { display: "flex", flexDirection: "column" }
          : { display: "flex" }
      }
    >
      <Box
        justifyContent="center"
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#784CF4",
          padding: "1rem",
        }}
      >
        <Typography
          variant="h4"
          fontFamily="Mohave"
          sx={{
            textTransform: "uppercase",
            color: "white",
            fontWeight: 700,
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box sx={{ padding: "0.5rem" }}>
        <Grid
          container
          justifyContent={isSM ? "center" : "flex-start"}
          direction={{ xs: "column", sm: "row" }}
        >
          {elementCards}
        </Grid>
      </Box>
    </Card>
  );
}

export default BigCard;
