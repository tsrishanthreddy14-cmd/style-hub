import { useState } from "react";
import { supabase } from "./supabaseClient";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import "./App.css";

function App() {
  async function testSupabase() {
  const { data, error } = await supabase
    .from("products")
    .select("*");

  console.log("Products:", data);
  console.log("Error:", error);
}
  
  const [cart, setCart] = useState([]);

  function addToCart(product) {

    setCart([
      ...cart,
      product
    ]);

    alert("Product added to cart!");
  }

  function removeFromCart(index) {

    const updatedCart = [...cart];

    updatedCart.splice(index, 1);

    setCart(updatedCart);
  }

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/products"
          element={
            <Products
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
            />
          }
        />

        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
            />
          }
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;