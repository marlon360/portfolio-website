import styles from './topbar.module.css';
import { setTheme, getTheme } from '../utils/theme-switcher';
import { useState, useEffect } from 'react';

export default function TopbarComponent() {

    const [currentTheme, setCurrentTheme] = useState();
    useEffect(() => setCurrentTheme(getTheme()))

    const onChange = (evt) => {
        setCurrentTheme(evt.target.value);
        setTheme(evt.target.value);
    }

    return (
        <div className={styles.topbar}>
            <div className={styles["topbar-content"]}>
                <span>Marlon Lückert</span>
                <div className={styles["theme-switcher"]}>
                    <label for="theme-switcher">Theme</label>
                    <select id="theme-switcher" onChange={onChange} className={styles.select}>
                        <option selected={currentTheme == "system"} value="system">System</option>
                        <option selected={currentTheme == "light"} value="light">Light</option>
                        <option selected={currentTheme == "dark"} value="dark">Dark</option>
                    </select>
                </div>
            </div>
        </div>
    )
}