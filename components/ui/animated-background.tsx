// File: /app/components/ui/animated-background.tsx

'use client';
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  speed: number;
  speedX: number;
  speedY: number;
  size: number;
  color: string;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  type: 'star' | 'nebula';
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  life: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const createParticle = (isMobile: boolean, totalStars: number, index: number): Particle => {
    const isStar = index < totalStars;
    
    if (isStar) {
      // Distribute star colors according to percentages
      let color = '#FFFFFF';
      let size = Math.random() * 1 + 1;
      
      const rand = Math.random();
      if (rand < 0.60) {
        color = '#FFFFFF'; // 60% white
        size = Math.random() * 1 + 1;
      } else if (rand < 0.80) {
        color = '#4FC3F7'; // 20% light blue
        size = Math.random() * 1 + 1;
      } else if (rand < 0.95) {
        color = '#9C27B0'; // 15% purple
        size = Math.random() * 1 + 1;
      } else {
        color = '#00D9FF'; // 5% cyan
        size = Math.random() * 1 + 2;
      }
      
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        speed: Math.random() * 0.1 + 0.05,
        speedX: 0,
        speedY: Math.random() * 0.1 + 0.05,
        size,
        color,
        opacity: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 0.03 + 0.02,
        twinkleOffset: Math.random() * Math.PI * 2,
        type: 'star'
      };
    } else {
      // Create nebula orb
      const colors = ['#9C27B0', '#4FC3F7', '#E91E63'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        speed: Math.random() * 0.05 + 0.05,
        speedX: (Math.random() - 0.5) * 0.1,
        speedY: (Math.random() - 0.5) * 0.1,
        size: Math.random() * 20 + 20,
        color,
        opacity: Math.random() * 0.1 + 0.15,
        twinkleSpeed: 0,
        twinkleOffset: 0,
        type: 'nebula'
      };
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const isMobile = window.innerWidth < 768;
    const starCount = isMobile ? 40 : 80;
    const nebulaCount = isMobile ? 3 : 6;
    const totalParticles = starCount + nebulaCount;
    
    const particles: Particle[] = [];
    for (let i = 0; i < totalParticles; i++) {
      particles.push(createParticle(isMobile, starCount, i));
    }

    const shootingStars: ShootingStar[] = [];
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.016; // Approximate frame time

      particles.forEach((particle) => {
        if (particle.type === 'star') {
          // Twinkling stars
          particle.y += particle.speedY;

          if (particle.y > canvas.height) {
            particle.y = 0;
            particle.x = Math.random() * canvas.width;
          }

          // Calculate twinkling opacity
          const twinkle = Math.sin(time * particle.twinkleSpeed + particle.twinkleOffset);
          const opacity = 0.3 + ((twinkle + 1) / 2) * 0.7; // Map -1,1 to 0.3,1.0

          ctx.fillStyle = particle.color;
          ctx.globalAlpha = opacity;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
        } else {
          // Nebula orbs
          particle.x += particle.speedX;
          particle.y += particle.speedY;

          // Wrap around screen edges
          if (particle.x < -particle.size) particle.x = canvas.width + particle.size;
          if (particle.x > canvas.width + particle.size) particle.x = -particle.size;
          if (particle.y < -particle.size) particle.y = canvas.height + particle.size;
          if (particle.y > canvas.height + particle.size) particle.y = -particle.size;

          // Create radial gradient for nebula glow
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size
          );
          
          // Parse color and create gradient
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(0.5, particle.color + '66'); // Add transparency
          gradient.addColorStop(1, particle.color + '00'); // Fully transparent

          ctx.globalAlpha = particle.opacity;
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      });

      if (Math.random() < 0.01 && shootingStars.length < 3) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5,
          length: Math.random() * 80 + 40,
          speed: Math.random() * 3 + 2,
          life: 60
        });
      }

      shootingStars.forEach((star, index) => {
        star.x += star.speed;
        star.y += star.speed * 0.5;
        star.life--;

        if (star.life <= 0) {
          shootingStars.splice(index, 1);
          return;
        }

        const gradient = ctx.createLinearGradient(
          star.x,
          star.y,
          star.x - star.length,
          star.y - star.length * 0.5
        );

        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x - star.length, star.y - star.length * 0.5);
        ctx.stroke();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-[#0A0E27]"
    />
  );
}