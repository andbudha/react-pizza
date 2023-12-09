// @flow
import * as React from 'react';
import styles from './AxiosError.module.css';

export const AxiosError = () => {
  return (
    <div className={styles.axios_error_box}>
      <h1>Some Error Occurred!</h1>
    </div>
  );
};
