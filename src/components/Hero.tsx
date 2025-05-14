"use client";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="pt-10 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center justify-between"
      >
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-blue-600">FULL STACK</span><br />
            SOFTWARE<br />
            DEVELOPER.
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Building modern web applications with cutting-edge technologies.
          </p>
          <div className="flex space-x-4">
            <a href="https://wa.me/+6285155321623?text=Hello%20Adinda" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition" target="_blank">
              Contact Me
            </a>
            <a href="https://drive.google.com/file/d/1fji4UqJuMiLumxP1inZ-Aas1hwtgwvrN/view?usp=sharing" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition" target="_blank">
              Download CV
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -top-6 -left-6 bg-blue-100 w-32 h-32 rounded-full"
            ></motion.div>
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, -5, 5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
              className="absolute -bottom-6 -right-6 bg-blue-100 w-32 h-32 rounded-full"
            ></motion.div>
            <div className="relative z-10 w-64 h-64 bg-gray-200 rounded-full overflow-hidden">
              {/* Replace with your image */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <img
                  src="/pp.png"
                  alt="Profile"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      <div className="mt-12 flex justify-center space-x-6">
        <a href="https://github.com/aira1001/" className="text-gray-600 hover:text-blue-600 transition" target="_blank" >
          <FiGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/adinda-khaerani-857b17202/" className="text-gray-600 hover:text-blue-600 transition" target="_blank" >
          <FiLinkedin size={24} />
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-600 transition">
          <FiTwitter size={24} />
        </a>
      </div>
    </section>
  );
}