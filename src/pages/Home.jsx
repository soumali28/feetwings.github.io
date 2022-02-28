import React from 'react'
import LandingP from "./landingP";
import NavBar from "../components/navbar"
import Special from "./special";
import Footer from "../components/footer";
import Work from "./work";
import More from "./whatmore";
import WMUS from "../components/whatMUS";

function Home() {
  return (
    <div>
    <NavBar />
    <LandingP/>
    <Special/>
    <WMUS/>
    <Work/>
    <Footer/>
  
</div>
  )
}

export default Home