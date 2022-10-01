import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import "./Merge.scss";

function Merge(props) {
  const [inputs, setInputs] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [results, setResults] = useState([]);
  const [ordered, setOrdered] = useState([]);

  useEffect(() => {
    setInputs(props.array);
  }, [props.array]);

  const splited = inputs.toString().split(",");

  const numbers = splited.map(Number);

  const mergeHandler = (arr1, arr2) => {
    const sorted = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
      if (arr2[j] > arr1[i]) {
        sorted.push(arr1[i]);
        i++;
      } else {
        sorted.push(arr2[j]);
        j++;
      }
    }
    while (i < arr1.length) {
      sorted.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      sorted.push(arr2[j]);
      j++;
    }

    setOrdered(sorted);

    return sorted;
  };

  const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let rigth = mergeSort(arr.slice(mid));

    return mergeHandler(left, rigth);
  };

  const sortHandler = () => {
    const start = performance.now();
    mergeSort(numbers);
    const end = performance.now();
    const time = (end - start) / 1000;
    setResults(`${ordered + ""} :: Time taken is ${time}`);
    setClicked(true);
  };

  const codeSnippet = (
    <div className="code-snippet">
      <pre>
        <code>{`
  const mergeFunction = (arr1,arr2)=>{
    const mergedArray = [] ;
    let i=0;
    let j=0;

    // Only runs when both arrays have elements
    while(i < arr1.length && j < arr2.length){
      if(arr2[j] > arr1[i]){
        mergedArray.push(arr1[i]);
        i++;
      }else{
        mergedArray.push(arr2[j]);
        j++;
      }
    }

    // Once we exhaust an array we push the elements of the other array
    // The below while statements achieve the above task
    while( i < arr1.length){
      mergedArray.push(arr1[i]);
      i++;
    }

    while( j < arr2.length){
      mergedArray.push(arr2[j]);
      j++;
    }

    return mergedArray;
  }

  const mergeSort = (arr)=>{
    // We set the base case...it is a recursive function
    if(arr.length <= 1) return arr;
    const midpoint = Math.floor(arr.length / 2 );

    // We split the arrray to sub-arrays consisting of one element
    const left = mergeSort(arr.slice(0,midpoint));
    const right = mergeSort(arr.slice(midpoint));

    // We merge the left and right sub-arrays   
    return mergeFunction(left , right );
  }

  const arr = [4,3,5,1,7,8,2,9,11]
  const start = perfomance.now()
  mergeSort(arr)
  const end = perfomance.now()
  const time = end -start
  console.log("Sorted array:",arr,"Time taken",time)

`}</code>
      </pre>
    </div>
  );
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
