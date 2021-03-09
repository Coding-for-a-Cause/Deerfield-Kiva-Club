import React from "react"

import Footer from "../components/Footer"
import Header from "../components/Header"
import "../styles/styles.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
