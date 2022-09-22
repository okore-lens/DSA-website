import React, { useState, useEffect } from "react";

import "./Selection.scss";

const Selection = (props) => {
  const [inputs, setInputs] = useState([]);
  const [results, setResults] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setInputs(props.array);
  }, [props]);

  const splited = inputs.toString().split(",");
  const numbers = splited.map(Number);

  const swap = (arr, x, y) => {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  };

  const selectionSort = (arr) => {
    let n = arr.length;
    let i, j, min_idx;
    for (i = 0; i < n - 1; i++) {
      min_idx = i;
      for (j = i + 1; j < n; j++) {
        if (arr[j] < arr[min_idx]) {
          min_idx = j;
        }
      }
      if (min_idx !== i) {
        swap(arr, min_idx, i);
      }
    }

    setResults(arr + "");
  };

  const sortHandler = () => {
    setClicked(true);
    selectionSort(numbers);
  };

  const codeSnippet = (
    <div className="code-snippet">
      <pre>
        <code>
          {`
          const swap = (arr,x,y)=>{
            let swap = arr[x];
            arr[x]=arr[y];
            arr[y]=swap;
          }

          const selectionSort = (arr) => {
          let n = arr.length;
          let i, j, min_idx;
            for (i = 0; i < n - 1; i++) {
              min_idx = i;
              for (j = i + 1; j < n; j++) {
                if (arr[j] < arr[i]) {
                  min_idx = j;
                }
              }
              if (min_idx !== i) {
                swap(arr, min_idx, i);
              }
            }
          };`}
        </code>
      </pre>
    </div>
  );

  return (
    <div className="selection">
      <h3>Selelction Sort</h3>
      <p>
        Selection sort
        <br /> <br />
        Its time complexity is on avarage and worst case scenario O(n^2) even
        when the array is already sorted. Worst case scenario occurs when the
        array is reverse sorted. Best case scenario is O(N).
        <br />
        <br />
        We optimize the algorithm by stopping the algorithm if the inner loop
        did not cause any swap.
      </p>
      <div className="pseudocode">
        <h2>Algorithm</h2>
        <ul>
          <li>Pseudocode</li>
        </ul>
      </div>
      <div className="results">
        <div className="values">[ {inputs} ]</div>
        <button onClick={sortHandler}>Sort</button>
        <div className="output">{results}</div>
      </div>
      {clicked && codeSnippet}
    </div>
  );
};

export default Selection;
