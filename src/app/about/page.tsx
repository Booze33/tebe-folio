"use client";

import { motion } from "framer-motion";
import { skills, achievements } from "@/components/skills";

const About = () => {
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
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-[var(--text-tertiary)] dark:text-[var(--dark-text-tertiary)]">
              I'm a passionate developer who loves creating beautiful, functional digital experiences
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 glass-effect rounded-3xl p-8">
                <div 
                  className="w-full aspect-square rounded-2xl overflow-hidden"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--chart-1) 0%, var(--accent-secondary) 100%)',
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold">
                    TT
                  </div>
                </div>
              </div>
              <motion.div
                className="absolute inset-0 rounded-3xl"
                style={{ background: 'linear-gradient(135deg, var(--chart-1) 0%, var(--accent-secondary) 100%)' }}
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-[var(--text-secondary)] dark:text-[var(--dark-text-secondary)]">Hi, I'm Tebe Tisloh</h2>
              <div className="space-y-4 text-lg text-[var(--text-tertiary)] dark:text-[var(--dark-text-tertiary)]">
                <p>
                  With over 3 years of experience in full-stack development, I specialize in creating 
                  scalable web applications that deliver exceptional user experiences.
                </p>
                <p>
                  My journey started with a certificate of completion from Microverse, and since then 
                  I've had the pleasure of working with startups and Fortune 500 companies alike.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open source 
                  projects, or enjoying the great outdoors with my camera.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="text-center p-4 rounded-xl border border-[var(--border)] dark:bg-[var(--dark-bg-secondary)]"
                  >
                    <achievement.icon className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--accent)' }} />
                    <div className="font-semibold text-sm text-[var(--text-secondary)] dark:text-[var(--dark-text-secondary)]">{achievement.title}</div>
                    <div className="text-xs mt-1 text-[var(--text-tertiary)] dark:text-[var(--dark-text-tertiary)]">
                      {achievement.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[var(--bg-secondary)] dark:bg-[var(--dark-bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-[var(--dark-text-secondary)]">Core Skills</h2>
            <p className="text-xl text-[var(--text-tertiary)] dark:text-[var(--dark-text-tertiary)]">
              Areas where I excel and love to innovate
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="border border-[var(--border)] bg-[var(--bg-primary)] dark:bg-[var(--dark-bg-tertiary)] p-8 rounded-2xl"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl mr-4 bg-[var(--accent)]">
                    <skill.icon className="w-6 h-6" color= '#fff' />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text-secondary)] dark:text-[var(--dark-text-secondary)]">{skill.name}</h3>
                    <p className="text-2xl font-bold gradient-text">{skill.percentage}%</p>
                  </div>
                </div>
                
                <div className="w-full h-3 rounded-full overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, var(--accent) 0%, var(--accent-secondary) 100%)' }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 1.2, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-[var(--dark-text-secondary)]">What Drives Me</h2>
            <p className="text-xl max-w-2xl mx-auto text-[var(--text-tertiary)] dark:text-[var(--dark-text-tertiary)]">
              The principles and values that guide my work and life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Always pushing boundaries with new technologies and creative solutions",
                emoji: "🚀"
              },
              {
                title: "Quality",
                description: "Writing clean, maintainable code that stands the test of time",
                emoji: "✨"
              },
              {
                title: "Collaboration",
                description: "Building great products through teamwork and open communication",
                emoji: "🤝"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="border border-[var(--border)] bg-[var(--bg-primary)] dark:bg-[var(--dark-bg-tertiary)] p-8 rounded-2xl text-center"
              >
                <div className="text-4xl mb-4">{value.emoji}</div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">{value.title}</h3>
                <p className="text-[var(--text-tertiary)] dark:text-[var(--dark-text-tertiary)]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;