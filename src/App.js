import React from "react";
import BFcarousel from "./components/carousel/BFcarousel";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Information from "./components/information/Information";
import Navbar from "./components/navbar/Navbar";


function App() {

 

  return (
    <div>
      <Navbar />
      <Hero />
      <BFcarousel />
      <Information />
      <Footer />
      
      
    </div>
  );
}

export default App;
