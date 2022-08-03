import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./Searching.scss";

const Searching = () => {
  return (
    <div className="searching">
      <h2>Searching</h2>
      <nav className="navigation">
        <Link to="linear">Linear Search</Link>
        <Link to="binary">Binary Search</Link>
        <Link to="naive">Naive String Search</Link>
      </nav>
      <div className="types">
        <Outlet />
      </div>
    </div>
  );
};

export default Searching;
