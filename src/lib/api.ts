import axios from "axios"

import { getBaseUrl } from "@/lib/helper"

const instance = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    Accept: "application/json",
  },
})

export default instance
