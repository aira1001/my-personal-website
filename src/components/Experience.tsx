"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiLaravel, SiPython, SiPostgresql, SiMongodb, SiRedis } from "react-icons/si";
import { DiJavascript, DiHtml5, DiCss3 } from "react-icons/di";

const technologies = [
  { icon: <SiNextdotjs size={40} />, name: "Next.js" },
  { icon: <SiTypescript size={40} />, name: "TypeScript" },
  { icon: <SiTailwindcss size={40} />, name: "Tailwind CSS" },
  { icon: <FaReact size={40} />, name: "React" },
  { icon: <SiLaravel size={40} />, name: "Laravel" },
  { icon: <SiPython size={40} />, name: "Python" },
  { icon: <FaNodeJs size={40} />, name: "Node.js" },
  { icon: <DiJavascript size={40} />, name: "JavaScript" },
  { icon: <DiHtml5 size={40} />, name: "HTML5" },
  { icon: <DiCss3 size={40} />, name: "CSS3" },
  { icon: <FaDocker size={40} />, name: "Docker" },
  { icon: <SiPostgresql size={40} />, name: "PostgreSQL" },
  { icon: <SiMongodb size={40} />, name: "MongoDB" },
  { icon: <SiRedis size={40} />, name: "Redis" },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-100">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">TECHNOLOGIES & EXPERIENCE</h2>

        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4 text-center">My Tech Stack</h3>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="text-blue-600 mb-2">{tech.icon}</div>
                <span className="text-sm text-center">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-6 text-center">Professional Experience</h3>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h4 className="text-lg font-bold mb-2">Full Stack Developer</h4>
              <p className="text-gray-500 mb-4">CV Haksama Multiversa |  November 2023 – December 2024 • 1 Year</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li><b>Managed and Optimized the Distribution Management System (DMS) </b>– using Next.js (frontend), Laravel + MySQL (backend). Oversaw databases, servers, and both backend/frontend operations to ensure seamless functionality.</li>
                <li><b>Developed Custom Features to Enhance Sales Performance</b> – Collaborated with the Sales Manager to design and implement new system features that improved efficiency and user experience</li>
                <li><b>Generated Comprehensive Sales Analytics Reports</b> – Compiled and analyzed sales data, including performance metrics for sales teams and outlets, to support data-driven decision-making.</li>

              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h4 className="text-lg font-bold mb-2">Backend Developer</h4>
              <p className="text-gray-500 mb-4">PT Rubythalib.ai  |  Januari 2025 – now  • 5 months </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Developing and maintaining APIs for a chat application powered by OpenAI's LLM, using Python (FastAPI) and
                  containerized with Docker.</li>
                <li>Integrated with various services including Redis, MinIO, PostgreSQL, and MongoDB.</li>
                <li>Experienced in connecting and synchronizing data with external systems, including integration with a Windows
                  Server environment. </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}