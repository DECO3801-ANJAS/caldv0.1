import type { NextPage } from 'next'
import * as React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowBack from '../../../components/ArrowBack';
import TextField from '@mui/material/TextField';
import FreeSolo from '../../../components/AutoComplete';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useMediaQuery } from "@mui/material";
import { useRouter } from 'next/router';

const theme = createTheme({
  palette: {
    primary: {
      main: "#784CF4"
    }
  },
});

const useStyles = makeStyles(() => ({
  icon: {
    fill: "#784CF4"
  }
}));

const textTheme = createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      'Mohave',
      'sans-serif',
    ].join(','),
    body1: {
      fontWeight: 750,
      fontSize: "200%"
    },
  },
});

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: "#784CF4",
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: "#784CF4",
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: "#784CF4",
      },
      '&:hover fieldset': {
        borderColor: "#784CF4",
      },
      '&.Mui-focused fieldset': {
        borderColor: "#784CF4",
      },
    },
});

const CssSelect = styled(Select)(() => ({
    '& label.Mui-focused': {
      color: "#784CF4",
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: "#784CF4",
    },
  "&.MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#784CF4"
    },
    "&:hover fieldset": {
      borderColor: "#784CF4"
    },
    "&.Mui-focused fieldset": {
      borderColor: "#784CF4"
    }
  }
}));

const Join: NextPage = () => {

  const isXXS = useMediaQuery("(max-width:600px)");

  const router = useRouter();

  const classes = useStyles();
  
  const [taskInputValue, setTaskInputValue] = React.useState('');

  const [joinDetails, setJoinDetails] = React.useState({
    name: "",
    task: taskInputValue,
    experience: ""
  })

  const handleChangeEvent = (e : React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const name = e.target.name
    setJoinDetails((prev) => ({
        ...prev,
        [name]: value,
    }));
  }

  const handleExperienceChange = (event: SelectChangeEvent<unknown>) => {
    setJoinDetails({...joinDetails,
      experience: event.target.value as string});
  };

  const handleSubmit = () => {
    // TODO: Implement submission here
    console.log({
      ...joinDetails,
      task: taskInputValue
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container alignItems='center' justifyContent='space-between' style={{padding:"1rem"}}>
        <Grid item>
          <ArrowBack href={`/event/${router.query.event_id}`}/>
        </Grid>
        <Grid item>
          <Grid item>
            <Typography style={{fontSize:16, textAlign:"right", fontWeight:"600"}}>Join</Typography>
          </Grid>
          <Grid item>
            <Typography style={{fontSize:20, textAlign:"right", fontWeight:"bold"}}>An Event</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2}  justifyContent="center" style={{padding:"1rem"}}>
        <Grid item xs={3} style={isXXS ? {marginTop: "2%", marginBottom:"5%", display:"none"} : {marginTop: "2%", marginBottom:"5%"}}>
          <ThemeProvider theme={textTheme}>
            <Typography fontFamily='sans-serif'>
              NAME
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid item sm={7} xs={12} style={{marginTop: "2%", marginBottom:"5%"}}>
          <CssTextField name="name" label="Name" onChange={handleChangeEvent} focused fullWidth/>
        </Grid>
        <Grid item xs={3}  style = {isXXS ? {marginTop: "2%", marginBottom:"5%", display:"none"} : {marginTop: "2%", marginBottom:"5%"}}>
          <ThemeProvider theme={textTheme}>
            <Typography fontFamily='sans-serif'>
              PICK A TASK
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid item sm={7} xs={12} style={{marginTop: "2%", marginBottom:"5%"}}>
        <FreeSolo 
            inputValue={taskInputValue}
            setInputValue={setTaskInputValue}
            /> 
        </Grid>
        <Grid item xs={3} style = {isXXS ? {marginTop: "2%", marginBottom:"5%", display:"none"} : {marginTop: "2%", marginBottom:"5%"}}>
          <ThemeProvider theme={textTheme}>
            <Typography fontFamily='sans-serif'>
              EXPERIENCE
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid item sm={7} xs={12} style={{marginTop: "2%", marginBottom:"5%"}}>
          <FormControl fullWidth focused>
            <InputLabel id="demo-simple-select-label" shrink={true}>Choose your experience level</InputLabel>
            <CssSelect
            notched={true}
            labelId="demo-simple-select-label"
            inputProps={{
              classes: {
                icon: classes.icon
              }
            }}
            value={joinDetails.experience}
            label="Choose your experience level"
            onChange={handleExperienceChange}
            >
              <MenuItem value={"beginner"}>Beginner</MenuItem>
              <MenuItem value={"intermediate"}>Intermediate</MenuItem>
              <MenuItem value={"expert"}>Expert</MenuItem>
            </CssSelect>
          </FormControl>
        </Grid>
        <Grid item sm={7} xs={10} textAlign={isXXS ? "center" : "right"}>
          <Button variant="outlined" sx={{ borderColor: "red" }} style={{color:"#FF0000", backgroundColor:"#FFFFFF", marginRight:"3%"}} onClick={handleSubmit}><b>Cancel</b></Button>
          <Button variant="contained" color='success' onClick={handleSubmit}>Submit</Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Join

