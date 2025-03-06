"use client";

import Link from "next/link";
import { GrDocument } from "react-icons/gr";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollY } = useScroll();

  // Update navbar background on scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: '/harsh_resume_1011.pdf', isExternal: true }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        navbar ? 'bg-black/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="group">
              <h1 className="text-2xl font-bold text-white">
                <span className="text-blue-400">&lt;</span>
                <span className="group-hover:text-blue-400 transition-colors duration-300">Harsh</span>
                <span className="text-purple-400">Pidurkar</span>
                <span className="text-blue-400">/&gt;</span>
              </h1>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-2"
                >
                  <Link 
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className={`
                      px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center
                      ${activeSection === item.name.toLowerCase() 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                        : 'text-white hover:bg-white/10'
                      }
                    `}
                  >
                    {item.name}
                    {item.name === 'Resume' && (
                      <GrDocument className="ml-1 inline-block" size={14} />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="absolute h-0.5 w-full bg-white rounded-full transform transition duration-300"
                  style={{ top: "30%" }}
                ></motion.span>
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="absolute h-0.5 w-full bg-white rounded-full transform transition duration-300"
                  style={{ top: "50%" }}
                ></motion.span>
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="absolute h-0.5 w-full bg-white rounded-full transform transition duration-300"
                  style={{ top: "70%" }}
                ></motion.span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-black/90 backdrop-blur-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              onClick={() => setIsOpen(false)}
              className={`
                block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300
                ${activeSection === item.name.toLowerCase() 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                  : 'text-white hover:bg-white/10'
                }
              `}
            >
              <div className="flex items-center">
                {item.name}
                {item.name === 'Resume' && (
                  <GrDocument className="ml-2" size={16} />
                )}
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;