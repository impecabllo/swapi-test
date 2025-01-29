import { Grid2 } from "@mui/material"
import { useSearchParams } from "react-router"

import { DEBOUNCE_TIME, PAGE_PARAM, SEARCH_PARAM } from "@/constants"
import config from "@/config"
import API from "@/lib/api"
import { removeEmptyParams } from "@/lib/helper"

import Filters from "./Filters"
import CharactersTable from "./Table"

import { useEffect, useState, type FC } from "react"
import type { CharactersListItem, CharacterPaginationData } from "@/types/characters"

const HomePage: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [searchValue, setSearchValue] = useState<string>(searchParams.get(SEARCH_PARAM) || "")
  const [currentPage, setCurrentPage] = useState<string>(searchParams.get(PAGE_PARAM) || config.defaultPage)
  const [debouncedSearchValue, setDebouncedSearchValue] = useState<string>(() => searchValue)
  const [isLoading, setLoading] = useState<boolean>(false)
  const [items, setItems] = useState<Array<CharactersListItem>>([])
  const [paginationData, setPaginationData] = useState<CharacterPaginationData>({
    count: 0,
    page: Number(config.defaultPage),
    next: null,
    prev: null,
  })

  const getData = () => {
    const url = `${config.paths.list}?page=${currentPage}${
      debouncedSearchValue ? `&search=${debouncedSearchValue}` : ""
    }`

    setLoading(true)

    API.get(url)
      .then(({ data }) => {
        setItems(data.results)
        setPaginationData({
          count: Number(data.count),
          page: Number(currentPage),
          next: data.next,
          prev: data.prev,
        })
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchValue(searchValue)
      setCurrentPage(config.defaultPage)
    }, DEBOUNCE_TIME)

    return () => clearTimeout(timeoutId)
  }, [searchValue])

  useEffect(() => {
    const formattedFilters = removeEmptyParams({
      search: debouncedSearchValue,
      page: currentPage,
    })

    setSearchParams(formattedFilters)
  }, [debouncedSearchValue, currentPage])

  useEffect(() => {
    getData()
  }, [debouncedSearchValue, currentPage])

  return (
    <Grid2 container direction="column" rowGap={4}>
      <Grid2 size={12}>
        <Filters searchValue={searchValue} setSearchValue={setSearchValue} />
      </Grid2>

      <Grid2 size={12}>
        <CharactersTable isLoading={isLoading} items={items} paginationData={paginationData} setPage={setCurrentPage} />
      </Grid2>
    </Grid2>
  )
}

export default HomePage
