import home from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function InProgress() {
    return (
        <div className={home.container}>

            <h1 className={home.title}>In Progress</h1>

            <h1>Disney+ clone</h1>
            <div className={home.text}>
                
                
                
                    <p>A Disney+ clone that I am making with TypeScript, Next.js, Tailwind,
                    and the <Link className={home.link}href="https://www.themoviedb.org/documentation/api" target="_blank">TMDB API</Link>.</p>
                <h2>
                    <Link href="https://github.com/alecnazzy/disney-plus-and-chill" target="_blank">
                        GitHub repository
                    </Link>
                </h2>
            </div>
        </div>
)}