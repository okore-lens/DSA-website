import { useEffect, useState } from "react";

import "./Quick.scss";

const Quick = (props) => {
  const [inputs, setInputs] = useState([]);
  const [results, setResults] = useState();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setInputs(props.array);
  }, [props.array]);

  const splited = inputs.toString().split(",");

  const numbers = splited.map(Number);

  const swap = (arr, x, y) => {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  };

  let sorted = [];

  const partitioner = (arr, start = 0, end = arr.length + 1) => {
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i < arr.length; i++) {
      //   console.log(arr, "before");
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
        // console.log(arr, "inside");
      }
      //   console.log(arr, "after");
    }
    swap(arr, start, swapIdx);
    // console.log(arr, "final");
    return swapIdx;
  };

  const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
      let pivotIdx = partitioner(arr, left, right);
      // left
      quickSort(arr, left, pivotIdx - 1);
      // right
      quickSort(arr, pivotIdx + 1, right);
    }
    return (sorted = arr);
  };

  const sortHandler = () => {
    setClicked(true);
    const start = performance.now();
    quickSort(numbers);
    const end = performance.now();
    const time = end - start;
    console.log(sorted, time);
    setResults(`${sorted + ""} :: Time taken is ${time}`);
  };

  const codeSnippet = (
    <div className="code-snippet">
      <pre>
        <code>{`
      const swap = (arr, x, y) => {
        let temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
      };
    
      const partitioner = (arr, start = 0, end = arr.length + 1) => {
        let pivot = arr[start];
        let swapIdx = start;
    
        for (let i = start + 1; i < arr.length; i++) {
          console.log(arr, "before");
          if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
            console.log(arr, "inside");
          }
          console.log(arr, "after");
        }
        swap(arr, start, swapIdx);
        console.log(arr, "final");
        return swapIdx;
      };
    
      const quickSort = (arr, left = 0, right = arr.length - 1) => {
        if (left < right) {
          let pivotIdx = partitioner(arr, left, right);
          // left
          quickSort(arr, left, pivotIdx - 1);
          // right
          quickSort(arr, pivotIdx + 1, right);
        }
        return arr;
      };

      const arr = [4,3,5,1,7,8,2,9,11]
      const start = perfomance.now()
      quickSort(arr);
      const end = perfomance.now()
      const time = end -start
      console.log("Sorted array:",arr,"Time taken",time)
    
    `}</code>
      </pre>
    </div>
  );
  return (
    <div className="quick">
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
};

export default Quick;
