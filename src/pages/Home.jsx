import React from "react";
import { Link } from "react-router-dom";

import homeCheese from "../images/home-cheese.png";
import homeTwister from "../images/home-twister.png";
import harland from "../images/harland.png";

import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

import { homeData } from "../data";


const Home = () => {
  return (
    <>
      <NavigationBar />
      <div className="flex items-center flex-col gap-10 mt-20">
        <h1 className="pb-2 text-3xl max-md:text-2xl  text-red-600 border-b border-gray-400 ">THE RIGHT WAY TO DO CHICKEN</h1>
        <div className="flex justify-center gap-40 max-xl:flex-col max-xl:items-center max:xl-gap-10">
          <img className="w-1/3 max-xl:w-96 rounded" src={homeCheese} alt="home-img" />
          <img className="w-1/3 max-xl:w-96 rounded" src={homeTwister} alt="home-img" />
        </div>

        <div className="flex gap-10 my-24 max-sm:flex-col text-center">
        <Link className="bg-red-600 text-white p-2 hover:bg-red-800 rounded-md w-36" to="/menu">
        PRODUCTS
        </Link>

        <Link className="bg-red-600 text-white p-2 hover:bg-red-800 rounded-md w-36" to="/login">
          DELIVERY
        </Link>
        </div>
      </div>

      <div className="mb-16 p-16 max-xl:flex-col w-full flex items-center justify-center gap-16">
        <div>
        <img  className="w-96" src={harland} alt="harland" />
        </div>
        <div className="flex flex-col gap-5 text-center max-md:w-full w-1/2">
         <h1 className="pb-2 text-3xl text-red-600 border-b border-gray-400">WHAT MADE US GREAT IS STILL WHAT MAKES US GREAT</h1>
         <p className="text-gray-500">{homeData[0].description}</p> 
        </div>
      </div>  
      <Footer />
    </>
  );
};

export default Home;
