export type CharacterPaginationData = {
  count: number
  page: number
  next: string | null
  prev: string | null
}

export type CharactersListItem = {
  name: string
  height: string
  mass: string
  skin_color: string
  eye_color: string
  url: string
  created: string
}

export type CharacterFormData = Pick<CharactersListItem, "name" | "eye_color" | "height" | "mass" | "skin_color">
