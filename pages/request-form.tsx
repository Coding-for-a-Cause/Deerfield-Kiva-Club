import React from 'react';
import TitleLayout from '../templates/TitleLayout';
import styles from '../styles/request-form.module.scss';

export default function RequestForm() {
  return (
    <TitleLayout title="Suggest a Loan">
      <h2 className="title--center">
        If you find an entrepreneur that you are passionate about, please enter
        their information here
      </h2>
      <div className={styles.linkMessage}>
        If the form doesn't load, you can access the form using{' '}
        <a href="https://forms.gle/eprfoMMz5R9Em5yD9">this link</a>.
      </div>
      <div className={styles.formWrapper}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSetkRIc6bz7ou1q63JS-PkUaOeCdU-t6zk9H_ivg57a43pFsQ/viewform?embedded=true"
          width="100%"
          height="781"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </div>
    </TitleLayout>
  );
}
