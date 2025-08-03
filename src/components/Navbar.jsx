import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import logo from '../assets/logo.png';
import gsap from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const linkRefs = useRef([]);

  const navItems = [
    { name: 'Home', href: '#first' },
    { name: 'Services', href: '#third' },
    { name: 'Work', href: '#fourth' },
    { name: 'About', href: '#second' },
  ];

  // Scroll animation logic
  useEffect(() => {
    let prevScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      gsap.to(navRef.current, {
        y: currentScrollY > prevScrollY ? '-100%' : '0%',
        duration: 1,
        ease: 'power3.out',
      });
      prevScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hover animation for links
  useEffect(() => {
    linkRefs.current.forEach((link) => {
      if (!link) return;
      const enter = () => {
        gsap.to(link, {
          scale: 1.2,
          y: -5,
          color: '#64E3FA',
          duration: 0.3,
          ease: 'power2.out',
        });
      };
      const leave = () => {
        gsap.to(link, {
          scale: 1,
          y: 0,
          color: '#9ca3af', // gray-400
          duration: 0.3,
          ease: 'power2.out',
        });
      };
      link.addEventListener('mouseenter', enter);
      link.addEventListener('mouseleave', leave);
      return () => {
        link.removeEventListener('mouseenter', enter);
        link.removeEventListener('mouseleave', leave);
      };
    });
  }, []);

  return (
    <nav ref={navRef} className="fixed w-full top-0 z-50 backdrop-blur-md">
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
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                ref={(el) => (linkRefs.current[index] = el)}
                className="text-gray-400 transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
            <Button title={'Contact'} />
          </div>

          {/* Mobile Menu Toggle */}
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
              <Button title="Contact" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
