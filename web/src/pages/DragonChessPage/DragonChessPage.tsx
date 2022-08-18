import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const DragonChessPage = () => {
  return (
    <>
      <MetaTags title="DragonChess" description="DragonChess page" />

      <h1>DragonChessPage</h1>
      <p>
        Find me in <code>./web/src/pages/DragonChessPage/DragonChessPage.tsx</code>
      </p>
      <p>
        My default route is named <code>dragonChess</code>, link to me with `
        <Link to={routes.dragonChess()}>DragonChess</Link>`
      </p>
    </>
  )
}

export default DragonChessPage
