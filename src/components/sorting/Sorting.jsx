import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./Sorting.scss";

const Sorting = () => {
  return (
    <div className="sorting">
      <h2>Sorting</h2>
      <p>
        A Sorting Algorithm is used to rearrange a given array or list elements
        according to a comparison operator on the elements. The comparison
        operator is used to decide the new order of elements in the respective
        data structure.
      </p>
      <nav className="navigation">
        <Link to="bubble">Bubble Sort</Link>
        <Link to="selection">Selection Sort</Link>
        <Link to="insertion">Insertion Sort</Link>
      </nav>
      <div className="types">
        <Outlet />
      </div>
    </div>
  );
};

export default Sorting;
