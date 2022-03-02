import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Ourproducts from '../components/Ourproducts'
import Subscribe from '../components/Subscribe'
import Whatmore from '../components/Whatmore'
import WhatMore from './whatmore'

function Products() {
  return (
    <div>
      <Navbar/>
      <Ourproducts/>
      <Whatmore/>
      <Subscribe/>
      <WhatMore />
      <Footer/>
    </div>
    
  )
}

export default Products