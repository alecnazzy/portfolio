import home from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
    return (
        <div className={home.container}>
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
        </div>
    )
}