import Head from 'next/head';

import Navigation from '../components/Navigation';
import styles from '../styles/pages/Contact.module.scss';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <Navigation user={false} />

            <div className="content">
                <div className={styles.sectionContainer}>
                    <div className={styles.sectionItem}>
                        <a id="full" target="_blank" href="http://discord.com/users/543145781767700481">rmc<span>#0001</span></a>
                    </div>
                    <div className={styles.sectionItem}>
                        <a id="full">ryan_mcgall</a>
                    </div>
                    <div className={styles.sectionItem}>
                        <a id="full" target="_blank" href="https://instagram.com/ryanmcgall">ryanmcgall</a>
                    </div>
                </div>
            </div>
        </>
    )
}