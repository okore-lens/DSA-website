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
    for (let i = arr.length; i > 0; i--) {
      //   swapped = false;
      let j;
      for (j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);

          //   if (swapped === false) {
          //     console.log("We have broken");
          //     break;
          //   }
        }
        console.log(arr, arr[j], arr[j + 1]);
      }
      console.log(arr, arr[j], arr[j + 1]);
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

          //ES2015
          const swap =(arr,x,y)=>{
            [arr[x],arr[y]] = [arr[y],arr[x]];
          }
        
          const bubbleSort = (arr) => {
            for (let i = 0; i < arr.length-1; i++) {
              for (let j = 0; j < arr.length; j++) {
                if (arr[j] > arr[j+1]) {
                  swap(arr, j, j+1);
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
        <h2>Algorithm</h2>
        <ul>
          <li>Define a function taking an array as a parameter</li>
          <li>
            Loop through the array in the function from the start to the end
            with a variable i
          </li>
          <li>
            Take a nested loop and loop through the arrays from the beginning
            until its variable j is less than i-1
          </li>
          <li>If arr[i] &gt; arr[j], swap them</li>
          <li>Return sorted array</li>
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
