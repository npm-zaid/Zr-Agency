import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import SubTitle from './SubTitle';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


import pic1 from '../assets/Screenshot (626).png'
import pic2 from '../assets/Screenshot (627).png'
import pic3 from '../assets/Screenshot (628).png'
import pic4 from '../assets/Screenshot (629).png'
import pic5 from '../assets/Screenshot (630).png'
import pic6 from '../assets/Screenshot (631).png'
import pic7 from '../assets/Screenshot (632).png'



const Work = () => {

  const projects = [
    { id: 1, category: "E-Commerce", name: "Clothix", year: "2024", image: pic1 ,link:'https://clothix-sand.vercel.app/'},
    { id: 2, category: "Real Estate", name: "Realistic", year: "2024", image:pic2 ,link:'https://realistic-theta.vercel.app/'},
    { id: 3, category: "E-Commerce", name: "Admin Dashboard", year: "2024", image: pic3 ,link:'https://clothix-admin-eight.vercel.app/' },
    { id: 4, category: "Techno", name: "The Apollo Project", year: "2025", image: pic4 ,link:'https://the-apollo-evo.vercel.app/'},
    { id: 5, category: "Agency", name: "Ochi", year: "2024", image: pic5 ,link:'https://npm-zaid.github.io/OCHI-DESIGN/'},
    { id: 6, category: "LifeStyle", name: "Fizzi", year: "2025", image: pic6 ,link:'https://fizzi-demo.vercel.app/'},
        { id: 6, category: "Business", name: "Erp Software", year: "2025", image: pic7 ,link:'https://erp-10.vercel.app/'},
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
          
          <a
            key={project.id}
            href={project.link}
            target='_blank'
            className="card inline-block bg-zinc-800/80 p-3 sm:w-[30vw] w-[60vw] sm:h-[55vh] h-[40vh] overflow-hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group glass-card rounded-2xl shadow-lg"
          >
            <div className='overflow-hidden rounded-xl'>
            <div className="relative">
              <img
                src={project.image}
                alt={project.name}
                className="w-full sm:h-[30vh] h-[20vh] object-cover transition-transform duration-500 group-hover:scale-110"
              />
        
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="flex items-center text-nowrap gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
                  <span className='sm:block hidden'>View Now</span>
                  <ArrowRight className="w-5 h-5" />
               
                </button>
              </div>
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
                     <div className="absolute inset-0 bg-gradient-to-t from-[#61E4ED]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </a>
        ))}
      </section>

     
    </div>
  );
};

export default Work;
