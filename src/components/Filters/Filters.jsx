import React from "react";

const Filters = () => {
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-4">Filter</div>
      <div
        style={{ cursor: "pointer" }}
        className="text-center text-decoration-underline"
      >
        Clear Filters
      </div>
    </div>
  );
};

export default Filters;
