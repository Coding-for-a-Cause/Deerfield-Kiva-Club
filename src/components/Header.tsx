import React, { useEffect, useState } from "react"
import Navbar from "./Navbar"

const Header = () => {
  const [page, setPage] = useState("")
  useEffect(() => {
    const pageName = location.pathname.match(/[A-z]{1,}[^#?\/\.]/gi) || [""] // Pull page name from url path.
    setPage(pageName[0])
    console.log(pageName[0])
  }, [page])
  return (
    <header>
      <Navbar page={page} />
    </header>
  )
}

export default Header
