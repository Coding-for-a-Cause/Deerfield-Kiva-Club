export type LeadershipFrontmatter = {
  name: string
  leadershipYears: string
  role: string
  email: string
  profilePicture: { childImageSharp: { gatsbyImageData: any } }
}

export type Leader = {
  frontmatter: LeadershipFrontmatter
  html: string
}
