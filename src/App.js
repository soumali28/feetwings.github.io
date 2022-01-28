
import React from "react";
import LandingP from "./pages/landingP";
import NavBar from "./components/navbar";
import Faq from "./pages/faq";
import Special from "./pages/special";
import Footer from "./components/footer";
import Work from "./pages/work";
import More from "./pages/whatmore";
import WMUS from "./pages/whatMUS";

function App() {
  return(
    <div>
      <NavBar />
      <LandingP/>
      <Special/>
      <WMUS/>
      <Work/>
      <Faq/>
      {/* <Footer/> */}
    </div>

  );

}

export default App;
