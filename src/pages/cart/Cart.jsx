import React from "react";
import Product from "../product/Product";
import "./cart.css";

export default function Cart({ cart, removeFromCart }) {
  const totalCost = () => {
    return cart.reduce(
      (total, product) => total + parseFloat(product.price),
      0
    );
  };
  return (
    <div className="cart">
      {cart.map((product) => {
        return (
          <Product
            key={product.id}
            data={product}
            btn="REMOVE"
            fun={removeFromCart}
          />
        );
      })}
      <div className="cost">
        <h1>TOTAL COST</h1>
        <p>{cart.length > 0 ? `$${totalCost()}` : "$0"}</p>
      </div>
    </div>
  );
}
