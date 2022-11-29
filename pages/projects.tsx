import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import project from '../styles/Projects.module.css'
import footer from '../styles/Footer.module.css'
import Project from '../components/Projects'

export default function Projects() {
    return (
    <div className={project.container}>
      <Head>
        <title>Alec Nazworth</title>
        <meta name="description" content="Projects route" />
        <link rel="icon" href="/icons8-neo-48.png" />
      </Head>

        <main className={project.main}>

        <Navbar />

            {/* Title */}

            <h1 className={project.title}>Projects</h1>

            <Project />

        </main>

        <Footer />

    </div>
    )
}