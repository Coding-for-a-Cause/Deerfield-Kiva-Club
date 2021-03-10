import React from 'react';
import TitleLayout from '../templates/TitleLayout';
import EmailList from "../components/EmailList";

export default function JoinUs() {
  return (
    <TitleLayout title="Join Us">
      <div className="container pad join-form">
        <div style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <EmailList />
        </div>
      </div>
    </TitleLayout>
  );
}
