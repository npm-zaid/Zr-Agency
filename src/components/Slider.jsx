import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Slider = () => {
  const sliderRef = useRef(null);
  const firstListRef = useRef(null);
  const secondListRef = useRef(null);

  useEffect(() => {
    const firstList = firstListRef.current;
    const secondList = secondListRef.current;
    const slider = sliderRef.current;

    // Get the width of the first list to calculate the animation distance
    const listWidth = firstList.getBoundingClientRect().width;

    // GSAP animation for infinite scroll
    const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'none' } });

    tl.to([firstList, secondList], {
      x: `-${listWidth}px`,
      duration: 10, // Adjust duration for speed
      onComplete: () => {
        // Reset position to create seamless loop
        gsap.set([firstList, secondList], { x: 0 });
      },
    });

    // Pause animation on hover
    slider.addEventListener('mouseenter', () => tl.pause());
    slider.addEventListener('mouseleave', () => tl.resume());

    // Cleanup event listeners on component unmount
    return () => {
      slider.removeEventListener('mouseenter', () => tl.pause());
      slider.removeEventListener('mouseleave', () => tl.resume());
    };
  }, []);

  return (
    <div
      ref={sliderRef}
      className="w-full text-5xl py-8 h-screen bg-zinc-700/20 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
    >
      <div
        ref={firstListRef}
        className="flex items-center gap-7 justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll"
      >
          <div className='h-20 w-20 bg-amber-200 rounded-xl '></div>
            <div className='h-20 w-20 bg-amber-200 rounded-xl '></div>
              <div className='h-20 w-20 bg-amber-200 rounded-xl '></div>
                <div className='h-20 w-20 bg-amber-200 rounded-xl '></div>
                <div className='h-20 w-20 bg-amber-200 rounded-xl '></div>
            <div className='h-20 w-20 bg-amber-200 rounded-xl '></div>
              <div className='h-20 w-20 bg-amber-200 rounded-xl '></div>
                <div className='h-20 w-20 bg-amber-200 rounded-xl '></div>
                <div className='h-20 w-20 bg-amber-200 rounded-xl '></div>
            <div className='h-20 w-20 bg-amber-200 rounded-xl '></div>
              <div className='h-20 w-20 bg-amber-200 rounded-xl '></div>
                <div className='h-20 w-20 bg-amber-200 rounded-xl '></div>
   <div className='h-20 w-20 bg-amber-200 rounded-xl '></div>
              <div className='h-20 w-20 bg-amber-200 rounded-xl '></div>
                <div className='h-20 w-20 bg-amber-200 rounded-xl '></div>
                <div className='h-20 w-20 bg-amber-200 rounded-xl '></div>
            <div className='h-20 w-20 bg-amber-200 rounded-xl '></div>
              <div className='h-20 w-20 bg-amber-200 rounded-xl '></div>
                <div className='h-20 w-20 bg-amber-200 rounded-xl '></div>
                             <div className='h-20 w-20 bg-amber-200 rounded-xl '></div>
   <div className='h-20 w-20 bg-amber-200 rounded-xl '></div>
              <div className='h-20 w-20 bg-amber-200 rounded-xl '></div>
                <div className='h-20 w-20 bg-amber-200 rounded-xl '></div>
                <div className='h-20 w-20 bg-amber-200 rounded-xl '></div>
            <div className='h-20 w-20 bg-amber-200 rounded-xl '></div>
              <div className='h-20 w-20 bg-amber-200 rounded-xl '></div>
                <div className='h-20 w-20 bg-amber-200 rounded-xl '></div>
      </div>
    </div>
  );
};

export default Slider;