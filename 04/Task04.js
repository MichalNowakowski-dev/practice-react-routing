import React from 'react';
import { Route, useParams, useHistory } from "react-router-dom";
import Shop from "../src/components/Shop";
import productsData from "../src/products.json";

const SortPage = ({ data }) => {
  const { sortBy, sortType } = useParams();

  let sortedProductsData;

  if (sortBy === "name") {
    sortedProductsData = data.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (sortType === "asc") return nameA > nameB ? 1 : -1;
      if (sortType === "desc") return nameA > nameB ? -1 : 1;
    });
  } else if (sortBy === "price" || sortBy === "id") {
    switch (sortType) {
      case "asc":
        sortedProductsData = data.sort((a, b) => a[sortBy] - b[sortBy]);
        break;
      case "desc":
        sortedProductsData = data.sort((a, b) => b[sortBy] - a[sortBy]);
        break;
      default:
        sortedProductsData = data;
        break;
    }
  }

  if (!sortBy) return <Shop products={data} />;

  return <Shop products={sortedProductsData} />;
};

const Task04 = () => {
  const history = useHistory();
  const handleChange = (e) => {
    history.push(`/task04/${e.target.value}`);
  };
  return (
    <>
      <select onChange={handleChange} name="sort">
        <option value="">Sortuj</option>
        <option value="price-desc">Cena malejąco</option>
        <option value="price-asc">Cena rosnąco</option>
        <option value="name-asc">Nazwa</option>
        <option value="name-desc">Nazwa od końca</option>
        <option value="id">Identyfikator</option>
      </select>
      <Route exact path="/task04">
        <SortPage data={productsData} />
      </Route>
      <Route path="/task04/:sortBy-:sortType">
        <SortPage data={productsData} />
      </Route>
    </>
  );
};

export default Task04;

