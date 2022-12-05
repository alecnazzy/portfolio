import Head from 'next/head'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import Contact from '../components/Contact'
import Project from '../components/Projects'
import Footer from '../components/Footer'
import home from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={home.container}>
      <Head>
        <title>alecnazzy | Home</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Alec Nazworth's personal website" />
        <link rel="icon" href="/icons8-neo-48.png" />
      </Head>

      <main className={home.main}>

        <Navbar />

        <Profile />
        
        <Contact />

        {/* <Project /> */}

        <Footer />
      </main>

      

    </div>
  )
}