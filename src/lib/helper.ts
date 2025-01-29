import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"

dayjs.extend(utc)

type ParamValue = number | string | Array<string> | undefined | boolean | null

export type Params = {
  [key: string]: ParamValue
}

export const getBaseUrl = () => {
  return "https://swapi.dev/api"
}

export const removeEmptyParams = (query: Params, allowEmpty: Array<string> = []) => {
  return Object.keys(query).reduce(
    (acc, param) =>
      typeof query[param] !== "boolean" && (!query[param] || query[param] === "unset") && !allowEmpty.includes(param)
        ? acc
        : { ...acc, [param]: query[param] },
    {}
  )
}

export const formatDate = (date: string | Date) => {
  return date ? dayjs(date).utc().format("MM.DD.YYYY HH:mm") : "No date"
}
