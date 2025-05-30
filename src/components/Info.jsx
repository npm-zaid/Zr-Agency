import React from 'react'
import gsap from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Info = () => {

    useEffect(()=>{

        gsap.to(".page2 h1 span",{
            color:"black",
            z:-600,
            duration:1,
            stagger:1,
            scrollTrigger:{
                trigger:".page2",
                scroller:"body",
              
                start:"top 65%",
                end:"top 10%",
                scrub:2
                
            }
        })
    },[])

  return (
    <div  className="class bg-[#FFDC00]  h-screen flex justify-center items-center page2 flex-col gap-8 sm:text-lg text-sm px-10 text-black/20">
    <h1>
        {"Greetings! I'm an enthusiastic Full Stack Developer who thrives on crafting vibrant and interactive web applications.".split('').map((item)=><span>{item}</span>)}
        </h1>
        <h1>
        {"My expertise spans both front-end and back-end technologies, allowing me to weave together seamless user experiences that captivate and engage.".split('').map((item)=><span >{item}</span>)}
        </h1>
        <h1>
        {"I've dabbled in a variety of frameworks and libraries, such as Angular and Vue.js, which empowers me to tackle diverse project challenges with creativity and flair.".split('').map((item)=><span >{item}</span>)}
        </h1>
        <h1>
        {"I'm also proficient in harnessing the power of RESTful APIs and GraphQL, making data retrieval and manipulation not just efficient, but also elegant.".split('').map((item)=><span >{item}</span>)}
        </h1>
    </div>
  )
}

export default Info

{/**
  import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Info = () => {
  const titlesRef = useRef([]);

  useEffect(() => {
    const titles = titlesRef.current;

    titles.forEach((title) => {
      const chars = Array.from(title.querySelectorAll('span')); // Convert NodeList to Array

      gsap.set(chars.map(char => char.parentNode), { perspective: 1000 }); // Set perspective on parent

      gsap.fromTo(
        chars,
        {
          willChange: 'opacity, transform',
          transformOrigin: '50% 0%',
          opacity: 0,
          rotationX: -90,
          z: -200,
        },
        {
          ease: 'power1',
          opacity: 1,
          stagger: 0.05,
          rotationX: 0,
          z: 0,
          scrollTrigger: {
            trigger: title,
            start: 'top 80%', // Adjust start position as needed
            end: 'bottom top+=20%',
            scrub: true,
          },
        }
      );
    });

    return () => { // Cleanup ScrollTriggers
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const textLines = [
    "Greetings! I'm an enthusiastic Full Stack Developer who thrives on crafting vibrant and interactive web applications.",
    "My expertise spans both front-end and back-end technologies, allowing me to weave together seamless user experiences that captivate and engage.",
    "I've dabbled in a variety of frameworks and libraries, such as Angular and Vue.js, which empowers me to tackle diverse project challenges with creativity and flair.",
    "I'm also proficient in harnessing the power of RESTful APIs and GraphQL, making data retrieval and manipulation not just efficient, but also elegant.",
  ];

  return (
    <div className="bg-zinc-800 h-screen flex justify-center items-center flex-col gap-8 sm:text-xl text-sm px-10 text-zinc-300"> 
    {textLines.map((line, index) => (
        <h1 key={index} ref={(el) => (titlesRef.current[index] = el)}>
          {line.split('').map((char, charIndex) => (
            <span key={charIndex} className="inline-block">
              {char}
            </span>
          ))}
        </h1>
      ))}
    </div>
  );
};

export default Info;
    

    */}