import React from "react";
import ReactPaginate from "react-paginate";

import style from "./Pagination.module.css";
import Icon from "../Icon/Icon";

export interface PaginationProps {
  initialPage?: number;
  Pagination?: number;
  marginPagesDisplayed?: number;
  pageCount: number;
  pageRangeDisplayed?: number;
  onChange?: ({ selected }: { selected: number }) => void;
}

export default function Pagination({
  initialPage,
  marginPagesDisplayed,
  pageCount,
  pageRangeDisplayed,
  onChange,
}: PaginationProps) {
  return (
    <>
      <ReactPaginate
        initialPage={initialPage}
        marginPagesDisplayed={marginPagesDisplayed}
        pageCount={pageCount}
        pageRangeDisplayed={pageRangeDisplayed}
        onPageChange={onChange}
        containerClassName={style.Pagination}
        activeClassName={style.PaginationActive}
        pageLinkClassName={style.PaginationPageLink}
        breakClassName={style.PaginationBreakItem}
        nextClassName={style.PaginationNextLink}
        previousClassName={style.PaginationPrevLink}
        previousLabel={
          <>
            <Icon icon="arrow-left" size="20px" color="#d57d1f" />
          </>
        }
        nextLabel={
          <>
            <Icon icon="arrow-right" size="20px" color="#d57d1f" />
          </>
        }
      />
    </>
  );
}
