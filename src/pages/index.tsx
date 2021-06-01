import Head from 'next/head'
import React from 'react'
import utilStyles from '../styles/utils.module.css'
import layoutStyles from '../styles/layout.module.css'
import { getToday } from '@src/lib/utils'
import { PeakCost } from '@src/components/peakCost'
import { MediumCost } from '@src/components/mediumCost'
import { OffpeakCost } from '@src/components/offpeakCost'
import { CostLevel, getCurrentCost } from '@src/domain/costCalculation'

const siteTitle = '💡️ ¿Cuánto cuesta la luz ahora?'

const renderCost = (costLevel: CostLevel) => {
  if (costLevel === CostLevel.high) return <PeakCost />
  if (costLevel === CostLevel.medium) return <MediumCost />
  return <OffpeakCost />
}
export default function Home({ currentCost, currentTime, dateFromServer }: HomeProps) {
  console.log('🚀 ~ file: index.tsx ~ line 19 ~ Home ~ dateFromServer', dateFromServer)
  console.log('🚀 ~ file: index.tsx ~ line 19 ~ Home ~ currentTime', currentTime)
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="La mejor web para saber cuándo poner la lavadora" />
        <meta name="og:title" content={siteTitle} />
        <title>¿Cuánto cuesta la luz ahora?</title>
      </Head>
      <header className={layoutStyles.header}>
        <h1 className={utilStyles.headingXl}>{siteTitle}</h1>
      </header>
      {renderCost(currentCost)}
    </div>
  )
}

Home.getInitialProps = async (): Promise<HomeProps> => {
  const currentTime = getToday()
  const currentCost = CostLevel.high
  var dt = new Date()
  dt.setHours(dt.getHours() + 2)
  return { currentCost, currentTime: dt, dateFromServer: currentTime }
}

type HomeProps = { currentCost: CostLevel; currentTime: Date; dateFromServer: Date }
