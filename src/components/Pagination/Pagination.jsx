import * as React from 'react';
import styles from './Pagination.module.css';
import ReactPaginate from 'react-paginate';

export const Pagination = () => {
  return (
    <div className={styles.paginator_box}>
      <ReactPaginate
        className={styles.paginator_list}
        breakLabel="..."
        nextLabel=" >"
        onPageChange={(event) => console.log(event)}
        pageRangeDisplayed={5}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
