import React, { useState, useEffect } from "react";

import "./Insertion.scss";

const Insertion = (props) => {
  const [inputs, setInputs] = useState([]);
  const [results, setResults] = useState();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setInputs(props.array);
  }, []);

  const splited = inputs.toString().split(",");

  const numbers = splited.map(Number);

  const sortHandler = () => {
    setClicked(true);
    console.log(inputs);
    console.log(splited);
    console.log(numbers);
  };

  const codeSnippet = <div className="code-snippet">Code Snippet</div>;

  return (
    <div className="insertion">
      <h3>Insertion Sort</h3>
      <p>
        Insertion sort is a simple sorting algorithm that works similar to the
        way you sort playing cards in your hands. The array is virtually split
        into a sorted and an unsorted part. Values from the unsorted part are
        picked and placed at the correct position in the sorted part.
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

export default Insertion;
