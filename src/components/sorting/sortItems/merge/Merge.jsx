import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import "./Merge.scss";

function Merge(props) {
  const [inputs, setInputs] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [results, setResults] = useState();

  useEffect(() => {
    setInputs(props.array);
  }, [props.array]);

  let mergedArray = [];

  const mergeHandler = (a, b) => {
    let i = 0;
    let j = 0;

    while (i < a.length) {
      if (j !== b.length) {
        for (j; j < b.length; j++) {
          if (a[i] > b[j]) {
            mergedArray.push(b[j]);
          } else {
            mergedArray.push(a[i]);
          }
        }
      } else {
        mergedArray.push(a[i]);
      }
      console.log(mergedArray);
      i++;
      console.log(i, a.length);
      if (i === a.length) {
        console.log(j);
        for (j; j < b.length; j++) {
          mergedArray.push(b[j]);
          console.log("Pushed", b[j]);
        }
      }
    }
  };

  const sortHandler = () => {
    mergeHandler([4, 6, 7], [1, 2, 3, 9]);
    setClicked(true);
  };

  const codeSnippet = <div></div>;
  return (
    <div className="merge">
      <h3>Quick Sort</h3>
      <p>
        The key process in quickSort is a partition(). The target of partitions
        is, given an array and an element x of an array as the pivot, put x at
        its correct position in a sorted array and put all smaller elements
        (smaller than x) before x, and put all greater elements (greater than x)
        after x. All this should be done in linear time.
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
}

export default Merge;
