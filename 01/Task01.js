import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../src/components/Home";
import Contact from "../src/components/Contact";

const Task01 = () => {
  return (
    <Router>
      <Route exact path="/task01/home">
        <Home />
      </Route>
      <Route path="/task01/contact">
        <Contact />
      </Route>
    </Router>
  );
};

export default Task01;

