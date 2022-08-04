import React, { useState, useEffect } from "react";

import "./Selection.scss";

const Selection = (props) => {
  const [inputs, setInputs] = useState([]);
  const [results, setResults] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setInputs(props.array);
  }, [props]);

  const sortHandler = () => {
    setClicked(true);
  };

  const codeSnippet = <div className="code-snippet">Codesnippet</div>;

  return (
    <div className="selection">
      <h3>Selelction Sort</h3>
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

export default Selection;
