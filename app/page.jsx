import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className={styles.title}>Aun Syed Shah - Web3.0 and Metaverse</h1>
      </div>
    </main>
  )
}
