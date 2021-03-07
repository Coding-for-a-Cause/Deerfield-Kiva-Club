export type LeadershipFrontmatter = {
  name: string
  leadershipYears: string
  role: string
  email: string
  profilePicture: { childImageSharp: { fixed?: any; fluid?: any } }
}

export type Leader = {
  frontmatter: LeadershipFrontmatter
  html: string
}
