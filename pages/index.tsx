import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alec Nazworth</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Alec Nazworth's personal website" />
        <link rel="icon" href="/icons8-neo-48.png" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <h1 className={styles.title}>
          Alec Nazworth
        </h1>
        <div className={styles.text}>
          <p>I'm student at Florida International University, majoring in computer science. I enjoy making
          cool things for the internet and using overpriced software such as the Adobe Creative Suite for my hobbies.</p>
        
          <p>During college I hope to find a (<small>paid🤞</small>) internship, to increase my skills in web development 
          and pay rent.</p>

          <p>I mostly work with JavaScript, so TypeScript is my favorite language to use. Other technologies include React
          and Next.js.</p>
        </div>
        
        <h1 className={styles.title}>Contact</h1>

          <div className={styles.logo_display}>
            <h2 className={styles.contact}>
                <Link href="https://github.com/alecnazzy">
                  <Image
                  className={styles.logo}
                  src="/github-logo.png"
                  alt="GitHub logo"
                  width={70}
                  height={70}
                  />
                </Link>
            </h2>
          
            <h2 className={styles.contact}>
                <Link href="https://www.linkedin.com/in/alec-nazworth-3ab6b4237/">
                  <Image
                  className={styles.logo}
                  src="/linkedin-logo.png"
                  alt="LinkedIn logo"
                  width={70}
                  height={70}
                  />
                </Link>
            </h2>   

            <h2 className={styles.contact}>
                <Link href="https://www.instagram.com/alec.nazworth">
                  <Image
                  className={styles.logo}
                  src="/instagram-logo.png"
                  alt="Instagram logo"
                  width={70}
                  height={70}
                  />
                </Link>
            </h2>   

            <h2 className={styles.contact}>
                <Link href="mailto:alecnazworthalt@gmail.com">
                  <Image
                  className={styles.logo}
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
