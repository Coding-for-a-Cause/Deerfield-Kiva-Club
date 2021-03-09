import React from "react"
import { Link } from "gatsby"

export default function ErrorPage() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>404</h1>
      <h1>Something went wrong</h1>
      <Link to="/">
        <p>Go back to home</p>
      </Link>
    </div>
  )
}
