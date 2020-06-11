import React from "react";
import { Link } from "react-router-dom";

const MainLinks = (props) => {
  return (
    <div className="navChild linksMain">
      <Link to="/">Home</Link>
      <Link to="/about">about</Link>
      <Link to="/skills">skills</Link>
      <Link to="/myWork">myWork</Link>
      <Link to="/contact">contact</Link>
    </div>
  );
};

export default MainLinks;
