'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageSquare, Clock, CheckCircle } from "lucide-react";
import { contactInfo, socialLinks } from "@/components/constactInfo";
import { useTheme } from "@/components/ThemeContext";

const Contact = () => {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen w-[100vw] flex items-center justify-center bg-[var(--bg-secondary)] dark:bg-[var(--dark-bg-secondary)] py-20 px-4">
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-[var(--dark-text-secondary)]">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-[var(--text-tertiary)] dark:text-[var(--dark-text-tertiary)]">
              Have a project in mind or just want to chat? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[var(--text-primary)] dark:text-[var(--dark-text-primary)]">Get in Touch</h2>
                <p className="text-lg mb-8 text-[var(--text-tertiary)] dark:text-[var(--dark-text-tertiary)]">
                  I'm always open to discussing new opportunities, creative projects, 
                  or partnerships. Feel free to reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 border border-[var(--border)] bg-[var(--bg-primary)] dark:bg-[var(--dark-bg-tertiary)] p-6 rounded-2xl"
                  >
                    <div className="p-3 rounded-full bg-[var(--dark-bg-primary)] dark:bg-[var(--bg-primary)] border border-[var(--border)]">
                      <contact.icon className="w-6 h-6" color={darkMode ? '#334155' : '#fff'} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--text-primary)] dark:text-[var(--dark-text-primary)]">{contact.label}</h3>
                      {contact.link ? (
                        <a 
                          href={contact.link}
                          className="font-medium hover:underline"
                          style={{ color: 'var(--chart-1)' }}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-[var(--text-secondary)] dark:text-[var(--dark-text-secondary)]">{contact.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="border border-[var(--border)] bg-[var(--bg-primary)] dark:bg-[var(--dark-bg-tertiary)] p-6 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5" style={{ color: 'var(--chart-1)' }} />
                  <h3 className="font-semibold text-[var(--text-primary)] dark:text-[var(--dark-text-primary)]">Availability</h3>
                </div>
                <p className="text-[var(--text-secondary)] dark:text-[var(--dark-text-secondary)]">
                  Currently available for new projects and collaborations. 
                  I typically respond within 24 hours.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                <h3 className="font-semibold mb-4 text-[var(--text-primary)] dark:text-[var(--dark-text-primary)]">Connect on Social</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-[var(--bg-primary)] dark:bg-[var(--dark-bg-tertiary)] border border-[var(--border)] hover:scale-110 hover:bg-[var(--chart-1)] transition-transform"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <social.icon className="w-6 h-6" color={darkMode ? '#fff' : '#334155'} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="border border-[var(--border)] bg-[var(--bg-primary)] dark:bg-[var(--dark-bg-tertiary)] p-8 rounded-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6" style={{ color: 'var(--chart-1)' }} />
                <h2 className="text-2xl font-bold text-[var(--text-primary)] dark:text-[var(--dark-text-primary)]">Send a Message</h2>
              </div>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 p-4 rounded-xl mb-6 text-green-700 bg-green-50 border border-green-200"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium text-[var(--text-secondary)] dark:text-[var(--dark-text-secondary)]">Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-[var(--text-tertiary)] dark:text-[var(--dark-text-tertiary)]">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border transition-colors bg-[var(--bg-tertiary)] dark:bg-[var(--dark-bg-primary)] text-[var(--text-tertiary)] dark:text-[var(--dark-text-tertiary)] ${
                        errors.name 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'focus:border-blue-500'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-[var(--text-tertiary)] dark:text-[var(--dark-text-tertiary)]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border transition-colors bg-[var(--bg-tertiary)] dark:bg-[var(--dark-bg-primary)] text-[var(--text-tertiary)] dark:text-[var(--dark-text-tertiary)] ${
                        errors.email 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'focus:border-blue-500'
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-[var(--text-tertiary)] dark:text-[var(--dark-text-tertiary)]">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-colors bg-[var(--bg-tertiary)] dark:bg-[var(--dark-bg-primary)] text-[var(--text-tertiary)] dark:text-[var(--dark-text-tertiary)] ${
                      errors.subject 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'focus:border-blue-500'
                    }`}
                    placeholder="Project Discussion"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-[var(--text-tertiary)] dark:text-[var(--dark-text-tertiary)]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="6"
                    className={`w-full px-4 py-3 rounded-xl border resize-none transition-colors bg-[var(--bg-tertiary)] dark:bg-[var(--dark-bg-primary)] text-[var(--text-tertiary)] dark:text-[var(--dark-text-tertiary)] ${
                      errors.message 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'focus:border-blue-500'
                    }`}
                    placeholder="Tell me about your project or just say hello..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-3 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                  style={{ background: 'var(--chart-1)' }}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact;