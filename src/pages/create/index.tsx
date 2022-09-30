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

const Create: NextPage = () => {

  return (
    <Container style={{paddingTop:"5%"}}>
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
          <TextField
            color="secondary" 
            focused
            id="title"
            label="Title"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            color="secondary"
            focused
            id="description"
            label="Description"
            multiline
            fullWidth
            rows={4}
            defaultValue=""
          /> 
        </Grid> 
        <Grid item xs={12} sm={6}>
          <TextField
            color="secondary"
            focused
            id="location"
            label="Location"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <BasicDatePicker/>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={4} sm={2}>
              <Chip label="MASAK AIR BIAR MATENG" onDelete={() => {}} style={{width:"100%"}} /> 
            </Grid>
            <Grid item xs={4} sm={2}>
              <Chip label="ABE GANTENG" onDelete={() => {}} style={{width:"100%"}} /> 
            </Grid>
            <Grid item xs={4} sm={2}>
              <Chip label="SYASYA CAKEP" onDelete={() => {}} style={{width:"100%"}} /> 
            </Grid>
            <Grid item xs={4} sm={2}>
              <Chip label="JO DERAS" onDelete={() => {}} style={{width:"100%"}} /> 
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <FreeSolo/> 
        </Grid>
        <Grid item xs={12}>
          <TextField
            color="secondary"
            focused
            id="recipe"
            label="Recipe"
            multiline
            fullWidth
            rows={4}
            defaultValue=""
          />    
        </Grid>
        <Grid item xs={12}>
          <Dropzone/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Create
