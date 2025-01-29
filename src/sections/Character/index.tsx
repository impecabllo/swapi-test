import { Breadcrumbs, FormControlLabel, Grid2, Link, Paper, Skeleton, Switch, Typography } from "@mui/material"
import { Navigate, useParams, Link as RouterLink } from "react-router"

import config from "@/config"
import API from "@/lib/api"
import { HOMEPAGE_ROUTE } from "@/routes"

import CharacterForm from "./Form"
import CharacterInfo from "./Info"

import { useEffect, useState, type FC } from "react"
import type { CharactersListItem, CharacterFormData } from "@/types/characters"

type Params = {
  characterId: string
}

const Character: FC = () => {
  const { characterId } = useParams<Params>()

  const [currentCharacter, setCurrentCharacter] = useState<CharactersListItem | null>(null)
  const [formData, setFormData] = useState<CharacterFormData>({
    name: "",
    height: "",
    mass: "",
    skin_color: "",
    eye_color: "",
  })
  const [isEdit, setEdit] = useState<boolean>(false)
  const [isLoading, setLoading] = useState<boolean>(false)

  const handleSubmit = () => {
    setEdit(false)

    // send api request to update the character, update info after success
  }

  useEffect(() => {
    if (currentCharacter?.name || (isEdit && currentCharacter)) {
      setFormData({
        name: currentCharacter.name,
        height: currentCharacter.height,
        mass: currentCharacter.mass,
        skin_color: currentCharacter.skin_color,
        eye_color: currentCharacter.eye_color,
      })
    }
  }, [currentCharacter, isEdit])

  useEffect(() => {
    if (characterId) {
      setLoading(true)

      API.get(config.paths.character(characterId))
        .then(({ data }) => setCurrentCharacter(data))
        .finally(() => setLoading(false))
    }
  }, [characterId])

  if (!characterId) {
    return <Navigate to={HOMEPAGE_ROUTE} replace />
  }

  return (
    <Grid2 container direction="column" rowGap={4}>
      <Grid2 container size={12} alignItems="center" justifyContent="space-between">
        <Grid2>
          <Breadcrumbs>
            <Link underline="hover" color="inherit" to={HOMEPAGE_ROUTE} component={RouterLink}>
              Characters list
            </Link>
            <Typography sx={{ color: "text.primary" }}>Character #{characterId}</Typography>
          </Breadcrumbs>
        </Grid2>
        <Grid2>
          <FormControlLabel control={<Switch checked={isEdit} onChange={() => setEdit(!isEdit)} />} label="Is edit" />
        </Grid2>
      </Grid2>

      {isLoading ? (
        <Skeleton variant="rounded" height={600} />
      ) : (
        <Grid2 size={12}>
          <Paper elevation={3}>
            {isEdit ? (
              <CharacterForm data={formData} setData={setFormData} onSubmit={handleSubmit} />
            ) : (
              <CharacterInfo currentCharacter={currentCharacter} />
            )}
          </Paper>
        </Grid2>
      )}
    </Grid2>
  )
}

export default Character
