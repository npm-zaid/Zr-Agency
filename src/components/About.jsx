import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SubTitle from './SubTitle';
import { Milestone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {


    gsap.to('.about-text span', {
      color: '#B8B8BC',
      z: -600,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: '.about-text',
        scroller: 'body',
        start: 'top 65%',
        end: 'top 10%',
        scrub: 2,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill()); // Cleanup ScrollTriggers
    };
  }, []);

  const paragraphs = [
    "We are a passionate team at DevCraft, dedicated to transforming your digital vision into reality. Our journey began with a simple goal: to create stunning, high-performance websites that captivate audiences and drive meaningful results.",
    "With expertise in full-stack development, UI/UX design, and API integration, we craft tailored solutions to meet your unique needs. Partner with us to bring your ideas to life with creativity, precision, and innovation.",
    "Our mission is to empower businesses with exceptional digital experiences, blending creativity and technology to deliver solutions that inspire and succeed.",
  ];

  return (
    <div className="relative py-10 h-full overflow-hidden">
      {/* Enhanced background effect */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-[#61E4ED]/80 via-[#61E4ED]/40 to-transparent rounded-full blur-3xl"
          initial={{ opacity: 0.3, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SubTitle title="About Us" />

        <h2 className="text-4xl sm:text-5xl lg:text-6xl mt-6 font-bold text-center bg-gradient-to-b from-white via-gray-100 to-gray-400 text-transparent bg-clip-text mb-12 animate-fade-in">
          Who We Are
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="w-full space-y-8">
            <div className="space-y-5 text-zinc-700 about-text">
              {paragraphs.slice(0, 2).map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-6 tracking-wide whitespace-pre-wrap"
                >
                  {paragraph.split('').map((char, charIndex) => (
                    <span
                      key={charIndex}
                      className="inline-block"
                      style={{ minWidth: char === ' ' ? '0.25em' : 'auto' }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
                </p>
              ))}
            </div>

            <div className="p-5 bg-zinc-900/60 border-zinc-700/30 rounded-xl backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items `

-center gap-3">
                <Milestone className="w-7 h-7 text-[#61E4ED] inline" />
                <span>Our Mission</span>
              </h3>
              <p className="text-zinc-700 leading-relaxed tracking-wide about-text whitespace-pre-wrap">
                {paragraphs[2].split('').map((char, charIndex) => (
                  <span
                    key={charIndex}
                    className="inline-block"
                    style={{ minWidth: char === ' ' ? '0.25em' : 'auto' }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;