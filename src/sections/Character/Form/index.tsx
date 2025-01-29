import { Button, Grid2, TextField } from "@mui/material"

import type { CharacterFormData } from "@/types/characters"
import type { FC } from "react"

type Props = {
  data: CharacterFormData
  setData: (newData: CharacterFormData) => void
  onSubmit: () => void
}

const Form: FC<Props> = ({ data, setData, onSubmit }) => {
  const handleChangeValue = (field: keyof CharacterFormData, value: string) => {
    setData({
      ...data,
      [field]: value,
    })
  }

  return (
    <Grid2 container p={3} rowGap={3} spacing={2}>
      <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
        <TextField
          size="small"
          value={data.name}
          label="Name"
          onChange={e => handleChangeValue("name", e.target.value)}
          fullWidth
        />
      </Grid2>

      <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
        <TextField
          size="small"
          value={data.height}
          label="Height"
          onChange={e => handleChangeValue("height", e.target.value)}
          fullWidth
        />
      </Grid2>

      <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
        <TextField
          size="small"
          value={data.mass}
          label="Mass"
          onChange={e => handleChangeValue("mass", e.target.value)}
          fullWidth
        />
      </Grid2>

      <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
        <TextField
          size="small"
          value={data.skin_color}
          label="Skin color"
          onChange={e => handleChangeValue("skin_color", e.target.value)}
          fullWidth
        />
      </Grid2>

      <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
        <TextField
          size="small"
          value={data.eye_color}
          label="Eye color"
          onChange={e => handleChangeValue("eye_color", e.target.value)}
          fullWidth
        />
      </Grid2>

      <Grid2 size={12}>
        <Button sx={{ width: 140 }} onClick={onSubmit} variant="contained">
          Update
        </Button>
      </Grid2>
    </Grid2>
  )
}

export default Form
