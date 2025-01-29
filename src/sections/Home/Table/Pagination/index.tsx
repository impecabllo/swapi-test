import { TableFooter, TablePagination, TableRow } from "@mui/material"

import config from "@/config"

import type { FC } from "react"

type Props = {
  isHidden: boolean
  page: number
  count: number
  setPage: (newPage: string) => void
}

const Pagination: FC<Props> = ({ isHidden, page, count, setPage }) => {
  const handleChangePage = (newPage: number) => {
    window.scrollTo(0, 0)
    setPage(String(newPage + 1))
  }

  if (isHidden) {
    return null
  }

  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          count={count}
          page={page - 1}
          onPageChange={(_, newPage: number) => handleChangePage(newPage)}
          rowsPerPage={config.defaultRowsPerPage}
          rowsPerPageOptions={[config.defaultRowsPerPage]}
        />
      </TableRow>
    </TableFooter>
  )
}

export default Pagination
