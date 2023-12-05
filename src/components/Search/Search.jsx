import * as React from 'react';
import styles from './Search.module.css';
import { IoIosSearch, IoMdClose } from 'react-icons/io';
import { AppContext } from '../../App';

export const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(AppContext);
  const inputRef = React.useRef();
  const clearInputHandler = () => {
    setSearchValue('');
    inputRef.current.focus();
  };
  return (
    <div className={styles.search_box}>
      <IoIosSearch className={styles.search_icon} />
      <input
        ref={inputRef}
        value={searchValue}
        autoFocus
        onChange={(event) => setSearchValue(event.currentTarget.value)}
        className={styles.search_input}
        type="text"
        placeholder="Search..."
      />
      {searchValue && (
        <IoMdClose className={styles.close_icon} onClick={clearInputHandler} />
      )}
    </div>
  );
};
