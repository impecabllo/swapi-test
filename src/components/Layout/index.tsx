import { Box, Container } from "@mui/material"
import { Outlet } from "react-router"

import Header from "../Header"

import type { FC } from "react"

const Layout: FC = () => {
  return (
    <main>
      <Header />

      <Container>
        <Box my={6}>
          <Outlet />
        </Box>
      </Container>
    </main>
  )
}

export default Layout
