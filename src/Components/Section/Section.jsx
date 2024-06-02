import React, { useContext } from 'react';
import { ProductContext } from '../ProductContext/ProductContex';
import { Shop } from '../Shop/Shop';



export const Section = () => {
  const { filteredProducts } = useContext(ProductContext);

  return (

     

    <div className="flex flex-wrap justify-center mt-10 ">
      {filteredProducts.map((product) => (
        <Shop
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          price ={product.price}
          category ={product.category}
          description={product.description}
        />
      ))}
    </div>

  );
};

