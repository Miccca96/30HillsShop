import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./view.css";

export default function View({ products, fun }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const selectedProduct = products.find((product) => product.id === id);
  console.log(selectedProduct);

  return (
    <div className="view">
      <h1>{selectedProduct.name}</h1>
      <img src={selectedProduct.images[0]} />
      <p>{selectedProduct.price}$</p>
      <button
        className="addToCartBttn"
        onClick={() => {
          fun(selectedProduct);
        }}
      >
        ADD
      </button>
      <p id="desc">{selectedProduct.description}</p>
    </div>
  );
}
