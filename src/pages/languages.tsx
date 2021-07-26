import Head from 'next/head';

import Navigation from '../components/Navigation';
import styles from '../styles/pages/Languages.module.scss';

export default function Languages() {
    return (
        <>
            <Head>
                <title>Languages</title>
            </Head>
            <Navigation user={false} />

            <div className="content">
                <div className={styles.sectionContainer}>
                    <div className={styles.sectionItem}>
                        <img src="node.png" />
                    </div>
                    <div className={styles.sectionItem}>
                        <img src="react.png" />
                    </div>
                    <div className={styles.sectionItem}>
                        <img src="csharp.png" />
                    </div>
                    <div className={styles.sectionItem}>
                        <img src="mongodb.png" />
                    </div>
                    <div className={styles.sectionItem}>
                        <img src="python.png" />
                    </div>
                    <div className={styles.sectionItem}>
                        <img src="angular.png" />
                    </div>
                </div>
            </div>
        </>
    )
}