import React from 'react'
import  shoppingCar  from "../../assets/shoppingCar.png";
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { Modal } from '../Modal/Modal';


export const Items = () => {
  return (
    <div className='w-80 text-3xl'>
        <ul className='flex  justify-center justify-between text-center'>
            <li className='hover:scale-105'> <a href="#">inicio</a></li>
            <DropdownMenu />
            <Modal />
        </ul>
    </div>
  )
}
