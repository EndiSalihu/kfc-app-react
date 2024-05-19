import React, { useContext } from "react";
import NavigationBar from "../components/NavigationBar";
import { CartContext } from "../contexts/CartProvider";
import CartItem from "../components/CartItem";
const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <NavigationBar />
      {cart.length === 0 ? (<h1 className="text-red-600 text-2xl text-center mt-20">No items found in the shopping cart</h1>) : (<CartItem />)}
    </div>
  );
};

export default Cart;
