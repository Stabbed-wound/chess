import { NavLink, routes, SkipNavLink } from "@redwoodjs/router";

type MainLayoutProps = {
  children?: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <SkipNavLink>
        <nav>
          <ul>
            <li>
              <NavLink
                to={routes.chess({
                  id: "rnbqkbnr-pppppppp-8-8-8-8-pppppppp-rnbqkbnr",
                })}
                activeClassName=""
              >
                chess
              </NavLink>
            </li>
            <li>
              <NavLink to={routes.dragonChess({ id: "---" })} activeClassName="">
                dragon chess
              </NavLink>
            </li>
          </ul>
        </nav>
      </SkipNavLink>
    </>
  );
};

export default MainLayout;
