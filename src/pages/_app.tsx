import { AppProps } from 'next/app'
import '@src/styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import * as gtag from '../lib/gtag'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      // if (isProduction)
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  // eslint-disable-next-line react/jsx-props-no-spreading

  return <Component {...pageProps} />
}
