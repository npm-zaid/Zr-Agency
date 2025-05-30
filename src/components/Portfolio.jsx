import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import SubTitle from "./SubTitle";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      category: "E-Commerce",
      name: "Way Fields",
      year: "2024",
      image: "https://framerusercontent.com/images/0DBAix0ysUgnw6WhKOms5oGcN8.png?scale-down-to=1024",
    },
    {
      id: 2,
      category: "E-Commerce",
      name: "Raven Studio",
      year: "2025",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      category: "Fashion",
      name: "Trend Vogue",
      year: "2023",
      image: "https://framerusercontent.com/images/Aalew56kBlkyaHQYY3wkFNANc.svg",

    },
    {
      id: 4,
      category: "Tech",
      name: "Innovate Hub",
      year: "2024",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 5,
      category: "Lifestyle",
      name: "Urban Nest",
      year: "2025",
     image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 6,
      category: "Fitness",
      name: "Fit Pulse",
      year: "2023",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  // GSAP Animation Setup
  useEffect(() => {
    // Animate each portfolio card on scroll
    gsap.utils.toArray(".portfolio-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%", // Start animation when the card is 80% from the top of the viewport
            toggleActions: "play none none none",
            scrub: true,
          },
          delay: index * 0.2, // Stagger the animations
        }
      );

      // Hover animation with GSAP
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          y: -10,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <SubTitle title="Portfolio" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            <span className="bg-gradient-to-b from-white via-white to-zinc-500 text-transparent bg-clip-text">
              Our Latest Projects
            </span>
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="portfolio-card relative group glass-card rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Project Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#61E4ED]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* View Now Button (Visible on Hover) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
                    View Now
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex justify-between items-center">
                <div>
                  <span className="text-xs font-medium text-gray-400 bg-zinc-700/50 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                  <h4 className="text-xl font-semibold text-white mt-2">
                    <span className="bg-gradient-to-b from-[#64E3FA] to-[#64E3FA]/50 text-transparent bg-clip-text">
                      {project.name}
                    </span>
                  </h4>
                  <p className="text-gray-400 text-sm">{project.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;