import React from 'react'
import Hero from '../components/Hero/Hero'
import PopularItem from '../components/PopularItem/PopularItem'
import Offers from '../components/Offers/Offers'
import NewCollections from '../components/newCollections/newCollections'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <PopularItem/>
        <Offers/>
        <NewCollections/>
    </div>
  )
}

export default Shop