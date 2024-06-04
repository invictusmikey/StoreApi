
import React, { useState, useContext } from 'react';
import shoppingCar from '../../assets/shoppingCar.png';
import { ProductContext } from '../ProductContext/ProductContex';

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, removeItemToCart, clearCart} = useContext(ProductContext);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        <img className='w-9 h-8 rounded-sm mt-1' src={shoppingCar} alt="Shopping Car" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg p-6 w-11/12 md:w-1/2 lg:w-[50vw] "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-gray-800"
              onClick={closeModal}
            >
              &times;
            </button>
            <h1 className="text-xl font-bold mb-4 text-black">Carro de compras</h1>
            {cartItems.length > 0 ? (
              <div>

                <ul className='w-[40vw]'>
                  {cartItems.map((item) => (
                    <li key={item.id} className="flex justify-between mb-2 border-2 border-black p-2">
                      <div className="flex items-center">
                        <img src={item.image} alt={item.title} className="w-12 h-12 mr-2 text-black" />
                        <span className='text-black'>{item.title}</span>
                      </div>
                      <span className='text-black'>{item.quantity} x ${item.price}</span>
                      <button onClick={() => removeItemToCart(item.id)} className="text-red-600  ml-5 hover:scale-110">X</button>
                    </li>
                  ))}
                </ul>
                <button onClick={() => clearCart()} className="mb-4 text-red-600 border-black border-2 hover:scale-105 mt-3">Vaciar Carrito</button>
               
              </div>
            ) : (
              <p className="text-center text-black">No hay productos en el carrito.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};


