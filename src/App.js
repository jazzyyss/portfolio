import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import MyWork from "./components/myWork";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="showcase">
          <Switch>
            <Route path="/skills" component={Skills} />
            <Route path="/contact" component={Contact} />
            <Route path="/myWork" component={MyWork} />
            <Route path="/about" component={About} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
