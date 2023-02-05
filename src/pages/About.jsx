import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Product from "./Products";

function About() {
  const [count, setCount] = useState(8);
  const [products, setProducts] = useState([]);

  function countIncrease() {
    setCount(count + 1);
  }

  function countDecrease() {
    setCount(count - 1);
  }

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${count}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  });

  return (
    <>
      <div className="container">
        <Header />
        <div className="count text-center">
          <button className="m-3" onClick={countDecrease} disabled={count < 2}>
            -
          </button>
          {count}
          <button className="m-3" onClick={countIncrease} disabled={count > 18}>
            +
          </button>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          {products.length === 0 ? (
            <h1>Loading... </h1>
          ) : (
            products.map((p) => (
              <Product product={p} key={crypto.randomUUID()} />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default About;
