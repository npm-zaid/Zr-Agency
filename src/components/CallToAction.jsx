import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Button from "./Button";
import SubTitle from "./SubTitle";

// Animation variants for container
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

const CallToAction = () => {
  return (
    <motion.section
      id="cta"
      className=" bg-zinc-900 py-20 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="absolute h-1/2 w-[80vw] bg-gradient-to-r from-[#61E4ED]/20 to-transparent rounded-full blur-3xl" />
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div variants={childVariants}>
          <SubTitle title="Ready to Start?" />
        </motion.div>
        <h2
          className="sm:text-5xl my-6 text-3xl font-bold text-white "
         
        >
          <span className="bg-gradient-to-b from-white via-white to-zinc-500 text-transparent bg-clip-text">
            Transform Your Vision
          </span>{" "}
          <span className="bg-gradient-to-b from-[#64E3FA] to-[#64E3FA]/50 text-transparent bg-clip-text">
            into Reality
          </span>
        </h2>
        <motion.p
          className="sm:text-lg text-base text-gray-400 max-w-2xl mx-auto mb-8"
          variants={childVariants}
        >
          Let’s collaborate to create a website that stands out and delivers results. Get in touch today!
        </motion.p>
     
      </div>
    </motion.section>
  );
};

export default CallToAction;