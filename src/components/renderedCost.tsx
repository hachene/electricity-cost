import { getCurrentCost, CostLevel } from '@src/domain/costCalculation'
import { PeakCost } from '@src/components/peakCost'
import { MediumCost } from '@src/components/mediumCost'
import { OffpeakCost } from '@src/components/offpeakCost'
import { getToday } from '@src/lib/utils'

export function RenderedCost() {
  const costLevel = getCurrentCost(getToday())
  console.log('🚀 ~ file: index.tsx ~ line 18 ~ renderCost ~ costLevel', costLevel)

  if (costLevel === CostLevel.high) return <PeakCost />
  if (costLevel === CostLevel.medium) return <MediumCost />
  return <OffpeakCost />
}
