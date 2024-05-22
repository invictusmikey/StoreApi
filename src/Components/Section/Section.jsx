import React, { useContext } from 'react';
import { ProductContext } from '../ProductContext/ProductContex';
import { Shop } from '../Shop/Shop';


export const Section = () => {
  const { filteredProducts } = useContext(ProductContext);

  return (

    <div className="flex flex-wrap justify-center ">
      {filteredProducts.map((product) => (
        <Shop
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
        />
      ))}
    </div>

  );
};

