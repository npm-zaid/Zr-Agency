import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SubTitle from "./SubTitle";

// Sample testimonial data
const testimonials = [
  {
    quote: "This team transformed our vision into a stunning website that exceeds expectations!",
    name: "Sarah Johnson",
    role: "CEO, TechTrend Innovations",
  },
  {
    quote: "Their expertise and creativity delivered a high-performance platform our users love.",
    name: "Michael Chen",
    role: "Founder, StartUp Solutions",
  },
  {
    quote: "An exceptional experience! The website is both beautiful and highly functional.",
    name: "Emily Davis",
    role: "Marketing Director, GrowthHub",
  },
];

const Testimonial = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for child elements
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Variants for testimonial card hover effect
  const cardVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(97, 228, 237, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  // Variants for the ping animation (matching Hero section)
  const pingVariants = {
    animate: {
      scale: [1, 1.5, 1],
      opacity: [0.4, 0.2, 0.4],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      id="testimonials"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-zinc-900"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-[#61E4ED]/60 rounded-full blur-3xl"
          variants={pingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#61E4ED]/80 via-zinc-900/50 to-transparent rounded-full blur-3xl"
          initial={{ opacity: 0.3, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Section Title */}
       
          <SubTitle title="Our Clients" />
        
        <motion.h2
          className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-white to-zinc-400 text-transparent bg-clip-text mb-12"
          variants={childVariants}
        >
          Testimonials
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative bg-zinc-800/80 p-6 rounded-lg glass-card border border-[#61E4ED]/20"
              variants={childVariants}
              whileHover="hover"
              custom={index}
            >
              <Quote className="w-8 h-8 text-[#61E4ED]/60 mb-4 mx-auto" />
              <p className="text-[1vw] text-gray-300 leading-relaxed mb-4">
                "{testimonial.quote}"
              </p>
              <div className="text-center">
                <p className="text-[1.2vw] font-semibold bg-gradient-to-b from-[#61E4ED] to-[#64E3FA]/50 text-transparent bg-clip-text">
                  {testimonial.name}
                </p>
                <p className="text-[1vw] text-gray-400">{testimonial.role}</p>
              </div>
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#61E4ED]/30 to-transparent rounded-full blur-xl -z-10" />
            </motion.div>
          ))}
        </div>
াহ

      </div>
    </motion.section>
  );
};

export default Testimonial;