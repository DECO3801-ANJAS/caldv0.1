import type { NextPage } from 'next'
import styles from '../../styles/Home.module.css'

const AllEvents: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Upcoming Events
        </h1>


        {/* <div className={styles.grid}>
          
        </div> */}
      </main>

      <footer className={styles.footer}>
        {/* <p>This is the footer</p> */}
      </footer>
    </div>
  )
}

export default AllEvents
