"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Satellite, Rocket, Shield, Anchor, Telescope } from 'lucide-react';

export default function FocusAreas() {
  const areas = [
        {
      icon: Telescope,
      title: 'Astronomical & Observation Research Tools',
      description: 'Development of AI-driven observation and data analysis tools to support astronomy research, education, and scientific institutions.',
      subtext: 'Flagship Project: HYDRA ',
      status: 'Status: Planning Phase | Timeline: 2025 – 2027',
    },
      {
      icon: Shield,
      title: 'Defense & Autonomous Systems',
      description: 'Development of AI-enabled unmanned aerial systems for surveillance, reconnaissance, disaster response, and security operations.',
      subtext: 'Flagship Project: IRAI-Q2',
      status: 'Status: Active Development | Timeline: 2023 – 2027',
      
    },
      {
      icon: Anchor,
      title: 'Marine & Ocean Technology',
      description: 'Conceptual and early-stage research on autonomous marine and underwater systems for oceanographic research, maritime security, and resource monitoring.',
      status: 'Status: Concept & Research Phase | Timeline: 2026 – 2028',
    },
     {
      icon: Rocket,
      title: 'Rocket & Propulsion Systems',
      description: 'Research and development of hybrid rocket propulsion technologies with a focus on safety, cost efficiency, and sustainable access to space.',
      status: 'Status: Concept & Research Phase | Timeline: 2026 – 2029',
    },
    {
      icon: Satellite,
      title: 'Satellite Systems & Communications',
      description: 'Design and development of low-cost CubeSat platforms for environmental monitoring, disaster early warning, weather forecasting, and agricultural intelligence.',
      subtext: 'Flagship Mission: PrithiviSat',
      status: 'Status: Development Phase | Timeline: 2023 – 2028',
    },
   
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Section Heading */}
      <motion.h3 
        className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        Technology Domains
      </motion.h3>

      {/* Grid of Focus Area Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {areas.map((area, index) => {
          const Icon = area.icon;
          return (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 p-8 rounded-xl shadow-lg hover:shadow-xl hover:border-cyan-600 transition-all duration-300 h-full flex flex-col group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
            >
              {/* Icon */}
              <motion.div 
                className="bg-cyan-50 rounded-xl p-4 w-fit mb-6"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <Icon className="w-14 h-14 text-cyan-600 transition-transform group-hover:scale-110" />
              </motion.div>

              {/* Title */}
              <h4 className="text-2xl font-bold text-gray-900 mb-3">
                {area.title}
              </h4>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                {area.description}
              </p>

              {/* Subtext if exists */}
              {area.subtext && (
                <p className="text-cyan-600 font-semibold text-sm mt-3 mb-2">
                  {area.subtext}
                </p>
              )}

              {/* Status */}
              <p className="text-xs text-gray-500 mt-4 pt-4 border-t border-gray-200">
                {area.status}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
