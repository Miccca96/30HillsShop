import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import { useState, useEffect } from "react";
import axios from "axios";
import View from "./pages/view/View";

function App() {
  useEffect(() => {
    axios
      .get("api/products.json")
      .then((response) => {
        const products = response.data.products.data.items;
        setProducts(products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [products, setProducts] = useState([]);
  console.log(products);

  const [cart, setCart] = useState([]);

  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter((product) => product !== productToRemove);
    setCart(updatedCart);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Shop addToCart={addToCart} products={products} />}
          ></Route>
          <Route
            path="/cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} />}
          ></Route>
          <Route
            path="/view/:id"
            element={<View products={products} fun={addToCart} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
