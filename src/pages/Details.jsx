import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Details = () => {
  const { productId } = useParams();
  const [product, renderProduct] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => renderProduct(json));
  });

  return (
    <div className="container">
      <div className="product d-flex mt-5 pt-5 align-items-center">
        <div className="left d-flex col-6 pb-5">
          <img src={product.image} className="w-50 ms-auto me-auto" alt="" />
        </div>
        <div className="right col-6 pe-5 mb-5">
          <h3 className="product-title ">{product.title}</h3>
          <p className="fs-6 mt-3">Description: {product.description}</p>
          <p className="mt-3">Category: {product.category}</p>
          <h5 className="mt-3">Price: ${product.price}</h5>
        </div>
      </div>
    </div>
  );
};

export default Details;
