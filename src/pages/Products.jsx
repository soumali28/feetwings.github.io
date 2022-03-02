import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Ourproducts from '../components/Ourproducts'
import WhatMore from './whatmore'

function Products() {
  return (
    <div>
      <Navbar/>
      <Ourproducts/>
      <WhatMore />
      <Footer/>
    </div>
    
  )
}

export default Products