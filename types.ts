export type LeadershipFrontmatter = {
  name: string;
  leadershipYears: string;
  role: string;
  email: string;
  profilePicture: string;
};

export type Leader = {
  data: LeadershipFrontmatter;
  contents: string;
  html?: string;
};

export type MeetingMinutesFrontmatter = {
  title: string;
  date: string;
  [key: string]: any;
};

export type MeetingMinute = {
  contents: string;
  data: MeetingMinutesFrontmatter;
  slug: string;
  html: string;
};
