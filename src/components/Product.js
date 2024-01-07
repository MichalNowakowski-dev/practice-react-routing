import React from "react";
import { useParams, Redirect } from "react-router-dom";

const productsData = [
  {
    text: "Salata lodowa etc",
    id: 1,
  },
  {
    text: "Dlugopis marki audi etc",
    id: 2,
  },
  {
    text: "kaszanka z wieprza etc",
    id: 3,
  },
];
const Product = () => {
  const { id } = useParams();
  const [product] = productsData.filter(
    (product) => product.id === parseInt(id)
  );

  if (!product) {
    return <Redirect to="/" />;
  }

  return <h1>{product.text}</h1>;
};

export default Product;
