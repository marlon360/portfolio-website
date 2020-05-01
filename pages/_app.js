import '../styles.css'
import { restoreTheme } from '../utils/theme-switcher'
import { useEffect } from 'react'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  useEffect(() => restoreTheme());
  return <Component {...pageProps} />
}