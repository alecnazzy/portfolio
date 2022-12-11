import home from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function InProgress() {
    return (
        <div className={home.container}>

            <h1 className={home.title}>In Progress</h1>

            <h1>Streetwear Online retailer</h1>
            <div className={home.text}>
                
                
                
                    <p>An online clothing store project I&apos;m working on using Typescript, Next.js,
                    and MongoDB.</p>
                <h2>
                    <Link href="https://github.com/alecnazzy/streetwear-store" target="_blank">
                        GitHub repository
                    </Link>
                </h2>
            </div>
        </div>
)}