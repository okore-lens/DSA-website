import React, { useEffect, useState } from "react";

import "./Linear.scss";

const Linear = (props) => {
  const [inputs, setInputs] = useState([]);
  const [search, setSearch] = useState(1);
  const [results, setResults] = useState("Search a number in an array");
  const [clicked, setClicked] = useState(false);
  // const []

  useEffect(() => {
    setInputs(props.array);
  }, [props]);

  const splited = inputs.toString().split(",");
  const numbers = splited.map(Number);

  let length = numbers.length;

  const formHandler = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  let same = [];

  const linearSearch = (arr, x) => {
    let i;
    for (i = 0; i < length; i++) {
      let el = arr[i];
      if (x / el === 1) {
        same.push(i);
        return;
      }
    }
    return alert("Not found in the array");
  };

  const searchHandler = (e) => {
    e.preventDefault();
    setClicked(true);
    let start = performance.now();
    console.log(start);
    linearSearch(splited, search);
    let end = performance.now();
    console.log(end);
    let time = end - start;
    setResults(
      `${search} was found at indexes ${same}. Time in milliseconds ${time}`
    );
  };

  const codeSnippet = (
    <div className="code-snippet">
      <pre>
        <h2>Linear Search</h2>
        <code>
          {`
        let same = [];

        const linearSearch = (arr, x) => {
          let i;
          for (i = 0; i < length; i++) {
            let el = arr[i];
            console.log(el);
            if (x / el === 1) {
              same.push(i);
              return
            }
          }
          console.log(x , 'found at indexes' ,result)
        };
        
        linearSearch([2,3,4,3,5],3)

        // Output 3 found at indexes [1,3]
          `}
        </code>
      </pre>
    </div>
  );

  return (
    <div className="linear">
      <h3>Linear Search</h3>
      <p>
        We start from the beginning of the array and compare all elements with
        our desired value X untill we find a match and stop there.Returns the
        first match in the array <br />
        <br />
        Has a time complexity of O(n) on avarage and worst case scenarios. Best
        case scenario is O(1).
        <br /> <br />
        In Javascript array functions, indexOf, includes, find, findIndex all
        perform a linear search
      </p>
      <div className="pseudocode">
        <h2>Algorithm</h2>
        <ul>
          <li>A function that accepts an array and a value</li>
          <li>
            Loop through the array checking if the current array element is
            equal to the value
          </li>
          <li>Return its index if the elements is found</li>
        </ul>
      </div>
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
      {clicked && codeSnippet}
    </div>
  );
};

export default Linear;
