import React, { useState, useRef, useLayoutEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import logo from '../assets/rcb-logo-new_0.png';

const MAX_VISIBILITY = 3;

const Card = ({ title, imageUrl, isActive }) => (
  <div className="w-full h-full p-8 rounded-xl relative group">
    <img
      src={imageUrl}
      alt={title}
      className="fixed top-0 left-0 drop-shadow-lg drop-shadow-black w-full h-full object-contain z-10"
    />
    <h2 className={`transition-all duration-300 text-[3vw] text-nowrap font-bold text-center absolute w-full -bottom-12 bg-black/50 ${isActive ? 'text-[#C49E4A]' : 'text-[#E9484B]'} left-0 tracking-wider z-0`}>
      {title}
    </h2>
    {isActive && (
      <img
        src={logo}
        className="absolute w-[50vw] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        alt="RCB Logo"
      />
    )}
  </div>
);

const Carousel = ({ children }) => {
  const [active, setActive] = useState(2);
  const cardRefs = useRef([]);

  useLayoutEffect(() => {
    cardRefs.current.forEach((el, i) => {
      const offset = active - i;
      const absOffset = Math.abs(offset);
      const isVisible = absOffset < MAX_VISIBILITY;

      const transform = `
        rotateY(${offset * 10}deg)
        scaleY(${1 - absOffset * 0.1})
        translateZ(${-absOffset * 40}rem)
        translateX(${-offset * 40}rem)
      `;

      gsap.to(el, {
        duration: 0.5,
        opacity: isVisible ? 1 : 0,
        filter: `blur(${absOffset * 0.3}rem)`,
        transform,
        ease: 'power3.out',
        display: absOffset >= MAX_VISIBILITY ? 'none' : 'block',
        pointerEvents: active === i ? 'auto' : 'none'
      });
    });
  }, [active]);

  return (
    <div className="relative w-[23rem] h-[29rem] mx-auto perspective-[1000px]">
      {active > 0 && (
        <button
          onClick={() => setActive((i) => i - 1)}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-black z-10 bg-transparent p-2"
        >
          <ChevronLeft size={40} strokeWidth={1.5} />
        </button>
      )}

      {React.Children.map(children, (child, i) => (
        <div
          className="absolute w-full h-full will-change-transform"
          ref={(el) => (cardRefs.current[i] = el)}
        >
          {React.cloneElement(child, { isActive: active === i })}
        </div>
      ))}

      {active < React.Children.count(children) - 1 && (
        <button
          onClick={() => setActive((i) => i + 1)}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-black z-10 bg-transparent p-2"
        >
          <ChevronRight size={40} strokeWidth={1.5} />
        </button>
      )}
    </div>
  );
};



const Carousel3D = () => {
  const data = [
    { image: 'https://www.royalchallengers.com/PRRCB01/public/2025-03/Rajat%20%281%29_0.png', name: 'Rajat Patidar' },
    { image: 'https://www.royalchallengers.com/PRRCB01/public/2025-03/david_0.png', name: 'Tim David' },
    { image: 'https://www.royalchallengers.com/PRRCB01/public/2025-03/vk%20%282%29_0.png', name: 'Virat Kohli' },
    { image: 'https://www.royalchallengers.com/PRRCB01/public/2025-03/hazelwood%20%281%29_0.png', name: 'Josh Hazelwood' },
    { image: 'https://www.royalchallengers.com/PRRCB01/public/2025-03/livingstone.png', name: 'Liam Livingstone' },
    { image: 'https://www.royalchallengers.com/PRRCB01/public/2025-03/romario.png', name: 'Romario Shepherd' },
    { image: 'https://www.royalchallengers.com/PRRCB01/public/2025-03/dayal.png', name: 'Yash Dayal' },
    { image: 'https://www.royalchallengers.com/PRRCB01/public/2025-03/jitesh%20%281%29.png', name: 'Jitesh Sharma' },
    { image: 'https://www.royalchallengers.com/PRRCB01/public/2025-03/krunal_0.png', name: 'Krunal Pandya' },
    { image: 'https://www.royalchallengers.com/PRRCB01/public/2025-03/bhuvi%20%282%29.png', name: 'Bhuvneshwar Kumar' },
    { image: 'https://www.royalchallengers.com/PRRCB01/public/2025-03/suyash%20%281%29.png', name: 'Suyash Sharma' },

     
  ];

  return (
    <div className="min-h-screen w-screen relative flex items-center justify-center bg-zinc-900">
      <div
        className="absolute banner top-0 left-1/2 w-1/2 transform -translate-x-1/2 p-8 h-full bg-gradient-to-b from-[#E9484B] to-transparent"
        style={{ clipPath: 'polygon(34% 0, 65% 0, 100% 100%, 0% 100%)' }}
      ></div>

      <Carousel>
        {data.map((player) => (
          <Card
            key={player.name}
            title={player.name}
            content=""
            imageUrl={player.image}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Carousel3D;
