// @flow
import * as React from 'react';
import styles from './EmptyCart.module.css';
import emptyCart from '../../../../assets/img/empty-cart.png';
import { Link } from 'react-router-dom';

export const EmpyCart = (props) => {
  return (
    <div className={styles.emtycart_box}>
      <h2>Your Cart Is Empty</h2>
      <div className={styles.emptycart_img_box}>
        <img
          src={emptyCart}
          alt="empty cart img"
          className={styles.emptycart_img}
        />
      </div>
      <Link to="/">
        <button className={styles.back_btn}>{`Main`}</button>
      </Link>
    </div>
  );
};
