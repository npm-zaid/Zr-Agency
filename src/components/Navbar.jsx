import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const mobileMenuVariants = {
    closed: { height: 0, opacity: 0 },
    open: { height: 'auto', opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  return (
    <motion.nav
      className="fixed w-full top-0 z-50 backdrop-blur-md shadow-lg"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
            <span className="text-2xl font-bold tracking-wider bg-gradient-to-b from-white to-zinc-400 text-transparent bg-clip-text">
              DevCraft
            </span>
            <Sparkles className="w-5 h-5 text-[#61E4ED]" />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:bg-gradient-to-b hover:from-[#64E3FA] hover:to-[#64E3FA]/50 hover:text-transparent hover:bg-clip-text"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {item.name}
              </motion.a>
            ))}
          <Button title={'Contact'}/>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-400 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden overflow-hidden"
          variants={mobileMenuVariants}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
        >
          <div className="flex flex-col items-center space-y-4 py-4 bg-zinc-900/90 glass-card rounded-lg mt-4">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:bg-gradient-to-b hover:from-[#64E3FA] hover:to-[#64E3FA]/50 hover:text-transparent hover:bg-clip-text"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {item.name}
              </motion.a>
            ))}
            <Button />
          </div>
        </motion.div>
      </div>

   
    </motion.nav>
  );
};

export default Navbar;