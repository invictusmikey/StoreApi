import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext({
  products: [],
  filteredProducts: [],
  searchTerm: '',
  setFilterTerm: () => {},
  filterProducts: () => {},
  filterByCategory: () => {},
  showAllProducts: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  saveToLocalStorage: () => {},
});

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error('Error al obtener productos:', error));

    
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart && storedCart.cartItems) {
      setCartItems(storedCart.cartItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const filterProducts = () => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm)
    );
    setFilteredProducts(filtered);
  };

  const setFilterTerm = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filterByCategory = (category) => {
    const filtered = products.filter((product) => product.category === category);
    setFilteredProducts(filtered);
  };

  const showAllProducts = () => {
    setFilteredProducts(products);
  };

  const addItemToCart = (product) => {
    const inCart = cartItems.find((item) => item.id === product.id);
    
    if (inCart) {
      setCartItems(cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      
      const newCartItem = { ...product, quantity: 1 };
      setCartItems([...cartItems, newCartItem]);
    }
    
  };

  

  const removeItemToCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const clearCart = () =>{
    setCartItems([])
  }
  const saveToLocalStorage = () => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        searchTerm,
        setFilterTerm,
        filterProducts,
        filterByCategory,
        showAllProducts,
        cartItems,
        addItemToCart,
        removeItemToCart,
        clearCart,
        saveToLocalStorage
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
