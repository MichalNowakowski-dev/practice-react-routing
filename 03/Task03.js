import React from 'react';
import { Route, useParams } from "react-router-dom";
import Shop from "../src/components/Shop";
import productsData from "../src/products.json";

const CategoryPage = ({ data }) => {
  const { category } = useParams();
  const filteredProductsData = data.filter(
    (prod) => prod.category.toLowerCase() === category
  );


  if (!category) return <Shop products={data} />;
  if (filteredProductsData.length < 1)
    return <p>Nie posiadamy takiej kategorii</p>;
  return <Shop products={filteredProductsData} />;
};

const Task03 = () => {
  return (
    <>
      <Route exact path="/task03">
        <CategoryPage data={productsData} />
      </Route>
      <Route path="/task03/:category">
        <CategoryPage data={productsData} />
      </Route>
    </>
  );
};

export default Task03;

