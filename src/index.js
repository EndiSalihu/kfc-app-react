import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"
import ProductProvider from "./contexts/ProductProvider";
import CartProvider from "./contexts/CartProvider";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <CartProvider>
     <ProductProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
     </ProductProvider>
    </CartProvider>
);
