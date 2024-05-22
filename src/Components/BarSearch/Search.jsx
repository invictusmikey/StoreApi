import React, { useContext } from 'react';
import { ProductContext } from '../ProductContext/ProductContex'; 

export const Search = () => {
  const { searchTerm, setFilterTerm, filterProducts } = useContext(ProductContext);

  return (
    <div className="flex flex-wrap justify-center">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(event) => setFilterTerm(event.target.value)}
      />
      <button onClick={filterProducts} className='ml-1 border-2 border-black bg-[#0D3E84]'>Filtrar</button>
    </div>
  );
};






