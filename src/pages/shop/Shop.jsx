import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../product/Product";
import "./shop.css";

export default function Shop({ addToCart, products }) {
  return (
    <div className="shop">
      <div className="shoprTitle"></div>
      <div className="products">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              data={product}
              btn="ADD"
              fun={addToCart}
            />
          );
        })}
      </div>
    </div>
  );
}
