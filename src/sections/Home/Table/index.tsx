import { useNavigate } from "react-router"
import { Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

import { getCharacterRoute } from "@/routes"

import Item from "./Item"
import Pagination from "./Pagination"

import type { CharactersListItem, CharacterPaginationData } from "@/types/characters"
import type { FC } from "react"

type Props = {
  isLoading: boolean
  items: Array<CharactersListItem>
  paginationData: CharacterPaginationData
  setPage: (newPage: string) => void
}

const CharactersTable: FC<Props> = ({ isLoading, items, paginationData, setPage }) => {
  const navigate = useNavigate()

  const handleView = (itemId: string) => {
    navigate(getCharacterRoute(itemId))
  }

  return (
    <div>
      <TableContainer component={Paper}>
        {isLoading ? (
          <Skeleton variant="rounded" height={600} />
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Height</TableCell>
                <TableCell>Mass</TableCell>
                <TableCell>Skin color</TableCell>
                <TableCell>Created at</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.length > 0 ? (
                items.map(item => <Item key={item.url} item={item} onView={handleView} />)
              ) : (
                <TableRow>
                  <TableCell colSpan={3}>Nothing found</TableCell>
                </TableRow>
              )}
            </TableBody>
            <Pagination
              count={paginationData.count}
              page={paginationData.page}
              isHidden={!items.length}
              setPage={setPage}
            />
          </Table>
        )}
      </TableContainer>
    </div>
  )
}

export default CharactersTable
