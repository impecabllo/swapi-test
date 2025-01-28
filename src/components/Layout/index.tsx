import { Outlet } from "react-router"

import type { FC } from "react"

const Layout: FC = () => {
  return (
    <main>
      <header>Header</header>

      <Outlet />
    </main>
  )
}

export default Layout
