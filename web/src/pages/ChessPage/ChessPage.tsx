import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ChessPage = () => {
  return (
    <>
      <MetaTags title="Chess" description="Chess page" />

      <h1>ChessPage</h1>
      <p>
        Find me in <code>./web/src/pages/ChessPage/ChessPage.tsx</code>
      </p>
      <p>
        My default route is named <code>chess</code>, link to me with `
        <Link to={routes.chess()}>Chess</Link>`
      </p>
    </>
  )
}

export default ChessPage
