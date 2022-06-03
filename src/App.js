import './App.css';
import Moi from './components/Moi/Moi';
import Navbar from './components/Navbar/Navbar';
import Box from './components/Box/Box';
import { useEffect, useState } from 'react';
import { Component } from 'react';
import Loading from './components/Loading/Loading';
import {Canvas} from "@react-three/fiber"

import {OrbitControls,Stars} from "@react-three/drei"


function App() {
    const [MousePosition, setMousePosition] = useState({
        left: 0,
        top: 0
    })
  function handleMouseMove(ev) { setMousePosition({left: ev.pageX, top: ev.pageY}); }

  const ratio = .1
  const options = {
      root : null,
      rootMargin : '0px',
      threshold: ratio
  }
  const handleIntersect = function (entries,observer){
      entries.forEach(function(entry) {
          if (entry.intersectionRatio > ratio) {
              entry.target.classList.add('reveal-visible')
              observer.unobserve(entry.target)
          }
      })
  }
  const observer = new IntersectionObserver(handleIntersect, options);

  document.querySelectorAll('[class*="reveal-"]').forEach(function(r){
      observer.observe(r)
  })
  
  return (
    
    <div className="App" onMouseMove={(ev)=> handleMouseMove(ev)}>      
      <Navbar/>
      
      <Moi/>

      <div className='Wrapper reveal-3'>


        <Canvas className='canvas'>
          <Stars radius={300} depth={60} count={10000} factor={3} saturation={0} fade={true} />
          <OrbitControls enableZoom={false} enableRotate={false}/>
          <ambientLight intensity={0.9}/>
          <directionalLight position={[-2,5,2]} intensity={1}/>
          <Box left={MousePosition.left} top={MousePosition.top}/>
        </Canvas>
      </div>
      
    </div>
  );
}

export default App;
