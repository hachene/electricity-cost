import Head from 'next/head'
import React from 'react'
import utilStyles from '@src/styles/utils.module.css'
import layoutStyles from '@src/styles/layout.module.css'
import { getAppName } from '@src/lib/utils'
import { PeakCost } from '@src/components/peakCost'

const siteTitle = getAppName()

export default function Home() {
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
        <title>¿Cuánto cuesta la luz ahora?</title>
      </Head>
      <header className={layoutStyles.header}>
        <h1 className={utilStyles.headingXl}>{siteTitle}</h1>
      </header>
      <PeakCost />
    </div>
  )
}
