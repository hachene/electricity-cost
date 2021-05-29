import Home from '@src/pages'
import { render, screen } from '@testing-library/react'

describe('index', () => {
  it('renders the message passed by props', () => {
    render(<Home myProps="Hello World" />)
    const linkElement = screen.queryByText(/Hello World/)
    expect(linkElement).toBeVisible()
  })
})
