"use client";
import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiServer, FiCpu, FiVideo, FiLayers } from "react-icons/fi";

const services = [
  {
    icon: <FiCode size={32} className="text-blue-600" />,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.",
  },
  {
    icon: <FiServer size={32} className="text-blue-600" />,
    title: "Backend Development",
    description: "Developing robust APIs and server-side applications with Laravel, FastAPI, and Node.js.",
  },
  {
    icon: <FiDatabase size={32} className="text-blue-600" />,
    title: "Database Design",
    description: "Designing efficient database schemas and optimizing queries for PostgreSQL and MongoDB.",
  },
  {
    icon: <FiLayers size={32} className="text-blue-600" />,
    title: "Full Stack Solutions",
    description: "End-to-end development of web applications from concept to deployment.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">SERVICES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}