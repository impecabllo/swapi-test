import { Grid2, TextField } from "@mui/material"

import { ChangeEvent, useCallback, type FC } from "react"

type Props = {
  searchValue: string
  setSearchValue: (newSearch: string) => void
}

const Filters: FC<Props> = ({ searchValue, setSearchValue }) => {
  const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }, [])

  return (
    <Grid2 container>
      <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
        <TextField
          value={searchValue}
          onChange={handleSearchChange}
          size="small"
          fullWidth
          placeholder="Search by character name"
          label="Search by character name"
        />
      </Grid2>
    </Grid2>
  )
}

export default Filters
