import { Button, TableCell, TableRow } from "@mui/material"

import { formatDate } from "@/lib/helper"
import { UNKNOWN_VALUE } from "@/constants"

import type { CharactersListItem } from "@/types/characters"
import { useCallback, type FC } from "react"

type Props = {
  item: CharactersListItem
  onView: (id: string) => void
}

const Item: FC<Props> = ({ item, onView }) => {
  const getCharacterId = useCallback(() => {
    const splittedUrl = item.url.split("/")

    return splittedUrl[splittedUrl.length - 2]
  }, [item.url])

  return (
    <TableRow>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.height !== UNKNOWN_VALUE ? item.height || "-" : "-"}</TableCell>
      <TableCell>{item.mass !== UNKNOWN_VALUE ? item.mass || "-" : "-"}</TableCell>
      <TableCell>{item.skin_color || "-"}</TableCell>
      <TableCell>{formatDate(item.created)}</TableCell>
      <TableCell align="right">
        <Button variant="contained" onClick={() => onView(getCharacterId())}>
          View
        </Button>
      </TableCell>
    </TableRow>
  )
}

export default Item
