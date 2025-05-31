import { motion } from "framer-motion";
import { Twitter, Instagram, Linkedin, Mail, Facebook ,Copyright} from "lucide-react";
import logo from '../assets/logo.png';

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


const Footer = () => {
  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contacts", href: "/contacts" },
    { name: "Stats", href: "/stats" },
   
  ];

  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com", icon: <Twitter className="w-5 h-5" /> },
    { name: "Instagram", href: "https://instagram.com", icon: <Instagram className="w-5 h-5" /> },
    { name: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin className="w-5 h-5" /> },
    { name: "Mail", href: "", icon: <Facebook className="w-5 h-5" /> },
  ];

  return (
    <motion.footer
      className="bg-zinc-900  py-5  relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#61E4ED]/10 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-center md:text-left">
          {/* Brand Section */}
          <div className="sm:col-span-5">
        <div className="flex items-center ">
                   <img src={logo} alt="Logo" className="sm:w-[4.5vw] w-[15vw]" />
                   <span className="sm:text-xl  text-2xl font-bold tracking-wider bg-gradient-to-b from-white to-zinc-400 text-transparent bg-clip-text">
                     ZaidCraft Studio
                   </span>
                 </div>
            <p className="text-gray-400 max-w-xs mx-auto md:mx-0 sm:mt-0 mt-4">
              Crafting stunning, high-performance websites that drive results and captivate audiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="sm:col-span-3">
            <h4 className="text-lg font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#64E3FA] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          

          {/* Social Media Links */}
          <div className="sm:col-span-3">
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-[#64E3FA] transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
              {/* Copyright */}
        <div
          className="mt-5 text-center text-gray-500 text-sm"
        
        >
          <p><Copyright  className="inline h-5 w-5"/> {new Date().getFullYear()} Your Agency. All rights reserved.</p>
        </div>
          </div>
        </div>

      
      </div>
    </motion.footer>
  );
};

export default Footer;