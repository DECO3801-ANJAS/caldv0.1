import type { NextPage } from 'next'
import Grid from '@mui/material/Grid';
import { Typography, Card, Box } from '@mui/material';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { useMediaQuery } from "@mui/material";
import { useRouter } from 'next/router';
import ArrowBack from '../../../components/ArrowBack';


const theme = createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      'Mohave',
      'sans-serif',
    ].join(',')
  },
  palette: {
    primary: {
      main: "#784CF4"
    }
  },
});

const Participants: NextPage = () => {
  const isXXS = useMediaQuery("(max-width:600px)");
  const router = useRouter()
  const { event_id } = router.query

  return (
    <>
    <ThemeProvider theme={theme}>
      <Grid container alignItems='center' justifyContent='space-between' style={{padding:"1rem"}}>
        <Grid item>
        <ArrowBack href={`/event/${event_id}`}/>
        </Grid>
        <Grid item>
          <Grid item>
            <Typography style={{fontSize:16, textAlign:"right", fontWeight:"600"}}>Participants</Typography>
          </Grid>
          <Grid item>
            <Typography textTransform="capitalize" style={{fontSize:20, textAlign:"right", fontWeight:"bold"}}>Bibimbap Tutorial</Typography>
          </Grid>
        </Grid>
      </Grid>
      
      <hr
        style={{
          background: '#784CF4',
          borderColor: '#784CF4',
          height: '1px',
        }}
      />

      <Grid container alignItems="center" justifyContent={{xs:"center", sm:"flex-start"}} sx={{padding:"1rem"}}>
        <Grid item>
          <Typography variant='h2' fontWeight={800} color="#784CF4">15</Typography>
        </Grid>
        <Grid item>
          <Grid container direction={"column"} sx={{padding:"1rem"}}>
          <Grid item>
            <Typography variant='h4' fontWeight={800} color="#784CF4">People</Typography>
          </Grid>
          <Grid item>
            <Typography variant='h4' fontWeight={800} color="#784CF4">Joining</Typography>
          </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={3} justifyContent="center" sx={{ padding: "1rem" }}>
        <Grid item xs={12} md={6}>
          <Card sx={isXXS ? { display: "flex", flexDirection:"column" } : { display: "flex" }}>
            <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "#784CF4", padding:"1rem" }}>
              <Typography sx={{ textTransform: "uppercase", color: "white" }}>prepping</Typography>
            </Box>
            <Box sx={{ padding: "0.5rem" }}>
              <Grid container spacing={1} justifyContent="space-around" direction={{xs:"column", sm:"row"}}>

                <Grid item>
                  <Card sx={{ display: "flex", alignItems: "center"}}>
                    <Box sx={isXXS ? {backgroundColor: "#E8E7EC", padding: "0.5rem", width:"100%"} 
                    : {backgroundColor: "#E8E7EC", padding: "0.5rem"}}>
                        <Typography sx={{ textTransform: "uppercase", color: "#784CF4"}}>johanes</Typography>
                    </Box>
                    <Box sx={isXXS ? {backgroundColor: "#4145A7", padding: "0.5rem", width:"100%"} 
                    : {backgroundColor: "#4145A7", padding: "0.5rem"}}>
                        <Typography sx={{ textTransform: "uppercase", color: "white" }}>intermediate</Typography>
                    </Box>
                  </Card>
                </Grid>

                <Grid item>
                  <Card sx={{ display: "flex", alignItems: "center"}}>
                    <Box sx={isXXS ? {backgroundColor: "#E8E7EC", padding: "0.5rem", width:"100%"} 
                    : {backgroundColor: "#E8E7EC", padding: "0.5rem"}}>
                        <Typography sx={{ textTransform: "uppercase", color: "#784CF4"}}>johanes</Typography>
                    </Box>
                    <Box sx={isXXS ? {backgroundColor: "#4145A7", padding: "0.5rem", width:"100%"} 
                    : {backgroundColor: "#4145A7", padding: "0.5rem"}}>
                        <Typography sx={{ textTransform: "uppercase", color: "white" }}>intermediate</Typography>
                    </Box>
                  </Card>
                </Grid>

                <Grid item>
                  <Card sx={{ display: "flex", alignItems: "center"}}>
                    <Box sx={isXXS ? {backgroundColor: "#E8E7EC", padding: "0.5rem", width:"100%"} 
                    : {backgroundColor: "#E8E7EC", padding: "0.5rem"}}>
                        <Typography sx={{ textTransform: "uppercase", color: "#784CF4"}}>johanes</Typography>
                    </Box>
                    <Box sx={isXXS ? {backgroundColor: "#4145A7", padding: "0.5rem", width:"100%"} 
                    : {backgroundColor: "#4145A7", padding: "0.5rem"}}>
                        <Typography sx={{ textTransform: "uppercase", color: "white" }}>intermediate</Typography>
                    </Box>
                  </Card>
                </Grid>

                <Grid item>
                  <Card sx={{ display: "flex", alignItems: "center"}}>
                    <Box sx={isXXS ? {backgroundColor: "#E8E7EC", padding: "0.5rem", width:"100%"} 
                    : {backgroundColor: "#E8E7EC", padding: "0.5rem"}}>
                        <Typography sx={{ textTransform: "uppercase", color: "#784CF4"}}>abe</Typography>
                    </Box>
                    <Box sx={isXXS ? {backgroundColor: "#3E8733", padding: "0.5rem", width:"100%"} 
                    : {backgroundColor: "#3E8733", padding: "0.5rem"}}>
                        <Typography sx={{ textTransform: "uppercase", color: "white" }}>expert</Typography>
                    </Box>
                  </Card>
                </Grid>

                <Grid item>
                  <Card sx={{ display: "flex", alignItems: "center"}}>
                    <Box sx={isXXS ? {backgroundColor: "#E8E7EC", padding: "0.5rem", width:"100%"} 
                    : {backgroundColor: "#E8E7EC", padding: "0.5rem"}}>
                        <Typography sx={{ textTransform: "uppercase", color: "#784CF4"}}>syasya</Typography>
                    </Box>
                    <Box sx={isXXS ? {backgroundColor: "#BE2B83", padding: "0.5rem", width:"100%"} 
                    : {backgroundColor: "#BE2B83", padding: "0.5rem"}}>
                        <Typography sx={{ textTransform: "uppercase", color: "white" }}>beginner</Typography>
                    </Box>
                  </Card>
                </Grid>

              </Grid>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={isXXS ? { display: "flex", flexDirection:"column" } : { display: "flex" }}>
            <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "#784CF4", padding:"1rem" }}>
              <Typography sx={{ textTransform: "uppercase", color: "white" }}>prepping</Typography>
            </Box>
            <Box sx={{ padding: "0.5rem" }}>
              <Grid container spacing={1} justifyContent="space-around" direction={{xs:"column", sm:"row"}}>

                <Grid item>
                  <Card sx={{ display: "flex", alignItems: "center"}}>
                    <Box sx={isXXS ? {backgroundColor: "#E8E7EC", padding: "0.5rem", width:"100%"} 
                    : {backgroundColor: "#E8E7EC", padding: "0.5rem"}}>
                        <Typography sx={{ textTransform: "uppercase", color: "#784CF4"}}>johanes</Typography>
                    </Box>
                    <Box sx={isXXS ? {backgroundColor: "#4145A7", padding: "0.5rem", width:"100%"} 
                    : {backgroundColor: "#4145A7", padding: "0.5rem"}}>
                        <Typography sx={{ textTransform: "uppercase", color: "white" }}>intermediate</Typography>
                    </Box>
                  </Card>
                </Grid>

                <Grid item>
                  <Card sx={{ display: "flex", alignItems: "center"}}>
                    <Box sx={isXXS ? {backgroundColor: "#E8E7EC", padding: "0.5rem", width:"100%"} 
                    : {backgroundColor: "#E8E7EC", padding: "0.5rem"}}>
                        <Typography sx={{ textTransform: "uppercase", color: "#784CF4"}}>johanes</Typography>
                    </Box>
                    <Box sx={isXXS ? {backgroundColor: "#4145A7", padding: "0.5rem", width:"100%"} 
                    : {backgroundColor: "#4145A7", padding: "0.5rem"}}>
                        <Typography sx={{ textTransform: "uppercase", color: "white" }}>intermediate</Typography>
                    </Box>
                  </Card>
                </Grid>

                <Grid item>
                  <Card sx={{ display: "flex", alignItems: "center"}}>
                    <Box sx={isXXS ? {backgroundColor: "#E8E7EC", padding: "0.5rem", width:"100%"} 
                    : {backgroundColor: "#E8E7EC", padding: "0.5rem"}}>
                        <Typography sx={{ textTransform: "uppercase", color: "#784CF4"}}>johanes</Typography>
                    </Box>
                    <Box sx={isXXS ? {backgroundColor: "#4145A7", padding: "0.5rem", width:"100%"} 
                    : {backgroundColor: "#4145A7", padding: "0.5rem"}}>
                        <Typography sx={{ textTransform: "uppercase", color: "white" }}>intermediate</Typography>
                    </Box>
                  </Card>
                </Grid>

                <Grid item>
                  <Card sx={{ display: "flex", alignItems: "center"}}>
                    <Box sx={isXXS ? {backgroundColor: "#E8E7EC", padding: "0.5rem", width:"100%"} 
                    : {backgroundColor: "#E8E7EC", padding: "0.5rem"}}>
                        <Typography sx={{ textTransform: "uppercase", color: "#784CF4"}}>abe</Typography>
                    </Box>
                    <Box sx={isXXS ? {backgroundColor: "#3E8733", padding: "0.5rem", width:"100%"} 
                    : {backgroundColor: "#3E8733", padding: "0.5rem"}}>
                        <Typography sx={{ textTransform: "uppercase", color: "white" }}>expert</Typography>
                    </Box>
                  </Card>
                </Grid>

                <Grid item>
                  <Card sx={{ display: "flex", alignItems: "center"}}>
                    <Box sx={isXXS ? {backgroundColor: "#E8E7EC", padding: "0.5rem", width:"100%"} 
                    : {backgroundColor: "#E8E7EC", padding: "0.5rem"}}>
                        <Typography sx={{ textTransform: "uppercase", color: "#784CF4"}}>syasya</Typography>
                    </Box>
                    <Box sx={isXXS ? {backgroundColor: "#BE2B83", padding: "0.5rem", width:"100%"} 
                    : {backgroundColor: "#BE2B83", padding: "0.5rem"}}>
                        <Typography sx={{ textTransform: "uppercase", color: "white" }}>beginner</Typography>
                    </Box>
                  </Card>
                </Grid>

              </Grid>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={isXXS ? { display: "flex", flexDirection:"column" } : { display: "flex" }}>
            <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "#784CF4", padding:"1rem" }}>
              <Typography sx={{ textTransform: "uppercase", color: "white" }}>prepping</Typography>
            </Box>
            <Box sx={{ padding: "0.5rem" }}>
              <Grid container spacing={1} justifyContent="space-around" direction={{xs:"column", sm:"row"}}>

                <Grid item>
                  <Card sx={{ display: "flex", alignItems: "center"}}>
                    <Box sx={isXXS ? {backgroundColor: "#E8E7EC", padding: "0.5rem", width:"100%"} 
                    : {backgroundColor: "#E8E7EC", padding: "0.5rem"}}>
                        <Typography sx={{ textTransform: "uppercase", color: "#784CF4"}}>johanes</Typography>
                    </Box>
                    <Box sx={isXXS ? {backgroundColor: "#4145A7", padding: "0.5rem", width:"100%"} 
                    : {backgroundColor: "#4145A7", padding: "0.5rem"}}>
                        <Typography sx={{ textTransform: "uppercase", color: "white" }}>intermediate</Typography>
                    </Box>
                  </Card>
                </Grid>

                <Grid item>
                  <Card sx={{ display: "flex", alignItems: "center"}}>
                    <Box sx={isXXS ? {backgroundColor: "#E8E7EC", padding: "0.5rem", width:"100%"} 
                    : {backgroundColor: "#E8E7EC", padding: "0.5rem"}}>
                        <Typography sx={{ textTransform: "uppercase", color: "#784CF4"}}>johanes</Typography>
                    </Box>
                    <Box sx={isXXS ? {backgroundColor: "#4145A7", padding: "0.5rem", width:"100%"} 
                    : {backgroundColor: "#4145A7", padding: "0.5rem"}}>
                        <Typography sx={{ textTransform: "uppercase", color: "white" }}>intermediate</Typography>
                    </Box>
                  </Card>
                </Grid>

                <Grid item>
                  <Card sx={{ display: "flex", alignItems: "center"}}>
                    <Box sx={isXXS ? {backgroundColor: "#E8E7EC", padding: "0.5rem", width:"100%"} 
                    : {backgroundColor: "#E8E7EC", padding: "0.5rem"}}>
                        <Typography sx={{ textTransform: "uppercase", color: "#784CF4"}}>johanes</Typography>
                    </Box>
                    <Box sx={isXXS ? {backgroundColor: "#4145A7", padding: "0.5rem", width:"100%"} 
                    : {backgroundColor: "#4145A7", padding: "0.5rem"}}>
                        <Typography sx={{ textTransform: "uppercase", color: "white" }}>intermediate</Typography>
                    </Box>
                  </Card>
                </Grid>

                <Grid item>
                  <Card sx={{ display: "flex", alignItems: "center"}}>
                    <Box sx={isXXS ? {backgroundColor: "#E8E7EC", padding: "0.5rem", width:"100%"} 
                    : {backgroundColor: "#E8E7EC", padding: "0.5rem"}}>
                        <Typography sx={{ textTransform: "uppercase", color: "#784CF4"}}>abe</Typography>
                    </Box>
                    <Box sx={isXXS ? {backgroundColor: "#3E8733", padding: "0.5rem", width:"100%"} 
                    : {backgroundColor: "#3E8733", padding: "0.5rem"}}>
                        <Typography sx={{ textTransform: "uppercase", color: "white" }}>expert</Typography>
                    </Box>
                  </Card>
                </Grid>

                <Grid item>
                  <Card sx={{ display: "flex", alignItems: "center"}}>
                    <Box sx={isXXS ? {backgroundColor: "#E8E7EC", padding: "0.5rem", width:"100%"} 
                    : {backgroundColor: "#E8E7EC", padding: "0.5rem"}}>
                        <Typography sx={{ textTransform: "uppercase", color: "#784CF4"}}>syasya</Typography>
                    </Box>
                    <Box sx={isXXS ? {backgroundColor: "#BE2B83", padding: "0.5rem", width:"100%"} 
                    : {backgroundColor: "#BE2B83", padding: "0.5rem"}}>
                        <Typography sx={{ textTransform: "uppercase", color: "white" }}>beginner</Typography>
                    </Box>
                  </Card>
                </Grid>

              </Grid>
            </Box>
          </Card>
        </Grid>
      </Grid>
      </ThemeProvider>
    </>
  )
}

export default Participants
