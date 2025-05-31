import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import logo from '../assets/logo.png';
import gsap from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null); // Reference for navbar element

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
  ];

  // GSAP scroll animation logic
  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        // Scroll down: hide navbar
        gsap.to(navRef.current, {
          y: '-100%',
          duration: 1,
          ease: 'power3.out',
        });
      } else {
        // Scroll up: show navbar
        gsap.to(navRef.current, {
          y: '0%',
          duration: 1,
          ease: 'power3.out',
        });
      }

      prevScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed w-full top-0 z-50 backdrop-blur-md "
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="sm:w-[4.5vw] w-[12vw]" />
            <span className="sm:inline-block hidden text-xl font-bold tracking-wider bg-gradient-to-b from-white to-zinc-400 text-transparent bg-clip-text">
              ZaidCraft Studio
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:bg-gradient-to-b hover:from-[#64E3FA] hover:to-[#64E3FA]/50 hover:text-transparent hover:bg-clip-text"
              >
                {item.name}
              </a>
            ))}
            <Button title={'Contact'} />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-400 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden overflow-hidden transition-all duration-500 ease-in-out">
            <div className="flex flex-col items-center space-y-4 py-4 bg-gradient-to-t from-[#61E4ED]/50 to-transparent glass-card rounded-lg mt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:bg-gradient-to-b hover:from-[#64E3FA] hover:to-[#64E3FA]/50 hover:text-transparent hover:bg-clip-text"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button  title='Contact'/>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
