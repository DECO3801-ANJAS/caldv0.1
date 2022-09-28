import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../../../styles/Home.module.css'

const EventDetail: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Event Title
        </h1>

        <p className={styles.description}>
          Event Description
        </p>


        {/* <div className={styles.grid}>
          
        </div> */}
      </main>

      <footer className={styles.footer}>
        {/* <p>This is the footer</p> */}
      </footer>
    </div>
  )
}

export default EventDetail
