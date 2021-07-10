import { CostLevel } from '@src/domain/costCalculation'
import Home from '@src/pages'
import { render, screen } from '@testing-library/react'

describe('index', () => {
  describe('cost components', () => {
    it('renders the offpeak message when it is offpeak cost time', () => {
      render(<Home currentCost={CostLevel.low} />)
      const renderedMessage = screen.queryByText(/Poco/)
      expect(renderedMessage).toBeVisible()
    })

    it('renders the medium message when it is a medium cost time', () => {
      render(<Home currentCost={CostLevel.medium} />)
      const renderedMessage = screen.queryByText(/Ni mucho ni poco/)
      expect(renderedMessage).toBeVisible()
    })

    it('renders the peak message when it is peak cost time', () => {
      render(<Home currentCost={CostLevel.high} />)
      const renderedMessage = screen.queryByText(/Mucho/)
      expect(renderedMessage).toBeVisible()
    })
  })

  describe('powered by component', () => {
    it('renders the "powered by" message', () => {
      render(<Home currentCost={CostLevel.low} />)
      screen.debug()
      const renderedMessage = screen.queryByText(/Tecnología punta diseñada por/)
      expect(renderedMessage).toBeVisible()
    })
  })
})
