import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Student Accommodation
        </h1>

        <p className={styles.description}>
          Weekly Cooking Events
        </p>

        <Grid container direction="column" justifyContent="center" alignItems="center" spacing = {2}>
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
                See Events 
              </Button>
            </Link>
          </Grid>
        </Grid>

        {/* <div className={styles.grid}>
          
        </div> */}
      </main>

      <footer className={styles.footer}>
        {/* <p>This is the footer</p> */}
      </footer>
    </div>
  )
}

export default Home
