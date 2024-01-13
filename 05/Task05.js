import React, { useState } from "react";
import { Route, useParams, useHistory, Switch } from "react-router-dom";
import Form from "../src/components/Form";
import productsData from "../src/products.json";
import Shop from "../src/components/Shop";

const FilterPage = ({ products = [] }) => {
  const { searchTerm = "", minPrice, maxPrice } = useParams();

  const minPriceNumber = Number(minPrice);
  const maxPriceNumber = Number(maxPrice);

  const productsAfterMinPrice = Number.isNaN(minPriceNumber)
    ? products
    : products.filter((product) => product.price > minPriceNumber);

  const productsAfterMaxPrice = Number.isNaN(maxPriceNumber)
    ? productsAfterMinPrice
    : productsAfterMinPrice.filter((product) => product.price < maxPriceNumber);

  const productsAfterSearchTerm =
    searchTerm.length < 1
      ? productsAfterMaxPrice
      : productsAfterMaxPrice.filter(
          (product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.includes(searchTerm.toLowerCase())
        );

  if (productsAfterSearchTerm.length < 1) return <p>Brak wyników</p>;

  return <Shop products={productsAfterSearchTerm} />;
};

const Task05 = () => {
  const history = useHistory();
  const initState = {
    minPrice: "",
    maxPrice: "",
    searchTerm: "",
  };
  const [filters, setFilters] = useState(initState);
  const formFields = [
    {
      name: "Szukana fraza",
      type: "text",
      filterName: "searchTerm",
    },
    {
      name: "Minimalna Cena",
      type: "number",
      filterName: "minPrice",
    },
    {
      name: "Maksymalna cena",
      type: "number",
      filterName: "maxPrice",
    },
  ];

  const handleSubmit = (e) => {
    const { minPrice, maxPrice, searchTerm } = filters;
    e.preventDefault();

    history.push(
      `/task05/searchTerm=${searchTerm}&minPrice=${minPrice}&maxPrice=${maxPrice}`
    );

    setFilters(initState);
  };
  const handleChange = (e, filterName) => {
    setFilters({ ...filters, [filterName]: e.target.value });
  };

  console.log(filters);

  return (
    <>
      <Form
        filters={filters}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formFields={formFields}
      />
      <Route path="/task05/searchTerm=:searchTerm?&minPrice=:minPrice?&maxPrice=:maxPrice?">
        <FilterPage products={productsData} />
      </Route>
    </>
  );
};

export default Task05;
