import React from 'react'
import { Items } from '../Items/Items'
import icon from "../../assets/icon.png";
import searchIcon from "../../assets/searchIcon.png";
import { Search } from '../Search/Search';
export const Header = () => {


  return (

    <div className=' text-[#FAEDC1] flex   justify-evenly bg-[#F59433] h-20 justify-items-center items-center font-serif'>
      <div className='flex justify-around'>
        <img src={icon} alt="" className='w-8 h-8' />
        <h1 className='text-3xl '>fakeStoreJhon</h1>
      </div>
      <div className='flex '>
        <img src={searchIcon} alt="" className='w-8 h-8' />
        <Search />
      </div>
      <Items />
    </div>

  )
}
