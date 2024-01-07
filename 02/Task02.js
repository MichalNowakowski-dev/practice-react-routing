import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Product from "../src/components/Product";

const Task02 = () => {
  return (
    <Router>
      <Route path="/task02/product-:id">
        <Product />
      </Route>
    </Router>
  );
};

export default Task02;

