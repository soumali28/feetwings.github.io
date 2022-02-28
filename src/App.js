import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Faqs from "./pages/FAQ";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Smartyarn from "./pages/smartyarn";

function App() {
  return(
    <BrowserRouter>
    <Routes> 
       
       <Route exact path="/" element={<Home/>} />
       <Route exact path="/products" element={<Products/>} />
       <Route exact path="/faq" element={<Faqs/>} />
       <Route exact path="/smartyarn" element={<Smartyarn/>} />
       
          
          
        
        </Routes>
     
        
     
   </BrowserRouter>
  );

}

export default App;
