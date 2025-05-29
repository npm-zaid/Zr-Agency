import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SubTitle from "./SubTitle";

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

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the animation of child elements
      },
    },
  };

  // Animation variants for each project card
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="portfolio" className=" ">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <SubTitle title="Portfolio"/> 
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Our Latest Projects
          </h2>
        </div>

        {/* Portfolio Grid with Animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative group bg-zinc-800/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.3 } }} // Hover animation
            >
              {/* Project Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-[300px] object-cover"
                />
                {/* Category Label */}
                <div className="absolute top-0 left-0 bg-black/50 p-2 text-white text-sm">
                  <SubTitle title={project.category}/>
                </div>
               
                {/* View Now Button (Visible on Hover) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <button className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
                    View Now
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex justify-between items-center">
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    {project.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{project.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;