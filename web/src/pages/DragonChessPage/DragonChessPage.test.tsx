import { render } from '@redwoodjs/testing/web'

import DragonChessPage from './DragonChessPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DragonChessPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DragonChessPage />)
    }).not.toThrow()
  })
})
