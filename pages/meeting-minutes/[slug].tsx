import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import TitleLayout from '../../templates/TitleLayout';
import fs from 'fs';
import path from 'path';
import { meetingMinutesDirectory } from '../../constants';
import showdown from 'showdown';
import matter from 'gray-matter';
import { serializeFrontmatter } from '../../utils';
import { MeetingMinute } from '../../types';

type MeetingMinutePageProps = {
  meetingMinute: MeetingMinute;
};

export default function MeetingMinutePage(props: MeetingMinutePageProps) {
  const { meetingMinute } = props;
  return (
    <TitleLayout title={meetingMinute.data.title}>
      <article
        className="pad"
        dangerouslySetInnerHTML={{ __html: meetingMinute.html }}
      ></article>
    </TitleLayout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const filename = `${params.slug}.md`;
  const markdownWithMetadata = fs.readFileSync(
    path.join(meetingMinutesDirectory, filename),
    'utf-8',
  );

  const parsedMarkdown = matter(markdownWithMetadata);
  const converter = new showdown.Converter();
  const html = converter.makeHtml(parsedMarkdown.content);

  return {
    props: {
      meetingMinute: {
        html,
        contents: parsedMarkdown.content,
        data: serializeFrontmatter(parsedMarkdown.data),
        slug: params.slug,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const filenames = fs.readdirSync(meetingMinutesDirectory, 'utf-8');
  return {
    paths: filenames.map((filename) => ({
      params: { slug: filename.replace(/\.mdx?/, '') },
    })),
    fallback: false,
  };
};
