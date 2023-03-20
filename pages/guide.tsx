import React from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
//import Link from "next/link"
import Sidebar from "../components/Sidebar";

function Guide(): JSX.Element {
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
                {/* TODO: grab items using header tags, then pass them into the sidebar component*/}
                <Sidebar navItems={["hello", "world"]}></Sidebar>
                {/* Outline:
                    Installing Homebrew
                    Installing Raycast
                    Installing yabai, skhd, spaceid
                    Installing MacOS Sensors 
                */}
            </main>
        </div>
    );
}
export default Guide;
