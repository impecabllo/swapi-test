import { Navigate, Route, Routes } from "react-router"

import Layout from "@/components/Layout"
import { CHARACTER_ROUTE, HOMEPAGE_ROUTE } from "@/routes"

import HomePage from "../Home"
import Character from "../Character"

import type { FC } from "react"

const App: FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="*" element={<Navigate to={HOMEPAGE_ROUTE} />} />

        <Route index element={<HomePage />} path={HOMEPAGE_ROUTE} />
        <Route element={<Character />} path={CHARACTER_ROUTE} />
      </Route>
    </Routes>
  )
}

export default App
