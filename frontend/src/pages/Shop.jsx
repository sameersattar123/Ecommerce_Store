import React from 'react'
import Hero from '../components/Hero/Hero'
import PopularItem from '../components/PopularItem/PopularItem'
import Offers from '../components/Offers/Offers'
import NewCollections from '../components/NewCollections/newCollections'
import NewLetter from '../components/newLetter/newLetter'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <PopularItem/>
        <Offers/>
        <NewCollections/>
        <NewLetter/>
    </div>
  )
}

export default Shop