import React from 'react'
import { Items } from '../Items/Items'
import  icon  from "../../assets/icon.png";
import searchIcon from "../../assets/searchIcon.png";
export const Header = () => {
  return (

    <div className='flex  justify-center justify-evenly bg-gray-600 h-20 justify-items-center items-center'>
      <div className='flex justify-around'>
        <img src={icon} alt="" className='w-8 h-8' />
        <h1 className='text-3xl '>fakeStoreJhon</h1>
      </div>  
      <div className='flex '>
       <img src={searchIcon} alt=""  className='w-8 h-8'/>
        <input  type="search" name="" id="" placeholder='holajhon' className='h-7 w-72 flex justify-center' />
       
      </div>
       <Items/>
    </div>

  )
}
