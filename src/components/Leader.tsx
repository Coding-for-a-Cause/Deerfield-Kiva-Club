import React from "react"
import { Leader } from "../types"
import { GatsbyImage, getImage } from "gatsby-plugin-image";

type LeaderProps = {
  leader: Leader
}

export default function LeaderComponent(props: LeaderProps) {
  const { leader } = props;
  // @ts-ignore
  const image = getImage(props.leader.frontmatter.profilePicture);
  return (
    <div className="leader">
      <div className="picture">
        <GatsbyImage image={image} alt={props.leader.frontmatter.name} />
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
