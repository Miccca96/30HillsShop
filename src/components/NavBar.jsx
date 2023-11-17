import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const NavBar = () => {
  return (
    <div className="navbar">
      <h1>30 Hills Shop</h1>
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32}></ShoppingCart>
        </Link>
      </div>
    </div>
  );
};
