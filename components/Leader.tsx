import React from 'react';
import { Leader as LeaderType } from '../types';

type LeaderComponentProps = {
  leader: LeaderType
}

export default function LeaderComponent({ leader }: LeaderComponentProps) {
  return (
    <div className="leader">
      <div className="picture">
        <img src={leader.data.profilePicture} alt={leader.data.name} />
      </div>
      <div className="content">
        <h1>
          {leader.data.name}, {leader.data.role}
        </h1>
        <h2>{leader.data.leadershipYears}</h2>
        <p dangerouslySetInnerHTML={{ __html: leader.contents }}></p>
      </div>
    </div>
  );
}
