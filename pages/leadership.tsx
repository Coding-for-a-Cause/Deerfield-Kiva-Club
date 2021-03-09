import React from "react"
import TitleLayout from "../templates/TitleLayout"
import Leader from "../components/Leader"

const Leadership = () => {
  let leaders = [
    {
      name: "Zack Greco",
      role: "Co-President",
      leadershipYears: "2020-2021",
      html: "",
    },
  ]
  return (
    <TitleLayout title={"Deerfield High School KIVA Leadership Team"}>
      <div className="pad">
        {leaders.map((leader, idx) => (
          <Leader key={idx} leader={leader} />
        ))}
      </div>
    </TitleLayout>
  )
}

export default Leadership
