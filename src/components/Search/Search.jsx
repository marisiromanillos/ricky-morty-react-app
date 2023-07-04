import React from "react";
import styles from "./Search.module.css";

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form className="d-flex justify-content-center gap-4 my-5">
      <input
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for Characters"
        type="text"
        className={styles.input}
      />
      <button
        onClick={(e) => {
          e.preventDefault;
        }}
        className="btn btn-dark"
      >
        Search
      </button>
    </form>
  );
};

export default Search;

// listen to submit event & then prevent default behaviour
