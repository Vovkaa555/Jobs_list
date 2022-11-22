import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

type PaginationProps = {
  onChangePage: (page: number) => void ;
}

const Pagination: React.FC<PaginationProps> = ({ onChangePage }) => {
  return (
    <div className={styles.root}>
      <ReactPaginate
        containerClassName={styles.pagination}
        previousLabel="<"
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={15}
        marginPagesDisplayed={2}
        pageCount={3}
        activeClassName={styles.active}
        nextClassName={styles.page_next}
        pageClassName={styles.page}
        previousClassName={styles.page_previous}
      />
    </div>
  );
};

export default Pagination;
