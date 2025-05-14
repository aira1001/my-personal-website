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
    image:'/page sensor line chart.PNG',
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
     <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">PORTFOLIO</h2>
        
        <div className="mx-auto  grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-top-left object-cover  transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
                
                <div className="md:w-1/2 flex flex-col justify-center">
                  <div className="text-sm font-semibold text-gray-500 mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {project.description}
                  </p>
                </div>
              </div>
              
              {index < projects.length && (
                <div className="border-t border-gray-200 mt-16"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}