import React,{ createContext, useState, } from 'react'
import { productsData } from '../data';

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  const [products, setProducts] = useState(productsData);
  const [searchedProducts, setSearchedProducts] = useState([]);


  const sortProducts = (e) => {
    const {value} = e.target;
    if(value === "lth"){
      const sorted = products.toSorted((a, b) => a.price - b.price)
      setProducts(sorted);
    }
    else{
      const sorted = products.toSorted((a,b) => b.price - a.price)
      setProducts(sorted)
    }
  }


  const searchProduct = (e) => {
    const { value } = e.target;
    const search = products.filter((product) => product.title.toLowerCase().includes(value.toLowerCase()));
    setSearchedProducts(search)
  }

  
  return (
    <ProductContext.Provider value={{ products,  sortProducts, searchedProducts, searchProduct }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider