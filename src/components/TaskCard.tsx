import Grid from '@mui/material/Grid';
import { Typography, Card, Box, useMediaQuery } from '@mui/material';
import ITaskCardProps from '../interfaces/props/taskCardProps';
import IParticipant from '../interfaces/models/participant';
import ParticipantCard from './ParticipantCard';

// Function to return card to show participants in participants page
// Input : 
//        title, string
//        elements, list of objects
// return JSX element
export default function TaskCard({ title, elements }: ITaskCardProps) {

    const isXXS = useMediaQuery("(max-width:600px)");
    const isSM = useMediaQuery("(max-width:900px)");

    const elementCards = elements.map((participant: IParticipant, i: number) => (
        <Grid item key={i} sx={{ padding: "0.5rem" }}>
            <ParticipantCard
                name={participant.name}
                experience={participant.experience}
            />
        </Grid>
    ))

    return (
        <Card sx={isXXS ? { display: "flex", flexDirection: "column" } : { display: "flex" }}>
            <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "#784CF4", padding: "1rem" }}>
                <Typography sx={{ textTransform: "uppercase", color: "white" }}>{title}</Typography>
            </Box>
            <Box sx={{ padding: "0.5rem" }}>
                <Grid container
                    direction={{ xs: "column", sm: "row" }}>

                    {elementCards}

                </Grid>
            </Box>
        </Card>
    )
}