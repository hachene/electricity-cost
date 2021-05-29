import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import { PropsWithChildren } from 'react'
import { getAppName } from '@src/lib/utils'

const siteTitle = getAppName()

export const Layout = ({ children }: PropsWithChildren<LayoutProps>) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="A churro app" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <>
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={siteTitle}
          />
          <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
        </>
      </header>
      <div className={styles.container}>{children}</div>
    </div>
  )
}

type LayoutProps = { home?: boolean }
