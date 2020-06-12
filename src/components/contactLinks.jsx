import React from "react";
import { Link } from "react-router-dom";

const ContactLnks = (props) => {
  return (
    <div className="navChild contactMain">
      <Link to="https://twitter.com/jazzyyss" target="_blank">
        <i className="fa fa-twitter" />
      </Link>
      <Link to="https://github.com/jazzyyss" target="_blank">
        <i className="fa fa-github" />
      </Link>
      <Link to="https://www.linkedin.com/in/jazzyyss/" target="_blank">
        <i className="fa fa-linkedin" />
      </Link>
    </div>
  );
};

export default ContactLnks;
