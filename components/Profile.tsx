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
                <p>I enjoy making cool things for the internet, [insert streaming service here] and chill, and using expensive software 
                like Adobe Creative Suite for my other hobbies.</p>
                
                <p>I am a student at Florida International University, majoring in computer science. During college I hope to find 
                an (<small>paid🤞</small>) internship to increase my skills in web development and pay rent.</p>

                <p>I have mostly worked with JavaScript and TypeScript. Other technologies I use include React, Next.js, PostgreSQL, 
                along with a little Java.</p>

                <h2><a href="\alec-nazworth-resume.pdf" download>Resume</a></h2>
            </div>
    </div>
    )
}