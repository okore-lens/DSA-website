import { useState } from "react";
import Recursion from "./components/recursion/Recursion";

import "./App.scss";

function App() {
  const [inputs, setInputs] = useState([]);

  const changeHandler = (event) => {
    const currentValues = event.target.value;
    // if (isNaN(currentValues) || ",")
    // alert("Enter number digits");
    return setInputs(currentValues);
  };
  // console.log(inputs);
  return (
    <div className="app">
      DSA
      <form>
        <p>Enter the values below, separate by use of a comma</p>
        <input
          value={inputs}
          onChange={changeHandler}
          placeholder="Array Values"
        />
      </form>
      <div className="outputs">
        <Recursion array={inputs} />
      </div>
    </div>
  );
}

export default App;
