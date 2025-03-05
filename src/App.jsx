import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, ShaderOld, CanvasLoader } from "./components";
import React, { Suspense, useEffect, useState } from "react";
import { ScrollControls, useScroll } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import useWindowScroll from "./components/WindowScrollHook";
import Model from "./components/Model";

const App = () => {



  const [showContactOnly, setShowContactOnly] = useState(false);
  const [click, setClick] = useState(false);



  return (
    <BrowserRouter>
      <div className='relative z-0 bg-black'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        {/* <Tech /> */}
        <Works />
        <div className='relative z-0'>
          <Contact setClick={setClick} name="ram" />
          <StarsCanvas />
        </div>

        
      

        {/* */}

      </div>
    </BrowserRouter>
  );
}

export default App;


/*
  APP.jsx
  Contact.jsx
  Earth.jsx
  Globe.jsx
*/