import Home from '@src/pages'
import { render, screen } from '@testing-library/react'
import * as Utils from '@src/lib/utils'

describe('index', () => {
  it('renders the offpeak message when it is offpeak cost time', () => {
    jest.spyOn(Utils, 'getToday').mockReturnValue(new Date('2021-05-27T03:00:00'))
    render(<Home />)
    const renderedMessage = screen.queryByText(/Poco/)
    expect(renderedMessage).toBeVisible()
  })

  it('renders the medium message when it is a medium cost time', () => {
    jest.spyOn(Utils, 'getToday').mockReturnValue(new Date('2021-05-27T08:00:00'))
    render(<Home />)
    const renderedMessage = screen.queryByText(/Ni mucho ni poco/)
    expect(renderedMessage).toBeVisible()
  })

  it('renders the peak message when it is peak cost time', () => {
    jest.spyOn(Utils, 'getToday').mockReturnValue(new Date('2021-05-27T11:00:00'))
    render(<Home />)
    const renderedMessage = screen.queryByText(/Mucho/)
    expect(renderedMessage).toBeVisible()
  })
})
