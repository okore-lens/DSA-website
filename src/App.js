import { useState } from "react";
import Recursion from "./components/recursion/Recursion";
import { Link, Routes, Route } from "react-router-dom";

import "./App.scss";
import Sorting from "./components/sorting/Sorting";

import Binary from "./components/searching/searchItems/binary/Binary";
import Linear from "./components/searching/searchItems/linear/Linear";
import Naive from "./components/searching/searchItems/naive/Naive";

import Searching from "./components/searching/Searching";

import Bubble from "./components/sorting/sortItems/bubble/Bubble";
import Selection from "./components/sorting/sortItems/selection/Selection";
import Insertion from "./components/sorting/sortItems/insertion/Insertion";

function App() {
  const [inputs, setInputs] = useState([]);

  const changeHandler = (event) => {
    const currentValues = event.target.value;
    return setInputs(currentValues);
  };
  return (
    <div className="app">
      <h1>DSA</h1>
      <form>
        <p>
          Enter the values below, separate by use of a comma ,
          <strong>DO NOT END</strong> with a comma
        </p>
        <input
          value={inputs}
          onChange={changeHandler}
          placeholder="Array Values"
        />
      </form>
      <nav className="navigation">
        <Link to="recursion">Recursion</Link>
        <Link to="searching">Searching</Link>
        <Link to="sorting">Sorting</Link>
      </nav>
      <div className="outputs">
        <Routes>
          <Route path="recursion" element={<Recursion array={inputs} />} />
          <Route path="searching" element={<Searching />}>
            <Route path="linear" element={<Linear array={inputs} />} />
            <Route path="binary" element={<Binary array={inputs} />} />
            <Route path="naive" element={<Naive array={inputs} />} />
          </Route>
          <Route path="sorting" element={<Sorting />}>
            <Route path="bubble" element={<Bubble array={inputs} />} />
            <Route path="selection" element={<Selection array={inputs} />} />
            <Route path="insertion" element={<Insertion array={inputs} />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
