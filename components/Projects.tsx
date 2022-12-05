import home from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
    return (
        <div className={home.container}>

            <h1 className={home.title}>Projects</h1>

            <h1>Boba theme for VSCode</h1>
            <div className={home.text}>
                
                
                
                    <p>A little theme I cooked up, inspired by the pastel colors common with
                    boba(bubble) tea that are easier for the eyes to digest.</p>
                <h2>
                    <Link href="https://github.com/alecnazzy/boba-theme" target="_blank">
                        GitHub repository
                    </Link>
                </h2>
            </div>
                
                

        
        
            <h1>This Website</h1>
        <div className={home.text}>
            
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