import { AppBar, Container, Toolbar, Typography } from "@mui/material"

import type { FC } from "react"

const Header: FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap>
            Swager api test
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
