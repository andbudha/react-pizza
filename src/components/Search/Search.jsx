import * as React from 'react';
import styles from './Search.module.css';
import { IoIosSearch, IoMdClose } from 'react-icons/io';

export const Search = (props) => {
  return (
    <div className={styles.search_box}>
      <IoIosSearch className={styles.search_icon} />
      <input
        className={styles.search_input}
        type="text"
        placeholder="Search..."
      />
      <IoMdClose className={styles.close_icon} />
    </div>
  );
};
