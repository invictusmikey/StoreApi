import React from 'react'
import searchIcon from '../../assets/searchIcon.png' 
export const Shop = () => {
  return (
    <div className='bg-neutral-500 w-96 mt-12 flex flex-col justify-center items-center'>
        <img src={searchIcon} alt="" />
              <h3>nose que</h3>
              <h2>$99.99</h2>
              <p className='flex justify-center items-center p-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repellendus at veniam sint atque reprehenderit minus incidunt temporibus fuga inventore labore mollitia aliquam accusamus esse, aliquid quas fugiat sapiente doloribus.</p>
        <div>

              <button>nos1</button>
              <button>nos2</button>
        </div>
    </div>
  )
}
