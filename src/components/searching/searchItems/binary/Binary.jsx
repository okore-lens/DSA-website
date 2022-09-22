import React, { useState, useEffect } from "react";

import "./Binary.scss";

const Binary = (props) => {
  const [inputs, setInputs] = useState([]);
  const [results, setResults] = useState();
  const [search, setSearch] = useState(0);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setInputs(props.array);
  }, [props]);

  const splited = inputs.toString().split(",");
  const numbers = splited.map(Number);

  const sort = numbers.sort((a, b) => a - b); // sorting integer values

  const formHandler = (event) => {
    const digit = event.target.value;
    setSearch(digit);
  };

  let indexFound;

  const binarySearch = (arr, x) => {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.round((end + start) / 2);

    while (arr[mid] / x !== 1 && start <= end && start >= 0) {
      if (x < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
      mid = Math.round((end + start) / 2);
    }

    if (x / arr[mid] === 1) {
      indexFound = mid;
    }
  };

  const searchHandler = (ev) => {
    ev.preventDefault();
    setClicked(true);
    let start = performance.now();
    binarySearch(sort, search);
    let end = performance.now();
    let time = end - start;
    setResults(
      `${search} was found at index ${indexFound}. Time in milliseconds ${time}`
    );
  };

  const codeSnippet = (
    <div className="code-snippet">
      <pre>
        <h2>Binary Search</h2>
        <code>
          {`
        // Recursion -->Does not return the index
        let indexFound;
        let newArray;
        
        const binarySearch = (arr, x) => {
          const length = arr.length;
          const mid = Math.round(length / 2) - 1;
          if (x / arr[mid] === 1) {
            indexFound = mid;
            return;
          }
          for (let i = 0; i < mid; i++) {
            /* Greater than the midPoint */
            if (x > arr[mid]) {
              newArray = arr.splice(-mid);
              binarySearch(newArray, x);
              return;
            } else {
              /* Less than the midPoint */
              newArray = arr.splice(0, mid);
              binarySearch(newArray, x);
              return;
            }
          }
        };

        //Iteration

        /* Method 1 */ --> Returns index of the first appearance
        let indexFound;

        const binarySearch = (arr,x)=>{
          let start = 0;
          let end = arr.length - 1;
          let mid = Math.round((end+start)/2)
          
          while(arr[mid] !== x && start <= end && start >= 0){
            if(x < arr[mid]){
              end  = mid - 1
            } else {
              start = mid + 1
            }
            mid = Math.round((end+start)/2); 
          }

          if(arr[mid] === x){
            indexFound = mid;
          }
        }
        
        /* Method 2 */ --> Returns the index
        let indexFound;

        const binarySearch = (arr, x) => {
          let l = 0;
          let length = arr.length - 1;
          let mid;
          while (length >= l) {
            mid = l + Math.floor((length - l) / 2);
      
            // If the element is present at the middle
            // itself
            if (arr[mid] == x) {
              return indexFound = mid ;
            }
      
            // If element is smaller than mid, then
            // it can only be present in left subarray
            if (arr[mid] > x) length = mid - 1;
            // Else the element can only be present
            // in right subarray
            else l = mid + 1;
          }
      
          // We reach here when element is not
          // present in array
          return alert("Not found in the array");
        };

        binarySearch(ourArray,valuetobeSearched);
        
        `}
        </code>
      </pre>
    </div>
  );

  return (
    <div className="binary">
      <h3>Binary Search</h3>
      <p>
        Uses a divide and conquer approach.
        <strong>Data has to be sorted</strong>.Eliminates half of elements at
        any given time.
        <br /> <br />
        Can be implemented by either using recursion or iteration.
        <br /> <br />
        The idea of binary search is to use the information that the array is
        sorted and reduce the time complexity to O(Log n).
      </p>
      <div className="pseudocode">
        <h2>Algorithm</h2>
        <ul>
          <li>A function that accepts a sorted array and a value</li>
          <li>If the value is the same as the middle array element return.</li>
          <li>
            Loop through the array and check if the value is greater than the
            middle element then take all the values to its rigth as the new
            array and call the function again passing the newArray as the array.
            Once the value is matched exit the function
          </li>
          <li>
            Else if the value is less than the middle value then take the values
            to the left of the element as the new array and call the function
            again passing the newArray as the array. Once the value is matched
            exit the function
          </li>
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

export default Binary;
