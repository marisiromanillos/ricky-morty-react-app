import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-2 my-4"
      forcePage={pageNumber === 1 ? 0 : -1}
      nextLabel="Next"
      previousLabel="Previous"
      nextClassName="btn btn-dark"
      previousClassName="btn btn-dark"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
      pageCount={info?.pages}
    />
  );
};

export default Pagination;
