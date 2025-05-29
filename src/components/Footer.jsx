import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.footer
      className="py-10 bg-zinc-900/80 backdrop-blur-md relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div className="flex flex-col md:flex-row justify-between items-center gap-8" variants={containerVariants}>
          {/* Logo */}
          <motion.div className="flex items-center space-x-2" variants={itemVariants}>
            <span className="text-xl font-bold tracking-wider bg-gradient-to-b from-white to-zinc-400 text-transparent bg-clip-text">
              KrishAgency
            </span>
            <Sparkles className="w-5 h-5 text-[#61E4ED]" />
          </motion.div>

          {/* Links */}
          <motion.div className="flex flex-col md:flex-row gap-4 text-gray-400" variants={containerVariants}>
            <motion.a href="#home" className="hover:text-[#64E3FA]" variants={itemVariants}>Home</motion.a>
            <motion.a href="#services" className="hover:text-[#64E3FA]" variants={itemVariants}>Services</motion.a>
            <motion.a href="#portfolio" className="hover:text-[#64E3FA]" variants={itemVariants}>Portfolio</motion.a>
            <motion.a href="#about" className="hover:text-[#64E3FA]" variants={itemVariants}>About</motion.a>
            <motion.a href="#contact" className="hover:text-[#64E3FA]" variants={itemVariants}>Contact</motion.a>
          </motion.div>

          {/* Copyright */}
          <motion.p className="text-gray-400 text-sm" variants={itemVariants}>
            &copy; 2025 KrishAgency. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;