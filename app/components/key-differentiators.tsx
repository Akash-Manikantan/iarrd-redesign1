"use client";

import React from 'react';
import { TrendingDown, Layers, Target } from 'lucide-react';

export default function KeyDifferentiators() {
  const differentiators = [
    {
      icon: TrendingDown,
      title: 'Cost-Effective Solutions',
      description: 'Delivering advanced space technology systems at significantly reduced costs through innovative engineering and efficient resource utilization.',
    },
    {
      icon: Layers,
      title: 'Integrated Capabilities',
      description: 'Comprehensive technical expertise spanning satellite systems, propulsion technology, defense applications, marine systems, and astronomical research.',
    },
    {
      icon: Target,
      title: 'Strategic Applications',
      description: 'Focused development of mission-critical solutions for disaster management, environmental monitoring, national security, and scientific research.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {differentiators.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 p-8 md:p-10 rounded-xl shadow-md hover:shadow-xl hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <Icon className="w-16 h-16 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
