import React from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import productsData from "../products.json";

export const Product = ({ id, category, name, description, price }) => {
  return (
    <article>
      <h1>
        <Link to={`/task02/product-${id}`}>{name}</Link>
      </h1>
      <h2>{category}</h2>
      <h2>{description}</h2>
      <h2>{price}</h2>
    </article>
  );
};

const ProductPage = () => {
  const { productId } = useParams();

  const [product = null] = productsData.filter(
    (prod) => prod.id === Number(productId)
  );

  if (product === null) {
    return <Redirect to="/404.html" />;
  }

  return <Product {...product} />;
};

export default ProductPage;
