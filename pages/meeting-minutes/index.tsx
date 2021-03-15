import React from 'react';
import { GetStaticProps } from 'next';
import { meetingMinutesDirectory } from '../../constants';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MeetingMinute } from '../../types';
import TitleLayout from '../../templates/TitleLayout';
import showdown from 'showdown';
import { serializeFrontmatter } from '../../utils';
import Link from 'next/link';
import styles from '../../styles/meetingMinute.module.scss';

type MeetingMinutesIndexProps = {
  meetingMinutes: [MeetingMinute];
};

const MeetingMinutes = (props: MeetingMinutesIndexProps) => {
  return (
    <TitleLayout title="Meeting Minutes">
      <div style={{ paddingTop: '2rem' }}></div>
      {props.meetingMinutes.map((meetingMinute) => {
        return (
          <div key={meetingMinute.data.title} className="pad">
            <div className={styles.mmList}>
              <h1>{meetingMinute.data.title}</h1>
              <h3>{meetingMinute.data.date}</h3>
              <Link href={`/meeting-minutes/${meetingMinute.slug}`}>
                <a>
                  <p>Read more</p>
                </a>
              </Link>
            </div>
          </div>
        );
      })}
    </TitleLayout>
  );
};

export default MeetingMinutes;

export const getStaticProps: GetStaticProps = async () => {
  const filenames = fs.readdirSync(meetingMinutesDirectory, 'utf-8');

  const meetingMinutes = filenames.map((filename) => {
    const markdownWithMetadata = fs.readFileSync(
      path.join(meetingMinutesDirectory, filename),
      'utf-8',
    );
    const parsedMarkdown = matter(markdownWithMetadata);

    const converter = new showdown.Converter();
    const html = converter.makeHtml(parsedMarkdown.content);

    return {
      contents: parsedMarkdown.content,
      data: serializeFrontmatter(parsedMarkdown.data),
      slug: filename.replace(/\.mdx?/, ''),
      html,
    };
  });

  return {
    props: {
      meetingMinutes,
    },
  };
};