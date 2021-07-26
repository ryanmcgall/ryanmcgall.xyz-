import Router from 'next/router';
import { useLanyard } from 'use-lanyard';

import styles from '../styles/components/navigation.module.scss';

export default function Navigation(props) {
    const { data: user } = useLanyard("543145781767700481");

    return (
        <>
            <div className={styles.base}>
                {props.user && (
                    <div className={styles.user}>
                        <img src={`https://cdn.discordapp.com/avatars/${user?.discord_user.id}/${user?.discord_user.avatar}.png`} />
                        <div className={styles.statusIcon} style={{
                            background: user?.discord_status == "online"
                                ? "#2ed128"
                                : user?.discord_status == "dnd"
                                ? "#d12828"
                                : user?.discord_status == "idle"
                                ? "#fc6b03"
                                : "#888989"
                        }} />
                        <span>{user?.discord_user.username}</span>
                    </div>
                )}
                <a href="/contact" className={styles.navItem} onClick={handleRoute}>Contact</a>
                <a href="/projects" className={styles.navItem} onClick={handleRoute}>Projects</a>
                <a href="/languages" className={styles.navItem} onClick={handleRoute}>Languages</a>
                <a href="/home" className={styles.navItem} onClick={handleRoute}>Home</a>
            </div>
        </>
    )
}

function handleRoute(e) {
    e.preventDefault();
    Router.push(e.target.href, undefined, { shallow: true })
}