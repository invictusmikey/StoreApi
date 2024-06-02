import React, { useContext } from 'react';
import { ProductContext } from '../ProductContext/ProductContex';

export const Shop = ({ id, image, title, description, price }) => {
  const { addItemToCart } = useContext(ProductContext);

  return (
    <div key={id} className='w-[30vw] mt-2 ml-3 p-4 rounded-md flex flex-col m-1 bg-[#F59433] border-black border-2 items-center justify-center font-serif'>
      <h3 className='text-[2vh] w-[18vw] mb-2 text-xl text-[#FAEDC1]'>{title}</h3>
      <img className='w-20 flex justify-center items-center' src={image} alt={title} />
      <p className='flex justify-center items-center p-5 text-xs w-[25vw]'>{description}</p>
      <p className='flex justify-center items-center m-1 text-10xl w-[25vw]'>${price}</p>
      <button
        className='border-none hover:text-orange-600 bg-[#F5B033] p-3 hover:scale-105'
        onClick={() => addItemToCart({ id, image, title, price })}
      >
        Añadir al carrito
      </button>
    </div>
  );
};
