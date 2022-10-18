import { Typography, Card, Box, useMediaQuery } from '@mui/material';
import IParticipantCardProps from '../interfaces/props/participantCardProps';


// Function to return card for participants used in TaskCard
// Input : 
//        name, string
//        experience, string
// return JSX element
export default function ParticipantCard({ name, experience }: IParticipantCardProps) {
    const isXXS = useMediaQuery("(max-width:600px)");

    const expColor = (experience: string) => {
        if (experience == 'beginner') {
            return "#BE2B83"
        } else if (experience == 'intermediate') {
            return "#4145A7"
        } else if (experience == 'expert') {
            return "#3E8733"
        } else {
            console.log(experience)
            return "black"
        }
    }
    return (
        <Card sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={isXXS ? { backgroundColor: "#E8E7EC", padding: "0.5rem", width: "100%" }
                : { backgroundColor: "#E8E7EC", padding: "0.5rem" }}>
                <Typography sx={{ textTransform: "uppercase", color: "#784CF4" }}>{!!name && name.length > 6 ? name.slice(0, 6) + "..." : name}</Typography>
            </Box>
            <Box sx={isXXS ? { backgroundColor: expColor(experience), padding: "0.5rem", width: "100%" }
                : { backgroundColor: expColor(experience), padding: "0.5rem" }}>
                <Typography sx={{ textTransform: "uppercase", color: "white" }}>{experience}</Typography>
            </Box>
        </Card>
    )
}