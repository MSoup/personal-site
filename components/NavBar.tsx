import Link from "next/link";
import styles from "./layout.module.css";

export default function Layout({ children, home }) {
    return (
        <div className={styles.navbar}>
            <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </div>
    )
}