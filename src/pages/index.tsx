import Head from 'next/head'
import React, { useState } from 'react'
import utilStyles from '../styles/utils.module.css'
import layoutStyles from '../styles/layout.module.css'
import { getToday, useInterval } from '@src/lib/utils'
import { PeakCost } from '@src/components/peakCost'
import { MediumCost } from '@src/components/mediumCost'
import { OffpeakCost } from '@src/components/offpeakCost'
import { CostLevel, getCurrentCost } from '@src/domain/costCalculation'
import { PoweredBy } from '@src/components/poweredBy/poweredBy'

const siteTitle = '💡️ ¿Cuánto cuesta la luz ahora?'

const renderCost = (costLevel: CostLevel) => {
  if (costLevel === CostLevel.high) return <PeakCost />
  if (costLevel === CostLevel.medium) return <MediumCost />
  return <OffpeakCost />
}
export default function Home() {
  const initialCost = getCurrentCost(getToday())

  const [currentCost, setCurrentCost] = useState<CostLevel>(initialCost)

  useInterval(() => {
    const currentTime = getToday()
    console.log('🚀 ~ file: index.tsx ~ line 25 ~ useInterval ~ currentTime', currentTime)
    const cost = getCurrentCost(currentTime)
    console.log('🚀 ~ file: index.tsx ~ line 27 ~ useInterval ~ cost', cost)
    setCurrentCost(cost)
  }, 1000)

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
      <div className={layoutStyles.semaphoreContainer}>{currentCost && renderCost(currentCost)}</div>
      <div className={layoutStyles.footer}>
        <PoweredBy />
      </div>
    </div>
  )
}
