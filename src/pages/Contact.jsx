import React from 'react'
import Contactus from '../components/Contactus'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Subscribe from '../components/Subscribe'
import Comingsoon from '../components/comingsoon';
import Navbar from '../components/navbar';
import Subscribe from '../components/Subscribe';
import Footer from "../components/footer";

function Contact() {
  return (
    <div>
    
    <Contactus/>
    
        <Navbar/>
        <Comingsoon/>
        <br></br>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default Contact