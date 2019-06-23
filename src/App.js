import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Pages/Home";
import BeerDetails from "./Pages/BeerDetails";

import "./App.css";

import { _API_ENDPOINT } from "./Utils/constants";

function App() {
  // Beer data array
  const [beerData, setData] = useState({ data: [], isFetching: false });
  const [pageNumber, setPage] = useState(1);

  // ComponentDidMount fetch request
  useEffect(() => {
    async function fetchData() {
      try {
        setData({ data: beerData.data, isFetching: true });
        const restApiResp = await fetch(`${_API_ENDPOINT}?per_page=80&page=${pageNumber}`);
        const restApiRespJson = await restApiResp.json();

        setData({ data: [...beerData.data, ...restApiRespJson], isFetching: true });

        if (pageNumber === 5) {
          setData({ data: [...beerData.data, ...restApiRespJson], isFetching: false });
        }
        if (pageNumber <= 5) {
          setPage(pageNumber + 1);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  function sortData(sortBy, invert, data) {
    function compare(invert, sortBy) {
      return function(a, b) {
        if (!a.hasOwnProperty(sortBy) || !b.hasOwnProperty(sortBy)) {
          // property doesn't exist on either object
          return 0;
        }

        const varA = typeof a[sortBy] === "string" ? a[sortBy].toUpperCase() : a[sortBy];
        const varB = typeof b[sortBy] === "string" ? b[sortBy].toUpperCase() : b[sortBy];

        let comparison = 0;

        if (varA > varB) {
          comparison = 1;
        } else if (varA < varB) {
          comparison = -1;
        }
        return invert === true ? comparison * -1 : comparison;
      };
    }

    return data.sort(compare(invert, sortBy));
  }

  return (
    <Router>
      <div className="App">
        <Route
          exact
          path="/"
          render={routeProps => (
            <>
              {/* ToDo make its own component */}
              <select
                defaultValue="default"
                className="App-select"
                onChange={e => {
                  // ToDo Not optimal and verbose, refactor
                  return e.target.value === "nameasc"
                    ? setData({ data: sortData("name", false, beerData.data), isFetching: false })
                    : e.target.value === "namedsc"
                    ? setData({ data: sortData("name", true, beerData.data), isFetching: false })
                    : e.target.value === "abvasc"
                    ? setData({ data: sortData("abv", false, beerData.data), isFetching: false })
                    : e.target.value === "abvdsc"
                    ? setData({ data: sortData("abv", true, beerData.data), isFetching: false })
                    : "";
                }}
              >
                <option value="default" disabled hidden>
                  Choose here
                </option>
                <option value="nameasc">name asc</option>
                <option value="namedsc">name desc</option>
                <option value="abvasc">abv asc</option>
                <option value="abvdsc">abv desc</option>
              </select>
              <Home {...routeProps} beerData={beerData.data} />
            </>
          )}
        />
        <Route
          path={"/:id"}
          render={routeProps => <BeerDetails {...routeProps} beerData={beerData.data} />}
        />
      </div>
    </Router>
  );
}

export default App;
