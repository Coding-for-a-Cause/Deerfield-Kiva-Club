import React from "react"
import { Leader } from "../types"
import Img from "gatsby-image"

type LeaderProps = {
  leader: Leader
}

export default function LeaderComponent(props: LeaderProps) {
  const { leader } = props
  return (
    <div className="leader">
      <div className="picture">
        <Img
          fixed={leader.frontmatter.profilePicture.childImageSharp.fixed}
        ></Img>
      </div>
      <div className="content">
        <h1>
          {leader.frontmatter.name}, {leader.frontmatter.role}
        </h1>
        <h2>{leader.frontmatter.leadershipYears}</h2>
        <p dangerouslySetInnerHTML={{ __html: leader.html }}></p>
      </div>
    </div>
  )
}
