export function setTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme)
}
export function restoreTheme() {
    if (getTheme() != null) {
        setTheme(getTheme());
    }
}
export function getTheme() {
    return window.localStorage.getItem('theme');
}