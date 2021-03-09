import React from "react"
import Layout from "./Layout"

type TitleLayoutProps = {
  children: any
  title: string
}

const TitleLayout = ({ children, title }: TitleLayoutProps) => {
  return (
    <>
      <Layout>
        <div className="page-title">
          <div className="pad">
            <h1>{title}</h1>
          </div>
        </div>
        {children}
      </Layout>
    </>
  )
}

export default TitleLayout
