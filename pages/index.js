import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link'
export default function Home() {
	return (
		 <div className={styles.container}>
			<Head>
				<title>My MacOS Setup</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1 className={styles.title}>
        My MacOS Setup
				</h1>

				<div className={styles.card}>
					<Image
						src="/images/preview.png"
						width={853}
						height={533}
						alt="preview"
					/> 
				</div>
				<div className={styles.grid}>
					<Link href="/guide" className={styles.card}>
						<h3>Guide &rarr;</h3>
						<p>Read and follow along with shell commands.</p>
					</Link>

					<a href="https://github.com/johnma02" className={styles.card}>
						<h3>More &rarr;</h3>
						<p>I have more cool stuff on my GitHub!</p>
					</a>
				</div>
			</main>

			<footer>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
          Powered by{' '}
					<img src="/vercel.svg" alt="Vercel" className={styles.logo} />
				</a>
			</footer>
		</div>
	)
}
