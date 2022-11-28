import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
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