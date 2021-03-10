import React from 'react';
import styles from "../styles/form.module.scss";

export default function EmailList() {
  return (
    <form
      name="join-us"
      data-netlify="true"
      method="POST"
      className={styles.form}
    >
      <p className={styles.formTitle}>
        Sign up for the email list to get reminders of when meetings will happen
        and other KIVA events.
      </p>
      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
}
