import React, { useEffect, useState } from "react";

import "./Linear.scss";

const Linear = (props) => {
  const [inputs, setInputs] = useState([]);
  const [search, setSearch] = useState(1);

  useEffect(() => {
    setInputs(props.array);
  }, [props]);

  const splited = inputs.toString().trim().split(",");

  let length = splited.length;

  //   console.log(length);

  const formHandler = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    let x = search;
    for (let i = 0; i < length; i++) {
      let el = +splited[i];
      //   console.log(x);
      //   console.log(el);

      if ((x = el)) {
        // console.log(i);
        console.log("Found");
      }

      //   if (x === +splited[i]) {
      //     alert(`Found at index ${i}`);
      //     return
      //   } else {
      //     alert("Not found");
      //   }
    }
  };

  return (
    <div className="linear">
      <h3>Linear Search</h3>
      <p>
        We start from the beginning of the array and compare all elements with
        our desired value X untillwe find a match and stop there.
      </p>
      <form className="form">
        <input
          value={search}
          onChange={formHandler}
          placeholder="Enter digit to search"
        />
        <button onClick={searchHandler}>Search</button>
      </form>
      <div className="results">
        <div className="values">{inputs} </div>
        <div className="output">Output</div>
      </div>
    </div>
  );
};

export default Linear;
