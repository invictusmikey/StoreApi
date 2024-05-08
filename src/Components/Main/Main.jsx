import React from 'react'
import { Shop } from '../Shop/Shop'

export const Main = ({children}) => {
  return (
    <div className='flex justify-center items-center'>
       {children}
    </div>
  )
}
