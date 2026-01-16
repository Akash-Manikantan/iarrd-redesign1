'use client';

import { useEffect, useState } from 'react';

interface StatCounterProps {
  value: string;      // e.g., "3+", "11", "2023", "5"
  label: string;      // e.g., "Active Projects"
  duration?: number;  // animation duration in ms (default 2000)
}

export default function StatCounter({ value, label, duration = 2000 }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Extract the numeric part from the value
    const targetValue = parseInt(value.replace(/\D/g, '')) || 0;
    
    // Check if there's a suffix (like "+")
    const hasSuffix = value.includes('+');
    const suffix = hasSuffix ? '+' : '';

    let startTime: number | null = null;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1); // 0 to 1
      
      // Easing function (ease-out cubic) - starts fast, ends slow
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      
      const currentCount = Math.floor(easedProgress * targetValue);
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate); // continue animation
      }
    };
    
    // Start fade-in effect
    setIsVisible(true);
    
    // Start counting animation
    requestAnimationFrame(animate);
  }, [value, duration]);

  // Extract suffix from original value
  const suffix = value.includes('+') ? '+' : '';

  return (
    <div 
      className={`flex flex-col items-center justify-center transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="text-4xl md:text-5xl font-bold text-white">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base text-gray-400 mt-2">
        {label}
      </div>
    </div>
  );
}
