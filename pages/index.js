import Head from 'next/head'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DSC Web-Lead Task</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/logo.png" type="image/gif" sizes="16x16"></link>
      </Head>

      <Navbar/>
      <main className={styles.main}>
        <Header/>
        <About/>
      </main>

      <footer className={styles.footer}>
        <Footer/>
      </footer>
    </div>
  )
}
