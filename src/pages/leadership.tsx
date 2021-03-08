import { PageProps, graphql } from "gatsby"
import React from "react"
import Layout from "../templates/Layout"
import "../styles/leadership.scss"
import { Leader as LeaderType } from "../types"
import Leader from "../components/Leader"

const Leadership = (
  props: PageProps & { data: { allMarkdownRemark: { nodes: [LeaderType] } } }
) => {
  const leaders = props.data.allMarkdownRemark.nodes
  return (
    <Layout>
      <h1 className="leader-header">Deerfield High School KIVA Leadership Team</h1>
      {leaders.map(leader => (
        <Leader key={leader.frontmatter.name} leader={leader} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query LeadershipQuery {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "leadership" } } }
    ) {
      nodes {
        html
        frontmatter {
          email
          leadershipYears
          name
          role
          profilePicture {
            childImageSharp {
              gatsbyImageData(width: 200, height:200)
            }
          }
        }
      }
    }
  }
`

export default Leadership
