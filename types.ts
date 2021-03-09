export type LeadershipFrontmatter = {
  name: string
  leadershipYears: string
  role: string
  email: string
  profilePicture: string
}

export type Leader = {
  data: LeadershipFrontmatter
  contents: string
}
