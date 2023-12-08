// @flow
import * as React from 'react';
import emptyCart from '../../../../assets/img/empty-cart.png';

export const EmpyCart = (props) => {
  return (
    <div className={styles.emtycart_box}>
      <h2>Your cart is empty!</h2>
      <div className={styles.emptycart_img_box}>
        <img
          src={emptyCart}
          alt="empty cart img"
          className={styles.emptycart_img}
        />
      </div>
      <Link to="/" className="button button--outline button--add go-back-btn">
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 13L1 6.93015L6.86175 1"
            stroke="#D3D3D3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>

        <span>Back</span>
      </Link>
    </div>
  );
};
