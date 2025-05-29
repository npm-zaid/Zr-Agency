import React from 'react';
import gsap from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';





gsap.registerPlugin(ScrollTrigger);

export const projectsData = [
    {
       
        name: 'google gemini',
        link: 'https://gemini-clone-blue-tau.vercel.app/'
    },
    {
      
        name: 'Ai Code Reviewer',   
        link: 'https://ai-code-reviewer-01.vercel.app/'
    },
    {
        
        name: 'e-commerce',
        link: 'https://clothix-sand.vercel.app'
    },

    {
       
        name: 'quiz game',
        link: 'https://npm-zaid.github.io/QUIZ/'
    },
    {
       
        name: 'admin dashboard',
        link: 'https://clothix-admin-eight.vercel.app'
    },

    {
      
        name: 'realstate',
        link: 'https://realistic-theta.vercel.app/'
    },
  

]


function Projects() {


    const transform = [
        [
            [10, 50, -10, 10],
            [20, -10, -45, 20]
        ],
        [
            [0, 47.5, -10, 15],
            [-25, 15, -45, 30]
        ],
        [
            [0, 52.5, -10, 5],
            [15, -5, -40, 60]
        ],
        [
            [0, 50, 30, -80],
            [20, -10, 60, 5]
        ],
        [
            [0, 55, -15, 30],
            [25, -15, 60, 95]
        ]
    ];

    useEffect(() => {
        gsap.to(".trigger .mover", {
            duration: 3,
            color: 'rgba(255,255,255)',
            transform: "translateX(-280vw)",
            scrollTrigger: {
                trigger: ".trigger",
                scroller: "body",
                scrub: 2,
                start: 'top 0%',
                end: 'top -100%',
                pin: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const Cards = document.querySelectorAll(".box");

                    Cards.forEach((card, index) => {
                        const cardProgress = Math.max(0, Math.min((progress - index * 0.1123) * 2, 1));
                        const isVisible = cardProgress > 0;

                        const cardX = gsap.utils.interpolate(25, -1600, cardProgress);

                        // Key Change: Safe access to transform data
                        if (transform[index] && transform[index][0] && transform[index][1]) {
                            const Ypos = transform[index][0];
                            const rotations = transform[index][1];

                            const yProgress = cardProgress * 3;
                            const yIndex = Math.min(Math.floor(yProgress), Ypos.length - 2);

                            // Additional check to prevent out-of-bounds access
                            if (Ypos.length > 0 && yIndex >= 0 && yIndex < Ypos.length - 1) {
                                const yInterpolation = yProgress - yIndex;
                                const cardY = gsap.utils.interpolate(Ypos[yIndex], Ypos[yIndex + 1], yInterpolation);
                                const cardRotation = gsap.utils.interpolate(rotations[yIndex], rotations[yIndex + 1], yInterpolation);

                                gsap.set(card, {
                                    x: cardX,
                                    y: isVisible ? cardY : 0,
                                    rotation: isVisible ? cardRotation : 0,
                                    opacity: isVisible ? 1 : 0
                                });
                            }
                        }
                        else {
                            gsap.set(card, {
                                x: cardX,
                                opacity: isVisible ? 1 : 0
                            })
                        }
                    });
                }
            }
        });
    }, []); 




    return (
        <div className='trigger h-screen bg-zinc-900 flex gap-3 justify-center items-center relative overflow-hidden'>
            <div className='absolute top-0 left-0 w-[250vw] h-full flex items-center mover text-zinc-700/40'>
                <p className='sm:text-[16vw] text-[50vw] whitespace-nowrap ml-20'>AMAZING STUFF HERE</p>
            </div>

            {projectsData.slice(0, 5).map((item, index) => (

                <div key={index} className=" absolute box left-full z-50 drop-shadow-xl w-64 h-96 overflow-hidden rounded-xl bg-[#3d3c3d]">
                    <a target="_blank" href={item.link}>
                        <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]">
                            <span className='text-center'>{item.name}</span>
                            <span className='absolute top-3 right-5 text-zinc-600/50 sm:text-[3vw] text-[10vw]'>0{index + 1}</span>
                        </div>
                    </a>
                    <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2" />
                </div>

            ))}
        </div>
    );
}

export default Projects;