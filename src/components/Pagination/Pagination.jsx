import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return (
    <ReactPaginate
      classNameName="pagination justify-content-center gap-2 my-4"
      forcePage={pageNumber === 1 ? 0 : -1}
      nextLabel="Next"
      previousLabel="Previous"
      nextclassNameName="btn btn-dark"
      previousclassNameName="btn btn-dark"
      pageclassNameName="page-item"
      pageLinkclassNameName="page-link"
      activeclassNameName="active"
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
      pageCount={info?.pages}
    />
  );
};

export default Pagination;
