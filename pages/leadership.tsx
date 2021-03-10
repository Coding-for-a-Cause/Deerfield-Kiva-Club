import React from 'react';
import TitleLayout from '../templates/TitleLayout';
import Leader from '../components/Leader';
import { GetStaticProps } from 'next';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Leader as LeaderType } from '../types';

type LeadershipProps = {
  leaders: [LeaderType];
};

const Leadership = ({ leaders }: LeadershipProps) => {
  return (
    <TitleLayout title={'Deerfield High School KIVA Leadership Team'}>
      <div className="pad">
        {leaders.map((leader, idx) => (
          <Leader key={idx} leader={leader} />
        ))}
      </div>
    </TitleLayout>
  );
};

export default Leadership;

export const getStaticProps: GetStaticProps = async (context) => {
  const basedir = path.join(process.cwd(), 'data', 'leadership');
  const files = fs.readdirSync(basedir, 'utf-8');

  let leaders = files.map((filename) => {
    const markdownWithMetadata = fs.readFileSync(
      path.join(basedir, filename),
      'utf-8',
    );
    const parsedMarkdown = matter(markdownWithMetadata);

    return {
      contents: parsedMarkdown.content,
      data: parsedMarkdown.data,
    };
  });

  // Sort leaders so that Co-Presidents show up before sponsors
  leaders = leaders.sort((firstElem, secondElem) => {
    const order = ['Co-President', 'Sponsor'];
    return (
      order.indexOf(firstElem.data.role) - order.indexOf(secondElem.data.role)
    );
  });

  return {
    props: {
      leaders,
    },
  };
};
