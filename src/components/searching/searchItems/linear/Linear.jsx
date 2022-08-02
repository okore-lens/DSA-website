import React, { useEffect, useState } from "react";

import "./Linear.scss";

const Linear = (props) => {
  const [inputs, setInputs] = useState([]);
  const [search, setSearch] = useState(1);
  const [results, setResults] = useState("Search a number in an array");

  useEffect(() => {
    setInputs(props.array);
  }, [props]);

  const splited = inputs.toString().trim().split(",");

  let length = splited.length;

  //   console.log(length);

  const formHandler = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  let same = [];

  const searchHandler = (e) => {
    e.preventDefault();
    let x = search;
    for (let i = 0; i < length; i++) {
      let el = +splited[i];
      if (x / el === 1) {
        same.push(i);
        console.log(same);
        setResults(`${x} was found at indexes ${same}`);
      }
    }
  };

  return (
    <div className="linear">
      <h3>Linear Search</h3>
      <p>
        We start from the beginning of the array and compare all elements with
        our desired value X untill we find a match and stop there.
      </p>
      <form className="form">
        <div className="fields">
          <input
            value={search}
            onChange={formHandler}
            placeholder="Enter digit to search"
          />
          <button onClick={searchHandler}>Search</button>
        </div>
      </form>
      <div className="results">
        <div className="values">{inputs} </div>
        <div className="output">{results}</div>
      </div>
    </div>
  );
};

export default Linear;
