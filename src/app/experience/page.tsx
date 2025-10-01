'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, Calendar, MapPin, Building, GraduationCap, Award, ExternalLink } from "lucide-react";
import { certifications, education, experiences } from "@/components/experience";
import { useTheme } from "@/components/ThemeContext";

const Experience = () => {
  const { darkMode } = useTheme();
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="min-h-screen w-[100vw] flex flex-col items-center justify-center bg-[var(--bg-secondary)] dark:bg-[var(--dark-bg-secondary)] py-20 px-4">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-[var(--dark-text-secondary)]">
              My <span className="gradient-text">Journey</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-[var(--text-tertiary)] dark:text-[var(--dark-text-tertiary)]">
              A timeline of my professional experience, education, and achievements
            </p>
            
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white text-lg"
              style={{ background: 'var(--chart-1)' }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="border border-[var(--border)] bg-[var(--bg-primary)] dark:bg-[var(--dark-bg-tertiary)] rounded-full p-2 flex">
              {[
                { id: "experience", label: "Experience", icon: Building },
                { id: "education", label: "Education", icon: GraduationCap },
                { id: "certifications", label: "Certifications", icon: Award }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center dark:text-[var(--dark-text-primary)] text-[var(--text-primary)] gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                    activeTab === tab.id 
                      ? 'text-white shadow-lg bg-[var(--chart-1)]' 
                      : 'transparent'
                  }`}
                  
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {activeTab === "experience" && (
        <section className="w-[100vw] py-20 px-6 bg-[var(--bg-tertiary)] dark:bg-[var(--dark-bg-tertiary)]">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div 
                className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full rounded-full"
                style={{ background: 'var(--chart-1)' }}
              />
              
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center mb-16 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-16 md:pl-0`}>
                    <motion.div
                      className="border border-[var(--border)] bg-[var(--bg-primary)] dark:bg-[var(--dark-bg-tertiary)] p-8 rounded-2xl"
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2 text-[var(--text-secondary)] dark:text-[var(--dark-text-secondary)]">{experience.role}</h3>
                          <h4 className="text-xl font-semibold mb-2" style={{ color: 'var(--chart-1)' }}>
                            {experience.company}
                          </h4>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-[var(--text-tertiary)] dark:text-[var(--dark-text-tertiary)]" >
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {experience.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {experience.location}
                        </div>
                      </div>
                      
                      <p className="mb-6 text-[var(--text-tertiary)] dark:text-[var(--dark-text-tertiary)]" >
                        {experience.description}
                      </p>
                      
                      <div className="mb-6">
                        <h5 className="font-semibold mb-3 text-[var(--text-secondary)] dark:text-[var(--dark-text-secondary)]">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-[var(--text-tertiary)] dark:text-[var(--dark-text-tertiary)]" >
                              <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: 'var(--chart-1)' }} />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
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
                    </motion.div>
                  </div>
                  
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-white" style={{ background: 'var(--chart-1)' }} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === "education" && (
        <section className="py-20 px-6 bg-[var(--bg-tertiary)] dark:bg-[var(--dark-bg-tertiary)] w-[100vw]">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="border border-[var(--border)] bg-[var(--bg-primary)] dark:bg-[var(--dark-bg-tertiary)] p-8 rounded-2xl"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-full bg-[var(--dark-bg-primary)] dark:bg-[var(--bg-primary)] border border-[var(--border)]">
                      <GraduationCap className="w-6 h-6" color={darkMode ? '#334155' : '#fff'} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-secondary)] dark:text-[var(--dark-text-secondary)]">{edu.degree}</h3>
                      <h4 className="font-semibold" style={{ color: 'var(--chart-1)' }}>{edu.school}</h4>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mb-4 text-sm text-[var(--text-tertiary)] dark:text-[var(--dark-text-tertiary)]">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                  </div>
                  
                  <p className="mb-6 text-[var(--text-tertiary)] dark:text-[var(--dark-text-tertiary)]">
                    {edu.description}
                  </p>
                  
                  <div>
                    <h5 className="font-semibold mb-3 text-[var(--text-secondary)] dark:text-[var(--dark-text-secondary)]">Relevant Coursework:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 rounded-full text-sm font-medium"
                          style={{ 
                            background: 'var(--bg-primary)',
                            color: 'var(--chart-1)'
                          }}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === "certifications" && (
        <section className="py-20 px-6 bg-[var(--bg-tertiary)] dark:bg-[var(--dark-bg-tertiary)] w-[100vw]">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-[var(--border)] bg-[var(--bg-primary)] dark:bg-[var(--dark-bg-tertiary)] p-6 rounded-2xl text-center"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="p-4 rounded-full mx-auto mb-4 w-fit bg-[var(--dark-bg-primary)] dark:bg-[var(--bg-primary)] border border-[var(--border)]">
                    <Award className="w-8 h-8" color={darkMode ? '#334155' : '#fff'} />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 text-[var(--text-primary)] dark:text-[var(--dark-text-primary)]">{cert.name}</h3>
                  <p className="font-semibold mb-2" style={{ color: 'var(--accent)' }}>{cert.issuer}</p>
                  <p className="text-sm mb-4 text-[var(--text-secondary)] dark:text-[var(--dark-text-secondary)]">
                    Earned {cert.date}
                  </p>
                  
                  <div className="text-xs p-2 rounded" style={{ background: 'var(--bg-primary)', color: 'var(--text-tertiary)' }}>
                    ID: {cert.credentialId}
                  </div>
                  
                  <motion.button
                    className="mt-4 flex items-center gap-2 mx-auto text-sm font-medium"
                    style={{ color: 'var(--accent)' }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Verify
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default Experience