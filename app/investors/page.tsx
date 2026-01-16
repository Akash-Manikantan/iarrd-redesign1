"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ArrowLeft, ExternalLink, Shield, Rocket, Globe2, Users, Mail, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';
import Particles from '../../components/ui/particles';

export default function InvestorsPage() {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative">
      {/* Particle Background */}
      <Particles />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-20 md:py-32 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-10 right-20 w-96 h-96 bg-white rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -30, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          <motion.div 
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-300 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Back Button */}
          <motion.div
            style={{ y: scrollY * 0.5 }}
          >
            <Link href="/" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
            style={{ y: scrollY * 0.3 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm"
            >
              <Building2 className="w-10 h-10" />
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Investors & Partners
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Backed by visionary investors committed to advancing India's space technology capabilities
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-4xl font-bold">2025</div>
                <div className="text-white/80 mt-1">Partnership Since</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-4xl font-bold">100%</div>
                <div className="text-white/80 mt-1">Strategic Aligned</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="text-4xl font-bold">5+</div>
                <div className="text-white/80 mt-1">Focus Areas</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Investor Section */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* Decorative elements */}
          <div className="absolute left-0 top-1/4 w-64 h-64 bg-cyan-200/30 rounded-full blur-3xl -z-10"></div>
          <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl -z-10"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-cyan-600 text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Strategic Partnership
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Lead Investor
            </h2>
          </motion.div>

          {/* NTLS Groups Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl hover:border-cyan-600 transition-all duration-300 relative overflow-hidden">
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"></div>
              
              <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                {/* Logo Section */}
                <motion.div 
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-56 h-56 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl shadow-2xl flex items-center justify-center p-8">
                    <div className="text-center">
                      <h3 className="text-4xl font-bold text-white mb-2">NTLS</h3>
                      <p className="text-base text-cyan-100 font-semibold tracking-wide">Groups</p>
                    </div>
                  </div>
                </motion.div>

                {/* Content Section */}
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">NTLS Groups</h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-8">
                    NTLS Groups is a strategic partner collaborating with IARRD on select research and development initiatives, supporting efforts in missile systems and satellite communication technologies. The partnership focuses on strengthening technical capabilities, research infrastructure, and knowledge exchange aligned with indigenous technology development.
                  </p>
                  
                  {/* Investment Details */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <motion.div 
                      className="bg-gradient-to-br from-cyan-50 to-blue-50 p-5 rounded-xl border-2 border-cyan-200 hover:border-cyan-400 transition-colors"
                      whileHover={{ y: -5 }}
                    >
                      <p className="text-xs text-cyan-700 font-bold uppercase tracking-wider mb-2">Partnership Since</p>
                      <p className="text-2xl font-bold text-gray-900">2025</p>
                    </motion.div>
                    <motion.div 
                      className="bg-gradient-to-br from-cyan-50 to-blue-50 p-5 rounded-xl border-2 border-cyan-200 hover:border-cyan-400 transition-colors"
                      whileHover={{ y: -5 }}
                    >
                      <p className="text-xs text-cyan-700 font-bold uppercase tracking-wider mb-2">Focus Areas</p>
                      <p className="text-lg font-bold text-gray-900">Edutech & Defence Collaboration</p>
                    </motion.div>
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href="https://ntlsgroups.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 font-bold text-base shadow-lg shadow-cyan-600/40"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Visit NTLS Groups <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Value Proposition */}
      <section className="py-16 bg-gray-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* Decorative gradient orbs */}
          <div className="absolute left-1/4 top-0 w-96 h-96 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-3xl -z-10"></div>
          <div className="absolute right-1/4 bottom-0 w-72 h-72 bg-gradient-to-br from-cyan-200/40 to-blue-200/40 rounded-full blur-3xl -z-10"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partnership Benefits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Strategic collaboration enabling sustainable growth and innovation in aerospace technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Strategic Support",
                description: "Long-term partnership enabling sustainable growth and innovation",
                delay: 0.1
              },
              {
                icon: Rocket,
                title: "Technology Focus",
                description: "Investment in cutting-edge aerospace and defense solutions",
                delay: 0.2
              },
              {
                icon: Globe2,
                title: "Market Expansion",
                description: "Supporting IARRD's vision for accessible space technology",
                delay: 0.3
              }
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay }}
                whileHover={{ y: -10 }}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center hover:border-cyan-600 hover:shadow-xl transition-all duration-300 group"
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-8 h-8 text-cyan-600" />
                </motion.div>
                <h4 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Inquiry Section */}
      <section className="py-16 md:py-24 relative z-10 bg-gradient-to-br from-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Interested in Investing?
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Join us in advancing India's space technology capabilities. Reach out to discuss partnership opportunities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:iarrd.official@gmail.com" 
                    className="flex items-center gap-4 text-gray-700 hover:text-cyan-600 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center group-hover:bg-cyan-600 transition-colors">
                      <Mail className="w-6 h-6 text-cyan-600 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">iarrd.official@gmail.com</p>
                    </div>
                  </a>
                  
                  <a 
                    href="tel:+918903272879" 
                    className="flex items-center gap-4 text-gray-700 hover:text-cyan-600 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center group-hover:bg-cyan-600 transition-colors">
                      <Users className="w-6 h-6 text-cyan-600 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">+91 8903272879</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-gray-700">
                    <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center">
                      <Globe2 className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium">Anaicut road, Ranipet-13</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Connect With Us</h4>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.linkedin.com/company/iarrd/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors group"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-6 h-6 text-cyan-600 group-hover:text-white" />
                    </a>
                    <a 
                      href="https://www.instagram.com/iarrd.official" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors group"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-6 h-6 text-cyan-600 group-hover:text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Investment Inquiry Form */}
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Investment Opportunities</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We welcome strategic investors who share our vision of making space technology accessible and advancing India's aerospace capabilities.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700">Satellite & Defense Technology</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700">AI-Powered Innovation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700">Cost-Effective Solutions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-700">Scalable Growth Potential</p>
                  </div>
                </div>

                {/* Contact Form */}
                <form 
                  action="https://formspree.io/f/mzddboqj" 
                  method="POST"
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                    <input
                      type="text"
                      name="organization"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your company/organization"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Investment Interest *</label>
                    <select
                      name="investment_interest"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select interest area</option>
                      <option value="satellite">Satellite Technology</option>
                      <option value="defense">Defense Systems</option>
                      <option value="drone">Drone Technology</option>
                      <option value="marine">Marine Technology</option>
                      <option value="general">General Investment</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your investment interests..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 font-bold flex items-center justify-center gap-2 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Submit Inquiry <Mail className="w-5 h-5" />
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
