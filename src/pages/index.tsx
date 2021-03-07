import { PageProps } from "gatsby"
import React from "react"
import Layout from "../templates/Layout"

export default function IndexRoute(props: PageProps) {
  return (
    <Layout>
      <h1>Path</h1>
      <p>{props.path}</p>
    </Layout>
  )
}
