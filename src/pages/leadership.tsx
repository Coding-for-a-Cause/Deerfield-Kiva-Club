import { PageProps, graphql } from "gatsby"
import React from "react"
import Layout from "../templates/Layout"
import "../styles/leadership.scss"
import { Leader as LeaderType } from "../types"
import Leader from "../components/Leader"

const Leadership = (
  props: PageProps & { data: { allMarkdownRemark: { nodes: [LeaderType] } } }
) => {
  let leaders = props.data.allMarkdownRemark.nodes
  // Sorts the array so that Co-Presidents always show up before sponsors
  // Note: Array is already sorted by leadership years
  leaders.sort((firstEl, secondEl) => {
    const order = ["Co-President", "Sponsor"]
    return (
      order.indexOf(firstEl.frontmatter.role) -
      order.indexOf(secondEl.frontmatter.role)
    )
  })
  return (
    <Layout>
      <div className="pad">
        <h1 className="leader-header">
          Deerfield High School KIVA Leadership Team
        </h1>
        {leaders.map(leader => (
          <Leader key={leader.frontmatter.name} leader={leader} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query LeadershipQuery {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "leadership" } } }
      sort: { fields: frontmatter___leadershipYears }
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
              gatsbyImageData(width: 200, height: 200)
            }
          }
        }
      }
    }
  }
`

export default Leadership
