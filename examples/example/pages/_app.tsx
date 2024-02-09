import { ThemeProvider } from '@juliusmarminge/next-themes'
import '../styles.css'
import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider forcedTheme={(Component as any).theme || undefined}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
