import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import axios from "axios";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";

const App = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [getData, updateGetData] = useState([]);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;
  let { info, results } = getData;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(api);
      updateGetData(data);
    };
    fetchData();
  }, [api]);

  return (
    <div classNameName="App">
      <h1 classNameName="text-center ubuntu my-4">
        Rick & Morty <span classNameName="text-primary">Universe</span>
      </h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div classNameName="container">
        <div classNameName="row">
          <Filters />

          <div classNameName="col-8">
            <div classNameName="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};

export default App;
