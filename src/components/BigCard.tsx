import { Card, useMediaQuery, Box, Typography, Grid } from "@mui/material"
import IEvent from "../interfaces/models/event";
import IBigCardProps from "../interfaces/props/bigCardProps";
import BookCard from "./BookCard";



function BigCard({title, elements}: IBigCardProps) {
    const isXXS = useMediaQuery("(max-width:600px)");

    const elementCards = elements.map((event:IEvent, i:number) => (
        <Grid item key={i}>
            <BookCard
                eventDate={new Date(event.date).getDate()}
                eventTitle={event.title}
                hrefUrl={`event/${event._id}`}
                imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                imgAlt={event.title}
            />
        </Grid>
    ))

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
                    spacing={1}
                    justifyContent="space-around"
                    direction={{ xs: "column", sm: "row" }}
                >
                    {elementCards}
                </Grid>
            </Box>
        </Card>
    )
}

export default BigCard