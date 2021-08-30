import Home from '@src/pages'
import { render, screen } from '@testing-library/react'
import * as costCalculation from '@src/domain/costCalculation'

describe('index', () => {
  describe('cost components', () => {
    afterEach(() => jest.restoreAllMocks())

    it('renders the offpeak message when it is offpeak cost time', () => {
      const mock = jest.spyOn(costCalculation, 'getCurrentCost')
      mock.mockReturnValue(costCalculation.CostLevel.low)

      render(<Home />)

      const renderedMessage = screen.queryByText(/Poco/)
      expect(renderedMessage).toBeVisible()
    })

    it('renders the medium message when it is a medium cost time', () => {
      const mock = jest.spyOn(costCalculation, 'getCurrentCost')
      mock.mockReturnValue(costCalculation.CostLevel.medium)

      render(<Home />)

      const renderedMessage = screen.queryByText(/Ni mucho ni poco/)
      expect(renderedMessage).toBeVisible()
    })

    it('renders the peak message when it is peak cost time', () => {
      const mock = jest.spyOn(costCalculation, 'getCurrentCost')
      mock.mockReturnValue(costCalculation.CostLevel.high)

      render(<Home />)

      const renderedMessage = screen.queryByText(/Mucho/)
      expect(renderedMessage).toBeVisible()
    })
  })

  describe('powered by component', () => {
    it('renders the "powered by" message', () => {
      render(<Home />)
      const renderedMessage = screen.queryByText(/Tecnología punta diseñada por/)
      expect(renderedMessage).toBeVisible()
    })
  })
})
