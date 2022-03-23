import React, { useEffect } from "react";
import LandingP from "../components/landingP";
import NavBar from "../components/navbar";
import Special from "./special";
import Footer from "../components/footer";
import Work from "./work";
import WMUS from "../components/whatMUS";
import Subscribe from "../components/Subscribe";

import AOS from "aos";
import "aos/dist/aos.css";


function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <NavBar />
      <LandingP />
      <Special />
      <WMUS />
      <Work />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Home;
