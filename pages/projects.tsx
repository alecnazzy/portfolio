import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'
import project from '../styles/Projects.module.css'
import footer from '../styles/Footer.module.css'

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

            {/* Boba theme project */}
            <div className={project.text}>
              <h1>Boba theme for VSCode</h1>
              <p>A little theme I cooked up, inspired by the pastel colors common with
                 boba(bubble) tea that are easier for the eyes to digest.</p>
                <h3>
                <Link href="https://github.com/alecnazzy/boba-theme" target="_blank">
                  GitHub repository
                </Link>
              </h3>
            </div>
            <div>
              <Image
                    src={"/html-boba.png"}
                    alt="JS example"
                    width={500}
                    height={350}
                    objectFit="contain"
                  />
            </div>
            
          {/* Website portfolio project */}

            <div className={project.text}>
              <h1>This Website</h1>
              <p>I created this site with TypeScript, Next.js, and deployed
                to the web using Vercel.</p>
              <h3>
              <Link href="https://github.com/alecnazzy/portfolio" target="_blank">
                  GitHub repository
                </Link>
              </h3>
            </div>  

        </main>

        <Footer />

    </div>
    )
}