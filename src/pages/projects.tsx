import Head from 'next/head';

import Navigation from '../components/Navigation';
import styles from '../styles/pages/Projects.module.scss';

export default function Projects() {
    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>
            <Navigation user={false} />

            <div className="content">
                <div className={styles.sectionContainer}>
                    <div className={styles.sectionItem}>
                        <img src="rmcV.png" />
                        <a target="_blank" id="full">rmcV <span>(2021 - present)</span></a>
                        <span id="position">Lead Developer and Designer</span>
                    </div>
                    <div className={styles.sectionItem}>
                        <img src="avatar.png" />
                        <a target="_blank" id="full">ryanmcgall.xyz 👨🏻‍🎓<span>(2020 - 2021)</span></a>
                        <span id="position">this site you are on right now 🥳</span>
                    </div>
                    <div className={styles.sectionItem}>
                        <img src="legion.jpg" />
                        <a target="_blank" id="full">Legion|MT 👥<span>(2017 - 2019)</span></a>
                        <span id="position">Developer and Owner</span>
                    </div>
                    <div className={styles.sectionItem}>
                        <img src="profile.png" />
                        <a target="_blank" id="full">Profile 🤖 <span>(discontinued)</span></a>
                        <span id="position">Lead Developer</span>
                    </div>
                    <div className={styles.sectionItem}>
                        <img src="musicx.jpg" />
                        <a target="_blank" id="full">Music X 🤖 <span>(discontinued)</span></a>
                        <span id="position">Lead Developer & Designer</span>
                    </div>
                    <div className={styles.sectionItem}>
                        <img src="hireme.png" />
                        <a target="_blank" id="full">Hire me! 📝 <span>(FREE AND PAID)</span></a>
                        <span id="position">Discord bots, websites and more!</span>
                    </div>
                </div>
            </div>
        </>
    )
}