import React from "react"

export default function LeaderComponent({ leader }) {
  return (
    <div className="leader">
      <div className="picture">
        {/* <GatsbyImage image={image} alt={props.leader.frontmatter.name} /> */}
      </div>
      <div className="content">
        <h1>
          {leader.name}, {leader.role}
        </h1>
        <h2>{leader.leadershipYears}</h2>
        <p dangerouslySetInnerHTML={{ __html: leader.html }}></p>
      </div>
    </div>
  )
}
