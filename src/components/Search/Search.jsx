import * as React from 'react';
import styles from './Search.module.css';
import { IoIosSearch, IoMdClose } from 'react-icons/io';
import { AppContext } from '../../App';

export const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(AppContext);
  return (
    <div className={styles.search_box}>
      <IoIosSearch className={styles.search_icon} />
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.currentTarget.value)}
        className={styles.search_input}
        type="text"
        placeholder="Search..."
      />
      {searchValue && (
        <IoMdClose
          className={styles.close_icon}
          onClick={() => setSearchValue('')}
        />
      )}
    </div>
  );
};
