import { Grid2, Typography } from "@mui/material"

import { UNKNOWN_VALUE } from "@/constants"
import { formatDate } from "@/lib/helper"

import type { CharactersListItem } from "@/types/characters"
import type { FC } from "react"

type Props = {
  currentCharacter: CharactersListItem | null
}

const Info: FC<Props> = ({ currentCharacter }) => {
  if (!currentCharacter) {
    return null
  }

  return (
    <Grid2 container p={3} rowGap={3}>
      <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
        <Grid2 container>
          <Typography minWidth={120} fontWeight={500}>
            Name:
          </Typography>
          <Typography>{currentCharacter.name}</Typography>
        </Grid2>
      </Grid2>

      <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
        <Grid2 container>
          <Typography minWidth={120} fontWeight={500}>
            Height:
          </Typography>
          <Typography>{currentCharacter.height !== UNKNOWN_VALUE ? currentCharacter.height || "-" : "-"}</Typography>
        </Grid2>
      </Grid2>

      <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
        <Grid2 container>
          <Typography minWidth={120} fontWeight={500}>
            Mass:
          </Typography>
          <Typography>{currentCharacter.mass !== UNKNOWN_VALUE ? currentCharacter.mass || "-" : "-"}</Typography>
        </Grid2>
      </Grid2>

      <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
        <Grid2 container>
          <Typography minWidth={120} fontWeight={500}>
            Skin color:
          </Typography>
          <Typography>{currentCharacter.skin_color || "-"}</Typography>
        </Grid2>
      </Grid2>

      <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
        <Grid2 container>
          <Typography minWidth={120} fontWeight={500}>
            Eye color:
          </Typography>
          <Typography>{currentCharacter.eye_color || "-"}</Typography>
        </Grid2>
      </Grid2>

      <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
        <Grid2 container>
          <Typography minWidth={120} fontWeight={500}>
            Created:
          </Typography>
          <Typography>{formatDate(currentCharacter.created)}</Typography>
        </Grid2>
      </Grid2>
    </Grid2>
  )
}

export default Info
