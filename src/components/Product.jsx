import React, { useContext } from "react";
import { CartContext } from "../contexts/CartProvider";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div className="max-sm:w-1/3 w-[300px] flex flex-col items-center justify-between text-center gap-6">
        <img className="w-80" src={product.image} alt="food-img" />
        <h2 className="text-2xl max-sm:text-lg">{product.title}</h2>
        <p className="text-gray-500 text-sm max-sm:w-32">{product.description}</p>
        <p>$ <span className="text-green-900">{product.price}</span></p>
        <button className="p-1 w-32 max-md:w-22 bg-red-600 hover:bg-red-800 text-white rounded-md
        duration-300 transform hover:translate-y-[-3px]"
          onClick={() => addToCart(product, product.id)}>Add to cart</button>
      </div>
    </>
  );
};

export default Product;
