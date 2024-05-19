import React from "react";
import { Link } from "react-router-dom";
import kfcLogo from "../images/kfc-logo.svg";


const Footer = () => {
  return (
    <>
    <footer className="p-5 bg-red-600 flex items-center justify-evenly text-white max-md:text-sm">
      <div className="flex items-center gap-5">
        <Link to="/">
          <img className="w-20 max-xl:w-16 max-md:w-12" src={kfcLogo} alt="kfc-logo" />
        </Link>
        <p>&#174;Copyright 2024 KFC. All Rights Reserved</p>
      </div>
        <p>Phone Number: <span className="text-xl max-md:text-sm">(+453) 663 435 </span></p>
        
        <p>Location: <span className="text-xl max-md:text-sm">Kosovo</span></p>
    </footer>
    </>
  );
};

export default Footer;
