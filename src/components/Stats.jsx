import React, { useEffect, useRef, useState } from 'react';
import NumberFlow from '@number-flow/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { Code2, TrendingUp, Smile, Globe } from 'lucide-react';
import SubTitle from './SubTitle';

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const sectionRef = useRef(null);
  const [values, setValues] = useState(["000", "000", "000", "000"]);

  const stats = [
    { label: "Happy Clients", unit: "+", target: 120, icon: <Smile className="w-8 h-8 text-green-400" /> },
    { label: "Projects Completed", unit: "", target: 450, icon: <TrendingUp className="w-8 h-8 text-sky-400" /> },
    { label: "Websites Optimized", unit: "+", target: 300, icon: <Globe className="w-8 h-8 text-yellow-400" /> },
    { label: "Lines of Code", unit: "+", target: 1000000, icon: <Code2 className="w-8 h-8 text-purple-400" /> },
  ];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      onEnter: () => {
        stats.forEach((stat, index) => {
          gsap.to(
            { value: 0 },
            {
              value: stat.target,
              duration: 2,
              ease: 'power2.out',
              onUpdate: function () {
                setValues((prev) => {
                  const newValues = [...prev];
                  newValues[index] = String(Math.floor(this.targets()[0].value)).padStart(3, '0');
                  return newValues;
                });
              },
            }
          );
        });
      },
      onLeaveBack: () => setValues(["000", "000", "000", "000"]),
    });
  }, []);

  return (
    <div ref={sectionRef} className="min-h-[80vh] flex flex-col justify-center items-center text-white">
      <SubTitle title="Our Stats" />
      <h2 className="text-4xl md:text-5xl mt-4 font-bold bg-gradient-to-b from-white via-white to-zinc-400 text-transparent bg-clip-text mb-12">
        Impact In Numbers
      </h2>

      <div className="px-[3vw] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-zinc-800/80 rounded-xl border-l-4 border-[#61E4ED] p-3 flex flex-col justify-between shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="flex justify-between items-center mb-4">
              <p className="text-zinc-400 text-sm font-medium">{stat.label}</p>
              <div className="p-2 rounded-full bg-white/10 shadow-inner">{stat.icon}</div>
            </div>

            <p className="text-4xl font-bold tracking-tight text-white/90">
              {values[index].split('').map((digit, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <NumberFlow value={digit} />
                </motion.span>
              ))}
              <span className="ml-1">{stat.unit}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
