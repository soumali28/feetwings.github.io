import React, {useEffect} from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Ourproducts from '../components/Ourproducts';
import Subscribe from '../components/Subscribe';
import Whatmore from '../components/Whatmore';

import AOS from "aos";
import "aos/dist/aos.css";

function Products() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar/>
      <Ourproducts/>
      <Whatmore/>
      <Subscribe/>
      <Footer/>
    </div>
    
  )
}

export default Products