import React, { Component } from "react";
import MainLinks from "./mainLinks";
import ContactLinks from "./contactLinks";
import Logo from "./logo";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Logo />
        <MainLinks />
        <ContactLinks />
      </nav>
    );
  }
}

export default Navbar;
