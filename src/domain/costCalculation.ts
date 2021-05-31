export enum CostLevel {
  low = 'low',
  medium = 'medium',
  high = 'high',
}

export const NATIONAL_HOLIDAYS = [
  'Fri Jan 01 2021',
  'Wed Jan 06 2021',
  'Fri Apr 02 2021',
  'Sat May 01 2021',
  'Tue Oct 12 2021',
  'Mon Nov 01 2021',
  'Mon Dec 06 2021',
  'Wed Dec 08 2021',
  'Sat Dec 25 2021',
]

export const getCurrentCost = (currentTime: Date): CostLevel => {
  console.log('🚀 ~ file: costCalculation.ts ~ line 20 ~ getCurrentCost ~ currentTime', currentTime)
  const hours = currentTime.getHours()
  const weekDay = currentTime.getDay()
  const dateWithoutTime = currentTime.toDateString()

  const isWeekend = weekDay === 0 || weekDay === 6
  if (isWeekend) return CostLevel.low

  const isNationalHoliday = NATIONAL_HOLIDAYS.includes(dateWithoutTime)
  if (isNationalHoliday) return CostLevel.low

  if ((hours > 9 && hours < 14) || (hours > 17 && hours < 22)) return CostLevel.high
  if (hours > 7) return CostLevel.medium
  return CostLevel.low
}
