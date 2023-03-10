import React from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function guide() {
    return (
        <div className={styles.container}>
            <Head>
                <title>MacOS Power User Guide</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1 className={styles.title}>
                    How to Become a MacOS Power User
                </h1>
            </main>
        </div>
    );
}
