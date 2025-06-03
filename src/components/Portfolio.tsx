"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Simplified Cooperative Management",
    category: "Admin Dashboard",
    description : "A Next.js & TypeScript-powered website for seamless cooperative management—helping admins and members track finances with ease! 💡💰 Built with: Next.js, Chakra UI,  TypeScript & React Query Clean, fast, and efficient! ⚡",
    image: "/Koperasi simpanan.PNG",
  },
  {
    id: 2,
    title: "SmartPlanning Insights – Visual Monitoring for Smarter Decisions",
    category: "Admin Dashboard",
    description: "Never let your plants go thirsty! This IoT-powered smart watering system uses Arduino automation and a sleek React.js dashboard to monitor soil moisture, control watering remotely, and keep your greens happy—from anywhere! Built with Node.js + PostgreSQL for a rock-solid backend. Smart plants, simpler life! 🌱✨",
    image: '/page sensor line chart.PNG',
  },
  {
    id: 3,
    title: "Seamless Order Management System",
    category: "Admin Dashboard",
    description: "This project is a Super Admin Dashboard for restaurant management, built with Next.js, TypeScript, and React Query. It allows superadmins to control admins, drivers, orders, and promotions, with advanced reporting, filters, and pagination for seamless operations.",
    image: "/tebasari dashboard.PNG",
  },
  {
    id: 4,
    title: "Educational Portfolio Website",
    category: "Profile Website",
    description: "This project is a modern educational portfolio platform built with Next.js, TypeScript, and Tailwind CSS for a blazing-fast, responsive frontend experience. The website features a custom CMS powered by Laravel, allowing seamless content management for courses, projects, and educational materials.",
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