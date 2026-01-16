"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, FileText } from 'lucide-react';

export default function VisionMission() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.h3 
        className="text-3xl font-bold text-gray-900 text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        Strategic Direction
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vision Card */}
        <motion.div 
          className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 shadow-lg p-10 rounded-xl h-full flex flex-col hover:border-cyan-600 hover:shadow-xl transition-all duration-300 group"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ 
            y: -8,
            transition: { duration: 0.2 }
          }}
        >
          {/* Icon */}
          <motion.div 
            className="mb-6"
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.3 }
            }}
          >
            <Target className="w-12 h-12 text-cyan-600 transition-transform group-hover:scale-110" />
          </motion.div>

          {/* Label */}
          <p className="text-cyan-600 text-xs font-bold tracking-[0.2em] mb-4">
            VISION STATEMENT
          </p>

          {/* Content */}
          <p className="text-gray-600 text-base leading-relaxed font-medium">
            To strengthen India’s technological self-reliance by developing accessible, affordable, and sustainable solutions across space, defense, marine, and advanced engineering systems.
          </p>
        </motion.div>

        {/* Mission Card */}
        <motion.div 
          className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 shadow-lg p-10 rounded-xl h-full flex flex-col hover:border-cyan-600 hover:shadow-xl transition-all duration-300 group"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ 
            y: -8,
            transition: { duration: 0.2 }
          }}
        >
          {/* Icon */}
          <motion.div 
            className="mb-6"
            whileHover={{ 
              scale: 1.1,
              rotate: -5,
              transition: { duration: 0.3 }
            }}
          >
            <FileText className="w-12 h-12 text-cyan-600 transition-transform group-hover:scale-110" />
          </motion.div>

          {/* Label */}
          <p className="text-cyan-600 text-xs font-bold tracking-[0.2em] mb-4">
            MISSION STATEMENT
          </p>

          {/* Content */}
          <p className="text-gray-600 text-base leading-relaxed font-medium">
            To research, design, and develop indigenous technologies across five core domains:
            <br /><br />
            • Astronomical research tools for data-driven observation and education
            <br />
            • Defense & autonomous systems powered by AI for surveillance and response
            <br />
            • Marine & ocean technologies for underwater research and maritime security
            <br />
            • Rocket & propulsion technologies for safe and cost-effective space access
            <br />
            • Satellite systems for environmental monitoring and disaster management
          </p>
        </motion.div>
      </div>
    </div>
  );
}
