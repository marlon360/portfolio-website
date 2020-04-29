import styles from './topbar.module.css';

export default function TopbarComponent() {
    return (
        <div className={styles.topbar}>
            <div className={styles["topbar-content"]}>
                <span>Marlon Lückert</span>
                <a href="mailto:m.lueckert@me.com">m.lueckert@me.com</a>
            </div>
        </div>
    )
}