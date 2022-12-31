import Image from 'next/image'
import home from '../styles/Home.module.css'

export default function Profile() {
    return (
        <div className={home.container}>
            <h1 className={home.title}>Alec Nazworth</h1>
            <div>
                <Image
                    className={home.profile_pic}
                    src="/handsome-sob.jpg"
                    alt="ME"
                    width={150}
                    height={150}
                />
            </div>
            <h1>About me</h1>
            <div className={home.text}>
                <p>
                    I&apos;m a student at Florida International University, majoring in computer science. During college I hope to find 
                    an (<small>paid🤞</small>) internship to increase my skills in web development and pay rent.
                </p>

                <p>
                    Technologies I am familiar with and use in my projects are TypeScript, React, Next.js, and MongoDB. I have also used Python and Java.
                    I enjoy the design and development process of creating a website, specifically the aspect of making each project highly accessible.
                </p>

                <p>
                    I enjoy watching movies, sports, and traveling. Among places I have been my favorites
                    have been New York City and The Balkans. I&apos;m planning a trip to Spain✈️ for after I graduate, while I learn Spanish/Catalan.
                </p>

                <h2><a href="\alec-nazworth-resume.pdf" download>Resume</a></h2>
            </div>
    </div>
    )
}