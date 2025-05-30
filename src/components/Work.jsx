import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import SubTitle from './SubTitle';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Work = () => {

  const projects = [
    { id: 1, category: "E-Commerce", name: "Way Fields", year: "2024", image: "https://framerusercontent.com/images/0DBAix0ysUgnw6WhKOms5oGcN8.png?scale-down-to=1024" },
    { id: 2, category: "E-Commerce", name: "Raven Studio", year: "2025", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" },
    { id: 3, category: "Fashion", name: "Trend Vogue", year: "2023", image: "https://framerusercontent.com/images/Aalew56kBlkyaHQYY3wkFNANc.svg" },
    { id: 4, category: "Tech", name: "Innovate Hub", year: "2024", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" },
    { id: 5, category: "Lifestyle", name: "Urban Nest", year: "2025", image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" },
    { id: 6, category: "Fitness", name: "Fit Pulse", year: "2023", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" },
  ];

  useEffect(() => {
    const cards = gsap.utils.toArray(".card");
    const rotations = [-12, 10, -5, 5, -5, 15];

    cards.forEach((card, index) => {
      gsap.set(card, {
        y: window.innerHeight,
        rotate: rotations[index],
      });
    });

    ScrollTrigger.create({
      trigger: ".sticky--cards",
      start: "top top",
      end: `+=${window.innerHeight * 8}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const totalCards = cards.length;
        const progressPerCard = 1 / totalCards;

        cards.forEach((card, index) => {
          const cardStart = index * progressPerCard;
          let cardProgress = (progress - cardStart) / progressPerCard;
          cardProgress = Math.min(Math.max(cardProgress, 0), 1);

          let yPos = window.innerHeight * (1 - cardProgress);
          let xPos = 0;

          if (cardProgress === 1 && index < totalCards - 1) {
            const remainingProgress =
              (progress - (cardStart + progressPerCard)) /
              (1 - cardStart + progressPerCard);

            if (remainingProgress > 0) {
              const distanceMultiplier = 1 - index * 0.15;
              xPos =
                -window.innerWidth *
                0.3 *
                distanceMultiplier *
                remainingProgress;
              yPos =
                -window.innerHeight *
                0.3 *
                distanceMultiplier *
                remainingProgress;
            }
          }

          gsap.set(card, { x: xPos, y: yPos });
        });
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div>
     

      <section className='h-screen sticky--cards bg-zinc-900 relative overflow-hidden'>
        <div className="text-center mb-16">
                <SubTitle title="Portfolio" />
                <h2 className="text-4xl md:text-5xl font-bold text-white my-6">
                  <span className="bg-gradient-to-b from-white via-white to-zinc-500 text-transparent bg-clip-text">
                    Our Latest Projects
                  </span>
                </h2>
              </div>
        {projects.map((project) => (
          <div
            key={project.id}
            className="card bg-zinc-800/80 p-4 sm:w-[30vw] sm:h-[60vh] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group glass-card rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.name}
                className="w-full sm:h-[30vh] h-[20vh] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#61E4ED]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="flex items-center text-nowrap gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
                  <span className='sm:block hidden'>View Now</span>
                  <ArrowRight className="w-5 h-5" />
               
                </button>
              </div>
            </div>
            <div className="p-6 flex sm:justify-between sm:items-center">
              <div>
                <span className="text-xs font-medium text-gray-400 bg-zinc-700/50 px-2 py-1 rounded-full">
                  {project.category}
                </span>
                <h4 className="text-xl font-semibold text-white mt-2">
                  <span className="bg-gradient-to-b from-[#64E3FA] to-[#64E3FA]/50 text-transparent bg-clip-text text-nowrap">
                    {project.name}
                  </span>
                </h4>
                <p className="text-gray-400 text-sm">{project.year}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

     
    </div>
  );
};

export default Work;
