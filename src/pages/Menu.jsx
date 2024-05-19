import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductProvider";

import Product from "../components/Product";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

import bannerMenu from "../images/banner-menu.png"


const Menu = () => {
  const { products, sortProducts, searchedProducts, searchProduct} = useContext(ProductContext);

  const filteredProducts = searchedProducts.length > 0 ? searchedProducts : products;



  return (
    <>
    <NavigationBar />
        <div className="flex flex-col items-center gap-6 my-20">
          <h1 className="pb-2 text-3xl text-red-600 border-b border-gray-400">REAL & FRESH MEALS</h1>
          <p className="text-gray-500 text-center max-xl:w-96"> We`re proud to serve wholesome, abundant, hot meals the way they should be served—made with high-quality fresh chicken, freshly prepared by real cooks in our kitchens. </p>
          <img className="rounded-2xl max-xl:w-[80%] w-[90%]" src={bannerMenu} alt="banner-menu" />
        </div>

          <div className="my-28">
            <div className="ml-5 mb-16 flex max-sm:flex-col max-md:justify-center gap-12">
            <input className="w-56 p-2 outline-none border border-red-600" type="search" placeholder="Search Product" onChange={(e) => searchProduct(e)}/>
            <select className="border border-red-600 outline-none w-56 p-2" onChange={sortProducts}>
              <option className="text-gray-500">Default</option>
              <option className="text-gray-500" value={"lth"}>Lowest to highest $</option>
              <option className="text-gray-500" value={"htl"}>Highest to lowest $</option>
            </select>
            </div>

            
            <div className="flex flex-wrap gap-20 justify-center">
          {filteredProducts.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
          </div>
        </div>
      <Footer />
    </>
  );
};

export default Menu;
