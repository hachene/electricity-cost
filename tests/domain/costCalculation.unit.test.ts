import { CostLevel, getCurrentCost } from '@src/domain/costCalculation'

describe('costCalculation', () => {
  describe('getCurrentCost', () => {
    it('returns a low cost level when the time is in the low cost time slot', () => {
      const lowerLimitTime = new Date('2021-05-27T00:00:00')
      expect(getCurrentCost(lowerLimitTime)).toEqual(CostLevel.low)

      const inBetweenTime = new Date('2021-05-27T03:30:00')
      expect(getCurrentCost(inBetweenTime)).toEqual(CostLevel.low)

      const higherLimitTime = new Date('2021-05-27T07:59:00')
      expect(getCurrentCost(higherLimitTime)).toEqual(CostLevel.low)
    })

    it('returns a medium cost level when the time is in the first medium cost time slot', () => {
      const lowerLimitTime = new Date('2021-05-27T08:00:00')
      expect(getCurrentCost(lowerLimitTime)).toEqual(CostLevel.medium)

      const inBetweenTime = new Date('2021-05-27T09:30:00')
      expect(getCurrentCost(inBetweenTime)).toEqual(CostLevel.medium)

      const higherLimitTime = new Date('2021-05-27T09:59:00')
      expect(getCurrentCost(higherLimitTime)).toEqual(CostLevel.medium)
    })

    it('returns a medium cost level when the time is in the second medium cost time slot', () => {
      const lowerLimitTime = new Date('2021-05-27T14:00:00')
      expect(getCurrentCost(lowerLimitTime)).toEqual(CostLevel.medium)

      const inBetweenTime = new Date('2021-05-27T15:30:00')
      expect(getCurrentCost(inBetweenTime)).toEqual(CostLevel.medium)

      const higherLimitTime = new Date('2021-05-27T17:59:00')
      expect(getCurrentCost(higherLimitTime)).toEqual(CostLevel.medium)
    })

    it('returns a medium cost level when the time is in the third medium cost time slot', () => {
      const lowerLimitTime = new Date('2021-05-27T22:00:00')
      expect(getCurrentCost(lowerLimitTime)).toEqual(CostLevel.medium)

      const inBetweenTime = new Date('2021-05-27T22:30:00')
      expect(getCurrentCost(inBetweenTime)).toEqual(CostLevel.medium)

      const higherLimitTime = new Date('2021-05-27T23:59:00')
      expect(getCurrentCost(higherLimitTime)).toEqual(CostLevel.medium)
    })

    it('returns a high cost level when the time is in the first high cost time slot', () => {
      const lowerLimitTime = new Date('2021-05-27T10:00:00')
      expect(getCurrentCost(lowerLimitTime)).toEqual(CostLevel.high)

      const inBetweenTime = new Date('2021-05-27T12:30:00')
      expect(getCurrentCost(inBetweenTime)).toEqual(CostLevel.high)

      const higherLimitTime = new Date('2021-05-27T13:59:00')
      expect(getCurrentCost(higherLimitTime)).toEqual(CostLevel.high)
    })

    it('returns a high cost level when the time is in the second high cost time slot', () => {
      const lowerLimitTime = new Date('2021-05-27T18:00:00')
      expect(getCurrentCost(lowerLimitTime)).toEqual(CostLevel.high)

      const inBetweenTime = new Date('2021-05-27T19:30:00')
      expect(getCurrentCost(inBetweenTime)).toEqual(CostLevel.high)

      const higherLimitTime = new Date('2021-05-27T21:59:00')
      expect(getCurrentCost(higherLimitTime)).toEqual(CostLevel.high)
    })

    it('returns a low cost level when is weekend', () => {
      const date = new Date('2021-05-29T20:00:00')
      const result = getCurrentCost(date)
      expect(result).toEqual(CostLevel.low)
    })

    it('returns a low cost level when is national holiday', () => {
      const date = new Date('2021-01-01T10:00:00Z')
      const result = getCurrentCost(date)
      expect(result).toEqual(CostLevel.low)
    })
  })
})
