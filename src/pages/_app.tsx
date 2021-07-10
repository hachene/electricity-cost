import { AppProps } from 'next/app'
import '@src/styles/globals.css'
import { useEffect } from 'react'
import splitbee from '@splitbee/web'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    splitbee.init({ disableCookie: true })
  }, [])

  return <Component {...pageProps} />
}
