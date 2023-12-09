// @flow
import * as React from 'react';
import styles from './AxiosError.module.css';
import errImage from '../../assets/img/error.jpg';

export const AxiosError = () => {
  return (
    <div className={styles.axios_error_box}>
      <h1>Sorry, Some Error Occurred</h1>
      <h2>Try again later, please...</h2>
      <img className={styles.err_img} src={errImage} />
    </div>
  );
};
