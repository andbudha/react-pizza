import * as React from 'react';
import styles from './Search.module.css';
import { IoIosSearch, IoMdClose } from 'react-icons/io';
import debounce from 'lodash.debounce';
import { searchValueSelector } from '../../redux/Selectors/Selectors';
import { useSelector } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice.ts';
import { AppRootState, useAppDispatch } from '../../redux/store.tsx';

export const Search = () => {
  const [localInputValue, setLocalInputValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);
  const searchValue = useSelector<AppRootState, string>(searchValueSelector);
  const dispatch = useAppDispatch();

  const clearInputHandler = () => {
    dispatch(setSearchValue({ value: '' }));
    setLocalInputValue('');
    inputRef.current?.focus();
  };

  const delaySettingSearchValue = React.useCallback(
    debounce((str: string) => dispatch(setSearchValue({ value: str })), 500),
    []
  );
  const setSearchValueHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
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
