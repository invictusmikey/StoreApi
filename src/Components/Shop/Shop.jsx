import React from 'react'

export const Shop = ({ image, title, description }) => {
  return (
    
    <div className='flex flex-col m-1 border-black border-2 items-center justify-evenly font-serif'>
      <h3 className='text-[2vh] mb-2'>{title}</h3>
      <img className='w-20 flex justify-center items-center' src={image} alt="" />
      <p className='flex justify-center items-center p-5 text-xs w-[20vw]'>{description}</p>
      <button className='border-2 bg-gray-600 p-3'>añadir al carrito</button>
    </div>
   
  
  )
}
