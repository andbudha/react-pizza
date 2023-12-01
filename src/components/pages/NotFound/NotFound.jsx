// @flow
import * as React from 'react';
import styles from './NotFound.module.css';

export const NotFound = (props) => {
  return (
    <div className={styles.not_found_box}>
      <h1>404</h1>
      <h3>Page not found... :( </h3>
    </div>
  );
};
