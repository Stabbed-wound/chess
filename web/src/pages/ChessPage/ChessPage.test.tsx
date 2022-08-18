import { render } from '@redwoodjs/testing/web'

import ChessPage from './ChessPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ChessPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChessPage />)
    }).not.toThrow()
  })
})
