import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import SubTitle from './SubTitle';


gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  // Array of client testimonials
  const clients = [
    {
      name: 'John Doe',
      quote: 'Exceptional service and attention to detail!',
      role: 'CEO, Example Corp',
    },
    {
      name: 'Jane Smith',
      quote: 'Transformed our business with their expertise.',
      role: 'Marketing Director, Innovate Ltd',
    },
    {
      name: 'Alex Johnson',
      quote: 'A game-changer for our team!',
      role: 'Product Manager, Tech Solutions',
    },
    {
      name: 'Emily Brown',
      quote: 'Outstanding support and results.',
      role: 'Founder, StartUp Hub',
    },
    {
      name: 'Michael Lee',
      quote: 'Highly professional and reliable.',
      role: 'CTO, FutureTech',
    },
    {
      name: 'Sarah Davis',
      quote: 'Their creativity exceeded our expectations.',
      role: 'Creative Director, DesignWorks',
    },
    {
      name: 'David Wilson',
      quote: 'Fast and efficient service!',
      role: 'Operations Manager, LogiCorp',
    },
    {
      name: 'Laura Martinez',
      quote: 'A pleasure to work with.',
      role: 'HR Manager, PeopleFirst',
    },
    {
      name: 'Chris Evans',
      quote: 'Top-notch quality and support.',
      role: 'Entrepreneur, StartX',
    },
    {
      name: 'Rachel Kim',
      quote: 'Their solutions boosted our productivity.',
      role: 'COO, NextGen Tech',
    },
  ];

  // Define row structure to match original sparse layout
  const rows = [
    [clients[0], null, clients[1], null], // Row 1: clients in col 1, 3
    [null, clients[2], null, null],      // Row 2: client in col 2
    [clients[3], null, null, clients[4]], // Row 3: clients in col 1, 4
   
  ];

  useEffect(() => {
    // Assign data-origin for testimonial cards that don't have it
    document.querySelectorAll('.testimonial-card:not([data-origin])').forEach((card, idx) => {
      card.setAttribute('data-origin', idx % 2 === 0 ? 'left' : 'right');
    });

    gsap.set('.testimonial-card', { scale: 0, force3D: true });

    const rows = document.querySelectorAll('.row');
    rows.forEach((row, index) => {
      const rowCards = row.querySelectorAll('.testimonial-card');

      if (rowCards.length > 0) {
        row.setAttribute('id', `row-${index}`);

        ScrollTrigger.create({
          id: `scaleIn-${index}`,
          trigger: row,
          start: 'top bottom',
          end: 'bottom bottom-=10%',
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: function (self) {
            const progress = self.progress;
            const easedProgress = Math.min(1, progress * 1.2);
            const scaleValue = gsap.utils.interpolate(0, 1, easedProgress);

            rowCards.forEach((card) => {
              gsap.set(card, {
                scale: scaleValue,
                force3D: true,
              });
            });

            if (progress > 0.95) {
              gsap.set(rowCards, {
                scale: 1,
                force3D: true,
              });
            }
          },
          onLeave: function () {
            gsap.set(rowCards, {
              scale: 1,
              force3D: true,
            });
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill()); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="relative h-full py-10">
    

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Section Title */}
        <SubTitle title="Our Testimonials" />
        <h2 className="text-4xl md:text-5xl mt-6 font-bold bg-gradient-to-b from-white via-white to-zinc-400 text-transparent bg-clip-text mb-12">
          What Our Clients Say
        </h2>

        {/* Testimonials Grid */}
        {rows.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="row flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
            {row.map((client, colIndex) => (
              <div key={`col-${rowIndex}-${colIndex}`} className="col w-full sm:w-1/2 lg:w-1/4">
                {client ? (
                 <div
  className="testimonial-card relative bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-lg overflow-hidden p-4"
>
  <p className="text-lg italic mb-4 text-gray-400">"{client.quote}"</p>
  <h3 className="text-2xl font-semibold text-white mb-2">{client.name}</h3>
  <p className="text-sm text-gray-400">{client.role}</p>

  <motion.div
    className="absolute bottom-0 right-0 h-full w-full bg-gradient-to-tl from-[#61E4ED]/70 via-zinc-900/30 to-transparent rounded-lg blur-2xl"
    initial={{ opacity: 0.3, scale: 0.9 }}
    animate={{ opacity: 0.5, scale: 1 }}
    transition={{ duration: 2, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
  />
</div>
                ) : null}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;