"use client";

import React from 'react';
import { motion } from 'framer-motion';
import FocusAreas from './focus-areas';
import VisionMission from './vision-mission';

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 md:mb-24 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-cyan-600 text-sm font-bold tracking-[0.2em] uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            About IARRD
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Indian Astronomy Rocket Research & Development
          </motion.h2>
          <motion.div 
            className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p>
Indian Astronomy Rocket Research & Development (IARRD), founded in May 2023, is an Indian deep-technology organization focused on developing indigenous aerospace, defense, and scientific systems.

Led by Founder & CEO Harish Ragavendra Srinivasan, IARRD works across satellite platforms, propulsion research, autonomous systems, and applied scientific technologies, with a strong emphasis on affordability, engineering practicality, and national self-reliance.
            </p>
          </motion.div>
        </motion.div>

        {/* Content Sections with Spacing */}
        <div className="space-y-16 md:space-y-24">
          {/* Core Capabilities */}
          <FocusAreas />

          {/* Vision & Mission */}
          <VisionMission />
        </div>
      </div>
    </section>
  );
}
