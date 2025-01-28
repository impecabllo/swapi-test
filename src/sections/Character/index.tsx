import { Navigate, useParams } from "react-router"

import { HOMEPAGE_ROUTE } from "@/routes"

import type { FC } from "react"

type Params = {
  characterId: string
}

const Character: FC = () => {
  const { characterId } = useParams<Params>()

  if (!characterId) {
    return <Navigate to={HOMEPAGE_ROUTE} replace />
  }

  return <div>Character {characterId}</div>
}

export default Character
