import React, { useEffect, useState } from "react";

import "./Naive.scss";

const Native = (props) => {
  const [inputs, setInputs] = useState([]);
  const [results, setResults] = useState();
  const [search, setSearch] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setInputs(props.array);
  }, [props]);

  const formHandler = (event) => {
    const text = event.target.value;
    setSearch(text);
  };

  let indeces = [];

  const naiveSearch = (arr, txt) => {
    let arrLength = arr.length;
    let txtLength = txt.length;
    for (let i = 0; i <= arrLength - txtLength; i++) {
      let j;
      for (j = 0; j < txtLength; j++) {
        if (arr[i + j] !== txt[j]) {
          break;
        }
      }
      if (j === txtLength) {
        indeces.push(i);
      }
    }
  };

  const searchHandler = (ev) => {
    ev.preventDefault();
    setClicked(true);
    naiveSearch(inputs, search);
    setResults("Found at index " + indeces);
  };

  const codeSnippet = (
    <div className="code-snippet">
      <pre>
        <h2>Naive Search</h2>
        <code>{`
        let indeces = [];

        const naiveSearch = (arr, txt) => {
          let arrLength = arr.length;
          let txtLength = txt.length;
          for (let i = 0; i <= arrLength - txtLength; i++) {
            let j;
            for (j = 0; j < txtLength; j++) {
              if (arr[i + j] != txt[j]) {
                break;
              }
            }
            if (j == txtLength) {
              indeces.push(i);
            }
          }
        };

        let text = ["LensLens"];
        let pattern = ["Le"];

        naiveSearch(text,pattern);

        console.log(indices); // 0,4
      
        `}</code>
      </pre>
    </div>
  );

  return (
    <div className="naive">
      <h3>Binary Search</h3>
      <p>
        Slide the pattern over text one by one and check for a match. If a match
        is found, then slide by 1 again to check for subsequent matches.
        <br /> <br />
        Number of comparisons in the best case scenario is O(n) while in the
        worst case scenario it is O(m*(n-m+1))
      </p>
      <form className="form">
        <div className="fields">
          <input
            value={search}
            onChange={formHandler}
            placeholder="Enter pattern to search"
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

export default Native;
