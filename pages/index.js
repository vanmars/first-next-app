import Link from 'next/link'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate necessitatibus incidunt ut provident deserunt? Dolore maxime alias magnam voluptas, obcaecati quisquam, molestiae magni placeat dicta illo id, iste modi officia!</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate necessitatibus incidunt ut provident deserunt? Dolore maxime alias magnam voluptas, obcaecati quisquam, molestiae magni placeat dicta illo id, iste modi officia!</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}