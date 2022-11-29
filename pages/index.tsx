import Head from 'next/head'
import Image from 'next/image'
import home from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={home.container}>
      <Head>
        <title>Alec Nazworth</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Alec Nazworth's personal website" />
        <link rel="icon" href="/icons8-neo-48.png" />
      </Head>

      <main className={home.main}>

        <Navbar />

        {/* Title and Profile pic */}

        <h1 className={home.title}>
          Alec Nazworth
        </h1>
        <div>
        <Image
            className={home.profile_pic}
            src="/handsome-sob.jpg"
            alt="ME"
            width={150}
            height={150}
          />
        </div>
          
        {/* About me */}
        
        <div className={home.text}>
          <p>I enjoy making
          cool things for the internet, [insert streaming service here] and chill, and using expensive software 
          like Adobe Creative Suite for my other hobbies.</p>
        
          <p>I am a student at Florida International University, majoring in computer science. During college I hope to find an (<small>paid🤞</small>) internship to increase my skills in web development 
          and pay rent.</p>

          <p>I have mostly worked with JavaScript and TypeScript. Other technologies I use include 
             React, Next.js, PostgreSQL, along with a little Java.</p>

          <h2><a href="\alec-nazworth-resume.pdf" download>Resume</a></h2>
        </div>
        
        {/* Contact Me section */}
        
        <h1 className={home.title}>Contact Me</h1>

          <div className={home.logo_display}>
            <h2 className={home.contact}>
                <Link href="https://github.com/alecnazzy" target="_blank">
                  <Image
                  className={home.logo}
                  src="/github-logo.png"
                  alt="GitHub logo"
                  width={70}
                  height={70}
                  />
                </Link>
            </h2>
          
            <h2 className={home.contact}>
                <Link href="https://www.linkedin.com/in/alec-nazworth-3ab6b4237/" target="_blank">
                  <Image
                  className={home.logo}
                  src="/linkedin-logo.png"
                  alt="LinkedIn logo"
                  width={70}
                  height={70}
                  />
                </Link>
            </h2>   

            <h2 className={home.contact}>
                <Link href="https://www.instagram.com/alec.nazworth" target="_blank">
                  <Image
                  className={home.logo}
                  src="/instagram-logo.png"
                  alt="Instagram logo"
                  width={70}
                  height={70}
                  />
                </Link>
            </h2>   

            <h2 className={home.contact}>
                <Link href="mailto:alecnazworthalt@gmail.com" target="_blank">
                  <Image
                  className={home.logo}
                  src="/gmail-logo.png"
                  alt="Gmail logo"
                  width={70}
                  height={70}
                  />
                </Link>
            </h2>
        </div>
      </main>

      <Footer />

    </div>
  )
}
