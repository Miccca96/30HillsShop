import React from "react";
import { Link } from "react-router-dom";
import View from "../view/View";

export default function Product({ data, addToCart, btn, fun }) {
  const {
    id,
    name,
    description,
    features,
    price,
    keywords,
    url,
    category,
    subcategory,
    images,
  } = data;

  return (
    <div className="product">
      {images !== undefined && (
        <img src={images[Math.floor(Math.random() * 3)]} />
      )}
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p>${price}</p>
      </div>
      <div className="buttons">
        <Link to={`/view/${id}`}>
          <button className="addToCartBttn">VIEW</button>
        </Link>
        <button
          className="addToCartBttn"
          onClick={() => {
            fun(data);
            console.log(data);
          }}
        >
          {btn}
        </button>
      </div>
    </div>
  );
}
