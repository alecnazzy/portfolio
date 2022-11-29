import Link from 'next/link'
import styles from '../styles/Home.module.css'
import navbar from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <div className={navbar.navbar}>
            <nav>
            <ul>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/projects">
                        Projects
                    </Link>
                </li>
            </ul>
            </nav>
        </div>
    )
}