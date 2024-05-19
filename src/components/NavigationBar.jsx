import React,{ useContext } from "react";
import { CartContext } from "../contexts/CartProvider";
import { GrCart } from "react-icons/gr";

import { Link, NavLink } from "react-router-dom";
import kfcLogo from "../images/kfc-logo.svg";


const NavigationBar = () => {
  const { itemAmount } = useContext(CartContext);
  return (
    <>
    <nav className="p-2 bg-red-600 flex items-center justify-around ">
        <Link to="/">
          <img className="w-20 max-xl:w-16 max-md:w-12" src={kfcLogo} alt="kfc-logo" />
        </Link>

      <ul className="flex gap-10 max-sm:gap-4 text-white text-xl">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-black" : "text-white")}>HOME</NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-black" : "text-white")}>ABOUT</NavLink>

        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? "text-black" : "text-white")}>MENU</NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "text-black" : "text-white")}>LOGIN</NavLink>
      </ul>

      
        <Link to="/cart">
          <div className="flex items-center gap-1 w-12 text-white">
            <GrCart className="text-xl"/>
            <p>{itemAmount}</p>            
          </div>
        </Link>
        </nav>
        <img src="https://kfckosova.com/wp-content/uploads/2020/04/sign.svg" alt="nav-banner" className="absolute left-[46.4%]"/>
    </>
  );
};

export default NavigationBar;