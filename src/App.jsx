import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import axios from "axios";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";

const App = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(api);
      console.log(data.results);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4">
        Rick & Morty <span className="text-primary">WiKi</span>
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>

          <div className="col-8">
            <div className="row">
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
