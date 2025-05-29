import { ArrowRight, Code, Sparkles } from "lucide-react";
import { delay, motion } from "framer-motion"; // Import Framer Motion
import Button from "./Button";
import SubTitle from "./SubTitle";

const Hero = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger child animations
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

  // Variants for the ping animation
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

  // Variants for the floating code icon
  const floatVariants = {
    animate: {
      y: [-10, 10],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-zinc-900"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/60 rounded-full blur-3xl"
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

      <motion.div className="container mx-auto px-6 text-center relative z-10" variants={childVariants}>
        <div className="max-w-4xl mx-auto flex flex-col sm:gap-4 gap-10">
          {/* Badge */}
        <SubTitle title='build future'/>

          {/* Main Heading */}
          <motion.h1
            className="sm:text-[6vw] text-[12vw] font-bold  sm:leading-[6.5vw] leading-[12vw]"
            variants={childVariants}
          >
            <span className="bg-gradient-to-b from-white via-white to-zinc-500  text-transparent bg-clip-text">
              Crafting
            </span>
            <span className="bg-gradient-to-b  big from-[#64E3FA] via-[#64E3FA]/80 to-[#64E3FA]/20 text-transparent bg-clip-text p-4">
              Digital
            </span>{" "}
            <span className="bg-gradient-to-b from-white via-white to-zinc-500  text-transparent bg-clip-text">
              Experiences
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="sm:text-[1vw] text-[3vw] text-gray-400 sm:max-w-lg max-w-[70vw] mx-auto leading-relaxed"
            variants={childVariants}
          >
            We transform your vision into stunning, high-performance websites that drive results and captivate your audience.
          </motion.p>

          <motion.div
            className="mt-5 rounded-lg glass-card flex items-center justify-center"
            variants={childVariants}
          >
            <Button  title={"Lets Talk"}/>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating Code Icon */}
      <motion.div
        className="absolute bottom-10 left-10"
        variants={floatVariants}
        animate="animate"
      >
        <Code className="w-8 h-8 text-blue-400/50" />
      </motion.div>
    </motion.section>
  );
};

export default Hero;