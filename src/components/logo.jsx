import React from "react";
import { Link } from "react-router-dom";
const Logo = (props) => {
  return (
    <div className="navChild logoMain">
      <Link to="/home" style={{ color: "black" }}>
        J
      </Link>
    </div>
  );
};

export default Logo;
