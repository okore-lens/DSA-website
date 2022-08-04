import React, { useEffect, useState } from "react";

import "./Bubble.scss";

const Bubble = (props) => {
  const [inputs, setInputs] = useState([]);
  const [results, setResults] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setInputs(props.array);
  }, [props]);

  const splited = inputs.toString().split(",");
  const numbers = splited.map(Number);

  const swap = (arr, x, y) => {
    let swap = arr[x];
    arr[x] = arr[y];
    arr[y] = swap;
    // swapped = true;
    // console.log(swapped);
  };

  const bubbleSort = (arr) => {
    // let swapped;
    for (let i = 0; i < arr.length; i++) {
      //   swapped = false;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          //   console.log(swapped);
          swap(arr, i, j);

          //   if (swapped === false) {
          //     console.log("We have broken");
          //     break;
          //   }
        }
      }
    }
    setResults(arr + "");
  };

  const sortHandler = () => {
    setClicked(true);
    bubbleSort(numbers);
  };

  const codeSnippet = (
    <div className="code-snippet">
      <pre>
        <h2>Bubble Sort</h2>
        <code>
          {`
        const swap = (arr, x, y) => {
            let swap = arr[x];
            arr[x] = arr[y];
            arr[y] = swap;
          };
        
          const bubbleSort = (arr) => {
            for (let i = 0; i < arr.length; i++) {
              for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                  swap(arr, i, j);
                }
              }
            }
            setResults(arr + "");
          };
          `}
        </code>
      </pre>
    </div>
  );

  return (
    <div className="bubble">
      <h3>Bubble Sort</h3>
      <p>
        Bubble Sort is one of the simplest sorting algorithm. It works by
        repeatedly swapping adjacent elements if they are in the wrong order.
        This algorithm is not suitable for large data sets as its average and
        worst-case time complexity is quite high.
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
        <h2>Pseudocode</h2>
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

export default Bubble;
