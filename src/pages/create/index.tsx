import type { NextPage } from 'next'
import * as React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import TextField from '@mui/material/TextField';
import Dropzone from '../../components/Dropzone';
import BasicDatePicker from '../../components/DateTimeInput';
import FreeSolo from '../../components/AutoComplete';
import Chip from '@mui/material/Chip';
import { withStyles } from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#784CF4"
    }
  },
});

const CssTextField = withStyles({
  root: {
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
  },
})(TextField);

const Create: NextPage = () => {
  const [hashtag, setHashtag] = React.useState("")
  const [arrayOfHashtags, addHashtag] = React.useState([]);

  const handleDelete = (h) => () => {
    addHashtag((arrayOfHashtags) =>
      arrayOfHashtags.filter((hashtag) => hashtag !== h)
    )
  }

  const newHashtag = () => {
    addHashtag((arrayOfHashtags) => arrayOfHashtags.concat(hashtag))
    console.log(arrayOfHashtags)
  } 

  const Hashtags = arrayOfHashtags.map((h) => (
    <Grid item xs={4} sm={2}>
      <Chip
        size="medium"
        label={h}
        onDelete={handleDelete(h)}
      />
    </Grid>
  ))

  return (
    <Container style={{marginTop:"5%", marginBottom:"5%"}}>
      <Grid container alignItems='center' justifyContent='space-between' style={{marginBottom:"5%"}}>
        <Grid item spacing={2}>
          <ArrowBackIosNewIcon/>
        </Grid>
        <Grid item spacing={2} direction="column">
          <Grid item>
            <Typography style={{fontSize:16, textAlign:"right", fontWeight:"600"}}>Create a</Typography>
          </Grid>
          <Grid item>
            <Typography style={{fontSize:20, textAlign:"right", fontWeight:"bold"}}>New Event</Typography>
          </Grid>
        </Grid>
      </Grid> 

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CssTextField label="Title" focused fullWidth/>
        </Grid>
        <Grid item xs={12}>
          <CssTextField label="Description" focused rows={5} multiline fullWidth/>
        </Grid> 
        <Grid item xs={12} sm={6}>
          <CssTextField label="Location" focused fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <BasicDatePicker/>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            {/* <Grid item xs={4} sm={2}>
              <Chip label="MASAK AIR BIAR MATENG" id="chip1" onDelete={handleDelete} style={{width:"100%"}} /> 
            </Grid>
            <Grid item xs={4} sm={2}>
              <Chip label="ABE GANTENG" onDelete={() => {}} style={{width:"100%"}} /> 
            </Grid>
            <Grid item xs={4} sm={2}>
              <Chip label="SYASYA CAKEP" onDelete={() => {}} style={{width:"100%"}} /> 
            </Grid>
            <Grid item xs={4} sm={2}>
              <Chip label="JO DERAS Spending" onDelete={() => {}} style={{width:"100%"}} /> 
            </Grid> */}
          {arrayOfHashtags.length > 0 ? Hashtags : ""}
          </Grid> 
        </Grid>
        <Grid item xs={9}>
          <FreeSolo value={hashtag} onChange={(e) => {setHashtag(e.target.value)}}/> 
        </Grid>
        <Grid item xs={3} style={{color:"#784CF4"}}>
          <AddCircleOutlineIcon fontSize="large" onClick={newHashtag}/>
        </Grid>
        <Grid item xs={12}>
          <CssTextField label="Recipe" focused fullWidth multiline rows={5}/>
        </Grid>
        <Grid item xs={12}>
          <Dropzone/>
        </Grid>
        <Grid item xs={12}>
        <ThemeProvider theme={theme}>
          <Button variant="contained" color='primary'>Contained</Button>
        </ThemeProvider>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Create
