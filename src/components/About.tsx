"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">ABOUT ME</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate Full Stack Developer with experience in both frontend and backend development. 
              I specialize in building modern web applications using Next.js, Tailwind CSS, and TypeScript, 
              as well as backend services with Laravel and Python (FastAPI).
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With experience in containerization using Docker, I architect systems that integrate with 
              various services including PostgreSQL, MongoDB, MiniIO, and Redis for handling complex 
              queuing operations.
            </p>
            <p className="text-lg text-gray-600">
              My approach combines technical excellence with a focus on delivering user-friendly solutions 
              that meet business objectives.
            </p>
          </div>
          
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-1/2">
            {[
              { name: "Frontend", value: "85%" },
              { name: "Backend", value: "90%" },
              { name: "DevOps", value: "60%" },
              { name: "UI/UX", value: "75%" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <h3 className="font-semibold mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: skill.value }}
                  ></div>
                </div>
                <span className="text-sm text-gray-500 mt-1 block">{skill.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}