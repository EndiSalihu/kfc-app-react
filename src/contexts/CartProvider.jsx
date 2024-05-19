import React, {createContext, useState, useEffect} from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const CartContext = createContext();


const CartProvider = ({children}) => {
  const [cart,setCart] = useState([]);
  const [itemAmount,setItemAmount] = useState(0);
  const [total,setTotal] = useState(0)

  const notifySuccess = (message) =>
    toast.success(`${message} `, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "dark",
    });


  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;}, 0);
      setTotal(total)
  },[cart])

  useEffect(() => {
    if(cart){
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount}, 0);
      setItemAmount(amount);
    }
  } ,[cart])

  
  const addToCart = (product, id) => {
    const newProduct = { ...product, amount: 1 };
    const cartProduct = cart.find(item => item.id === id);
  
    let newCart;
    if (cartProduct) {
      newCart = cart.map(item => {
        if (item.id === id) {
          notifySuccess(`${product.title} quantity increased by 1!`);
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
    } else {
      newCart = [...cart, newProduct];
      notifySuccess(`${product.title} Added to your cart!`);
    }
  
    setCart(newCart);
  };


  const increaseAmount = (id) => {
    const cartProduct = cart.find((item) => item.id === id);
    addToCart(cartProduct, id);
  };


  
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  }


  const decreaseAmount = (id) => {
    const removeCartItem = cart.find(item => item.id === id);
  
    if (removeCartItem) {
      if (removeCartItem.amount <= 1) {
        removeFromCart(id);
        notifySuccess(`${removeCartItem.title} removed from your cart.`);
      } else {
        const newCart = cart.map(item => {
          if (item.id === id) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        });
        setCart(newCart);
        notifySuccess(`${removeCartItem.title} decreased by 1!`);
      }
    }
  };

  
  const clearCart = () => {
    setCart([]);
    notifySuccess("Cart has been cleared");
  }
  

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount, total}}>
      {children}
      <ToastContainer/>
    </CartContext.Provider>
  )
}

export default CartProvider