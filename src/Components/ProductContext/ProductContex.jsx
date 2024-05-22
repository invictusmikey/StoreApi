import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext({
  products: [],
  filteredProducts: [],
  searchTerm: '',
  setFilterTerm: () => {},
  filterProducts: () => {},
});

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data); 
    };
    fetchProducts();
  }, []);

  const filterProducts = () => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm)
    );
    setFilteredProducts(filtered);
  };

  const setFilterTerm = (term) => {
    setSearchTerm(term.toLowerCase()); 
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        searchTerm,
        setFilterTerm,
        filterProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
