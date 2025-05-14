"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Simplified Cooperative Management",
    category: "Admin Dashboard",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "/Koperasi simpanan.PNG",
  },
  {
    id: 2,
    title: "SmartPlanning Insights – Visual Monitoring for Smarter Decisions",
    category: "Admin Dashboard",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: '/page sensor line chart.PNG',
  },
  {
    id: 3,
    title: "Seamless Order Management System",
    category: "Admin Dashboard",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "/tebasari dashboard.PNG",
  },
  {
    id: 4,
    title: "Educational Portfolio Website",
    category: "Profile Website",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: '/imj porto.PNG'
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Admin Dashboard", "Profile Website", "Other Projects"];

  return (
    <section id="portfolio" className="py-20 bg-gray-100">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">PORTFOLIO</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full ${activeCategory === category ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects
            .filter(project => activeCategory === "All" || project.category === activeCategory)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
              >
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </section>
  );
}