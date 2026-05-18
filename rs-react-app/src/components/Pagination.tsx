import type { JSX } from 'react';

type PaginationProps = {
  pageNumber: number;
  totalPages: number;
  firstPage: boolean;
  lastPage: boolean;
  onClickNext: () => void;
  onCLickPrev: () => void;
};

export const Pagination = (props: PaginationProps): JSX.Element => {
  return (
    <div className="pagination">
      <button disabled={props.firstPage} onClick={props.onCLickPrev}>
        &lt;
      </button>
      <div>page: {props.pageNumber}</div>
      <div>total pages: {props.totalPages}</div>
      <button disabled={props.lastPage} onClick={props.onClickNext}>
        &gt;
      </button>
    </div>
  );
};
