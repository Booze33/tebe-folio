'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Filter, X } from "lucide-react";
import { projects } from "@/components/projects";
import Image from "next/image";

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ["All", "Web Apps", "Mobile", "E-commerce", "AI/ML"];

  const filteredProjects = selectedFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen pb-[7rem] bg-[var(--bg-primary)] dark:bg-[var(--dark-bg-primary)] w-[100vw]">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-[var(--dark-text-secondary)]">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-[var(--text-tertiary)] dark:text-[var(--dark-text-tertiary)]">
              A showcase of my recent work and the technologies I love using
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all text-[var(--text-tertiary)] dark:text-[var(--dark-text-tertiary)] border border-[var(--border)] bg-[var(--bg-primary)] dark:bg-[var(--dark-bg-tertiary)] ${
                  selectedFilter === filter 
                    ? 'text-white bg-[var(--chart-1)] dark:bg-[var(--chart-1)] border-transparent' 
                    : ''
                }`}
                style={{
                  background: selectedFilter === filter ? 'var(--chart-1)' : 'transparent',
                  color: selectedFilter === filter ? 'white' : ''
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {filter}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {selectedFilter === "All" && (
        <section className="py-20 px-6 bg-[var(--bg-secondary)] dark:bg-[var(--dark-bg-secondary)]">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-[var(--dark-text-secondary)]"
            >
              Featured Work
            </motion.h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.slice(0, 2).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  onClick={() => setSelectedProject(project)}
                  className="glass-effect rounded-3xl overflow-hidden cursor-pointer group"
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      width={600}
                      height={64}
                      src={project.image}
                      alt={project.title}
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span 
                        className="px-3 py-1 rounded-full text-sm font-medium text-white"
                        style={{ background: 'var(--chart-1)' }}
                      >
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-sm font-medium"
                          style={{ 
                            background: 'var(--bg-primary)',
                            color: 'var(--chart-1)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-medium"
                        style={{ color: 'var(--chart-1)' }}
                        whileHover={{ scale: 1.05 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-medium"
                        style={{ color: 'var(--text-secondary)' }}
                        whileHover={{ scale: 1.05 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center dark:text-[var(--dark-text-secondary)]"
          >
            {selectedFilter === "All" ? "All Projects" : `${selectedFilter} Projects`}
          </motion.h2>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedProject(project)}
                  className="glass-effect rounded-2xl overflow-hidden cursor-pointer group"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      width={400}
                      height={40}  
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-full text-xs font-medium"
                          style={{ 
                            background: 'var(--bg-primary)',
                            color: 'var(--chart-1)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0, 0, 0, 0.8)' }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="glass-effect rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Image
                  width={800}
                  height={80}
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {selectedProject.longDescription}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full font-medium"
                      style={{ 
                        background: 'var(--bg-primary)',
                        color: 'var(--chart-1)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-6">
                  <motion.a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white"
                    style={{ background: 'var(--chart-1)' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5 hidden sm:block" />
                    View Live
                  </motion.a>
                  <motion.a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold border-2 glass-effect"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5 hidden sm:block" />
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects;