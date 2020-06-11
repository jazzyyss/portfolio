import React from "react";
import { Link } from "react-router-dom";

const ContactLnks = (props) => {
  return (
    <div className="navChild contactMain">
      <Link to="/twitter">T</Link>
      <Link to="/gitHub">G</Link>
      <Link to="/linkedIn">L</Link>
    </div>
  );
};

export default ContactLnks;
