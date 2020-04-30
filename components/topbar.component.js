import styles from './topbar.module.css';

export default function TopbarComponent() {

    const onChange = (evt) => {
        document.body.setAttribute('data-theme', evt.target.value);
    }

    return (
        <div className={styles.topbar}>
            <div className={styles["topbar-content"]}>
                <span>Marlon Lückert</span>
                <div className={styles["theme-switcher"]}>
                    <label for="theme-switcher">Theme</label>
                    <select id="theme-switcher" onChange={onChange} className={styles.select}>
                        <option value="system">System</option>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </div>
            </div>
        </div>
    )
}