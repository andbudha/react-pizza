import * as React from 'react';
import styles from './Search.module.css';
import { IoIosSearch, IoMdClose } from 'react-icons/io';
import { AppContext } from '../../App';
import debounce from 'lodash.debounce';

export const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(AppContext);
  const [localInputValue, setLocalInputValue] = React.useState('');
  const inputRef = React.useRef();
  const clearInputHandler = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  const delaySettingSearchValue = React.useCallback(
    debounce((str) => setSearchValue(str), 500),
    []
  );
  const setSearchValueHandler = (event) => {
    setLocalInputValue(event.currentTarget.value);
    delaySettingSearchValue(event.currentTarget.value);
  };
  return (
    <div className={styles.search_box}>
      <IoIosSearch className={styles.search_icon} />
      <input
        ref={inputRef}
        value={localInputValue}
        autoFocus
        onChange={setSearchValueHandler}
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
