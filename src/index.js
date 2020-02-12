import React from "react";
import "./index.css";

import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

// Context Provider
import CartProvider from "./provider/cart/cart.provider";

ReactDOM.render(
  <CartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartProvider>,
  document.getElementById("root")
);
