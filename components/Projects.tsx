import home from '../styles/Home.module.css'
import project from '../styles/Projects.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
    return (
        <div className={home.container}>

            <h1 className={home.title}>Projects</h1>

            {/* Boba theme project */}
            <div className={home.text}>
                
                
                <h1>
                    Boba theme for VSCode
                </h1>
                    <p>A little theme I cooked up, inspired by the pastel colors common with
                    boba(bubble) tea that are easier for the eyes to digest.</p>
                <h2>
                    <Link href="https://github.com/alecnazzy/boba-theme" target="_blank">
                        GitHub repository
                    </Link>
                </h2>
                
                
                </div>
                <div>
                    <Image
                className={home.image}
                src={"/html-boba.png"}
                alt="JS example"
                // width={500}
                // height={350}
                
                layout={'intrinsic'} width={900} height={750} objectFit={'contain'}
                    />
                </div>
                

        
        
        {/* Website portfolio project */}
        <div className={home.text}>
            <h1>This Website</h1>
                <p>I created this site with TypeScript, Next.js, and deployed
                to the web using Vercel.</p>
            <h2>
                <Link href="https://github.com/alecnazzy/portfolio" target="_blank">
                    GitHub repository
                </Link>
            </h2>
        </div> 
        </div> 
    )
}