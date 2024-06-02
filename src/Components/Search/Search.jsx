import React, { useContext } from 'react';
import { ProductContext } from '../ProductContext/ProductContex';

export const Search = () => {
  const { searchTerm, setFilterTerm, filterProducts } = useContext(ProductContext);

  return (
    <div className="flex flex-wrap justify-center">
      <input
        className='w-[23vw] rounded-none hover:hover:text-orange-600'
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(event) => setFilterTerm(event.target.value)}
      />
      <button onClick={filterProducts} className=' ml-2 border-2 border-black hover:scale-105 bg-[#F5B033] outline-none hover:text-orange-600'>Filtrar</button>
    </div>
  );
};






