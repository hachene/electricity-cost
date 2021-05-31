import Head from 'next/head'
import React, { useState } from 'react'
import utilStyles from '../styles/utils.module.css'
import layoutStyles from '../styles/layout.module.css'
import { getAppName, getToday } from '@src/lib/utils'
import { PeakCost } from '@src/components/peakCost'
import { MediumCost } from '@src/components/mediumCost'
import { OffpeakCost } from '@src/components/offpeakCost'
import { CostLevel, getCurrentCost } from '@src/domain/costCalculation'
import { GetServerSideProps } from 'next'

const siteTitle = getAppName()

export const getServerSideProps: GetServerSideProps<any> = async () => {
  return { props: { testProp: new Date() } }
}

const calculate = () => {
  console.log('Calculating! 🔥️')
  const currentTime = getToday()
  return getCurrentCost(currentTime)
}

const renderCost = (c: CostLevel) => {
  return <OffpeakCost />
  console.log('🚀 ~ file: index.tsx ~ line 29 ~ renderCost ~ c', c)
  if (c === CostLevel.high) return <PeakCost />
  if (c === CostLevel.medium) return <MediumCost />
  return <OffpeakCost />
}

export default function Home({ testProp }: any) {
  console.log('🚀 ~ file: index.tsx ~ line 32 ~ Home ~ testProp', testProp)

  const [costLevel] = useState(calculate())

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="La mejor web para saber cuándo poner la lavadora" />
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
      <OffpeakCost />
    </div>
  )
}
