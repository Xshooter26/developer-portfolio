"use client";

import { FaJava, FaPython, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiNodedotjs, SiJetpackcompose, SiCplusplus, SiJavascript, SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { name: "React.js", icon: <FaReact className="text-blue-500 group-hover:text-blue-400" size={40} /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white group-hover:text-gray-200" size={40} /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500 group-hover:text-green-400" size={40} /> },
    { name: "Jetpack Compose", icon: <SiJetpackcompose className="text-green-400 group-hover:text-green-300" size={40} /> },
    { name: "SQL", icon: <GrMysql className="text-blue-500 group-hover:text-blue-400" size={40} /> },
    { name: "Java", icon: <FaJava className="text-red-500 group-hover:text-red-400" size={40} /> },
    { name: "C++", icon: <SiCplusplus className="text-cyan-500 group-hover:text-cyan-400" size={40} /> },
    { name: "Python", icon: <FaPython className="text-yellow-500 group-hover:text-yellow-400" size={40} /> },
    { name: "Javascript", icon: <SiJavascript className="text-yellow-500 group-hover:text-yellow-400" size={40} /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 group-hover:text-green-400" size={40} /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 gradient-text bg-gradient-to-r from-green-400 to-blue-500">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I am a passionate programmer with expertise in building modern, 
              responsive, and performant web and mobile applications. Here are the 
              technologies and tools I specialize in:
            </p>
          </motion.div>
          
          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-6xl mx-auto"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl shadow-lg 
                  border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="transform transition-all duration-300 group-hover:scale-110">
                    {skill.icon}
                  </div>
                  <h3 className="text-white font-medium text-center">{skill.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* About Me Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-20 grid md:grid-cols-2 gap-10 items-center"
          >
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-gray-700/50">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">My Journey</h3>
              <p className="text-gray-300 mb-4">
                I started my programming journey with a passion for creating solutions that make a difference. 
                With a strong foundation in both frontend and backend technologies, I enjoy building 
                complete applications that deliver exceptional user experiences.
              </p>
              <p className="text-gray-300">
                My experience spans across web development, mobile app development, and database management,
                allowing me to tackle diverse projects and challenges.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 p-8 rounded-2xl border border-gray-700/50">
              <h3 className="text-2xl font-bold mb-4 text-green-400">My Approach</h3>
              <p className="text-gray-300 mb-4">
                I believe in writing clean, maintainable code that solves real problems. My approach combines 
                technical excellence with a focus on user needs and business goals.
              </p>
              <p className="text-gray-300">
                I'm constantly learning and exploring new technologies to stay at the forefront of 
                development practices, ensuring that my solutions are modern, efficient, and scalable.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;