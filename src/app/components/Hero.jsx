"use client";

import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { useMemo } from 'react';

const Hero = () => {
  
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: 2 + (i % 4),
      x: `${(i * 5) % 100}%`,
      y: `${(i * 7) % 100}%`,
      duration: 5 + (i % 5)
    }));
  }, []);

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
   
  return (
    <section
      id="home"
      className="min-h-screen relative flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-emerald-600/20"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-white/10"
              style={{
                width: particle.size + "px",
                height: particle.size + "px",
                left: particle.x,
                top: particle.y,
              }}
              animate={{
                y: [0, -50],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        {/* Animated Logo/Symbol */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            {/* Glowing background effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-xl opacity-50 animate-pulse"></div>
            
            {/* Code brackets design */}
            <motion.div 
              className="relative z-10 text-7xl font-bold text-white p-8"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-blue-400">&lt;</span>
              <motion.span 
                className="inline-block text-5xl bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 text-transparent bg-clip-text"
                animate={{ 
                  opacity: [1, 0.8, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                HP
              </motion.span>
              <span className="text-purple-400">/&gt;</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold gradient-text bg-gradient-to-r from-white via-blue-200 to-purple-200">
            <TypeAnimation
              sequence={[
                "Hi, I'm Harsh Pidurkar",
                1000,
                "",
                500,
              ]}
              wrapper="span"
              speed={40}
              cursor={true}
              repeat={Infinity}
              className="text-5xl md:text-7xl font-bold"
            />
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-12 text-center max-w-3xl mx-auto px-4 text-gray-300"
        >
          <span className="text-blue-400">I design & develop</span> exceptional websites and applications, combining <span className="text-purple-400">creativity</span> and <span className="text-emerald-400">functionality</span> to solve complex problems.
        </motion.div>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-blue-500/20 hover:shadow-xl transition-all duration-300 inline-block"
            >
              View My Work
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full shadow-lg hover:border-white/60 hover:shadow-xl transition-all duration-300 inline-block"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Social Media Links */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-8 items-center justify-center"
        >
          {[
            { href: "https://github.com/Xshooter26", Icon: FaGithub, size: 24 },
            { href: "https://www.linkedin.com/in/harsh-pidurkar-4b9912226/", Icon: FaLinkedin, size: 24 },
            { href: "mailto:harshpidurkar2003@gmail.com", Icon: FaEnvelope, size: 24 },
            { href: "https://www.instagram.com/harsh.pidurkar", Icon: FaInstagram, size: 24 }
          ].map((social, index) => (
            <motion.button
              key={social.href}
              onClick={() => handleSocialClick(social.href)}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/10 hover:bg-white/20 p-4 rounded-full flex items-center justify-center transition-all duration-300 group"
            >
              <social.Icon
                size={social.size}
                className="text-white/80 group-hover:text-white transition-colors duration-300"
              />
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-4 w-full text-center"
      >
        <Link href="#contact">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer mx-auto inline-block"
          >
            <div className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300 flex items-center justify-center">
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaChevronDown className="text-white/70 hover:text-white text-lg" />
              </motion.div>
            </div>
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;