import React from 'react'
import { Header } from '../../Components/Header/Header'
import { Main } from '../../Components/Main/Main'
import { Shop } from '../../Components/Shop/Shop'


export const Home = () => {
  return (
    <>
        <Header/>
        <Main>
          <Shop />
        </Main>
    
    </>
  )
}
