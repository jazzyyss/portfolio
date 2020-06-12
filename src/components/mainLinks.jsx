import React from "react";
import { NavLink } from "react-router-dom";

const MainLinks = (props) => {
  return (
    <div className="navChild linksMain">
      <NavLink
        to="/home"
        style={{ color: "black" }}
        activeStyle={{ color: "red" }}
      >
        <i className="fa fa-home" />
      </NavLink>
      <NavLink
        to="/about"
        style={{ color: "black" }}
        activeStyle={{ color: "red" }}
      >
        <i className="fa fa-user" />
      </NavLink>
      <NavLink
        to="/skills"
        style={{ color: "black" }}
        activeStyle={{ color: "red" }}
      >
        <i className="fa fa-cog" />
      </NavLink>
      <NavLink
        to="/myWork"
        style={{ color: "black" }}
        activeStyle={{ color: "red" }}
      >
        <i className="fa fa-tasks" />
      </NavLink>
      <NavLink
        to="/contact"
        style={{ color: "black" }}
        activeStyle={{ color: "red" }}
      >
        <i className="fa fa-address-card" />
      </NavLink>
    </div>
  );
};

export default MainLinks;
