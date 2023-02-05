import React from "react";
import { Link } from "react-router-dom";

const Products = ({ product }) => {
  return (
    <div className="product-box text-center">
      <img src={product.image} alt="" />
      <h2>{product.title}</h2>
      <h4>{product.category}</h4>
      <p>{product.price}</p>
      <p>Rating: {product.rating.rate}</p>
      <Link to={`/${product.id}`} className="btn btn-info">Read more</Link>
    </div>
  );
};

export default Products;
