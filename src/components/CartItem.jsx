import React, { useContext } from "react";
import { CartContext } from "../contexts/CartProvider";
import { Link } from "react-router-dom";

import { FaMinus, FaPlus } from "react-icons/fa6";
import { BsFillTrashFill } from "react-icons/bs";

const CartItem = () => {
  const { cart, clearCart, total, itemAmount, removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);

  return (
    <div className="my-20 w-full px-4 sm:px-6 justify-center items-center">
      <div className="mt-10">
        <h1 className="text-gray-500 text-2xl ">
          Shopping Bag{" "}
          <span className="text-red-600 text-sm sm:text-base md:text-lg lg:text-xl">
            ({itemAmount})
          </span>
        </h1>
      </div>

      <div className="my-20 flex flex-wrap justify-center items-center gap-10 max-sm:flex-col max-lg:flex-row">
        {cart && cart.map((item) => (
          <div className="p-10 bg-white shadow-md text-center rounded-lg max-md:flex-col max-lg:w-[310px] xl:w-1/4" key={item.id}>
            <img className="mb-6" src={item.image} alt="item-img" />

            <div className="text-center">
              <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-4">${item.price}</p>
              <div className="flex justify-center items-center space-x-4 mb-4">
                <button className="p-2 bg-red-600 hover:bg-red-800 text-white rounded-full" onClick={() => decreaseAmount(item.id)}>
                <FaMinus />

                </button>
                <p className="text-red-600 text-xl">{item.amount}</p>
                <button className="p-2 bg-red-600 hover:bg-red-800 text-white rounded-full" onClick={() => increaseAmount(item.id)}>
                  <FaPlus />
                </button>
              </div>
              <button className=" w-64 bg-red-600 hover:bg-red-800 text-white py-2 rounded-md" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Total: $ <span className="pb-1 border-b border-red-400">{parseFloat(total).toFixed(2)}</span>
        </h4>
        <Link to="/login">
          <button className=" bg-red-600 text-white p-2 hover:bg-red-800 rounded-md w-40">
            Proceed To Payment
          </button>
        </Link>

        <div>
          <button onClick={clearCart}>
          <BsFillTrashFill className="text-red-600 text-2xl"/>        
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
