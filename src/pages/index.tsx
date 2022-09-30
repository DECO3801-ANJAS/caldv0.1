import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { Typography } from '@mui/material';
import { Container } from '@mui/system';

const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

const Home: NextPage = () => {
  return (

    <Container>
      <Grid container justifyContent='flex-end'>
        <Grid item style={{marginTop:"2%"}}>
          <Typography>Brisbane, {date}</Typography>
        </Grid>
      </Grid>

        <Grid container direction="column" justifyContent="center" alignItems="center" spacing = {2}>

          <Grid item style={{marginTop: "10%", marginBottom:"5%"}}>
            <Image src="/logo.png" width={"850%"} height={"200%"} />
          </Grid>
          
          <Grid item>
            <Link href={`\create`}>
              <Button variant="contained" href="#contained-buttons">
                Create an Event 
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link href={`\event`}>
              <Button variant="contained" href="#contained-buttons">
                Create an Event 
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
  )
}

export default Home
