import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import project from '../styles/Projects.module.css'
import home from '../styles/Home.module.css'
import Project from '../components/Projects'
import Image from 'next/image'
import InProgress from '../components/InProgress'

export default function Projects() {
    return (
    <div className={home.container}>
      <Head>
        <title>alecnazzy | Projects</title>
        <meta name="description" content="Projects route" />
        <link rel="icon" href="/icons8-neo-48.png" />
      </Head>

      <main className={home.main}>

          <Navbar />

          <Project />

          <InProgress />

          <Footer />
      </main>

        

    </div>
    )
}