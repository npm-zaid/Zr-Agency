import React, { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Model from './components/Model';


function App() {
    const lenisRef = useRef();
  useEffect(() => { 
    const lenis = new Lenis({
      duration: 1.2, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical', 
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: true,
      touchMultiplier: 2,
      infinite: false,
      lerp: 0.02,
      wheelMultiplier: 1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenisRef.current = lenis; 

    return () => {
      lenis.destroy(); 
    };
  }, []);
  return (
    <div className="bg-zinc-900 overflow-hidden">
      <Navbar />
       <Model />
      
    </div>
  );
}

export default App;