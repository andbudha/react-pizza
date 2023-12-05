import * as React from 'react';
import styles from './Pagination.module.css';
import ReactPaginate from 'react-paginate';

export const Pagination = ({ setSelectedPageHandler }) => {
  return (
    <div className={styles.paginator_box}>
      <ReactPaginate
        className={styles.paginator_list}
        breakLabel="..."
        nextLabel=" >"
        onPageChange={(event) => setSelectedPageHandler(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
