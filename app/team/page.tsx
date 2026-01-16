"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowLeft, Mail, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';
import Particles from '../../components/ui/particles';

// Flip Card Component
function TeamCard({ member, index, direction = 'up' }: { member: any; index: number; direction?: 'up' | 'left' | 'right' }) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Different animation directions
  const getInitialPosition = () => {
    switch(direction) {
      case 'left': return { opacity: 0, x: -100, y: 0 };
      case 'right': return { opacity: 0, x: 100, y: 0 };
      default: return { opacity: 0, x: 0, y: 80 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: index * 0.15,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      className="relative h-[400px] cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of Card */}
        <div
          className="absolute w-full h-full backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-cyan-500 transition-colors duration-300 h-full group relative">
            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"></div>
            
            {/* Photo */}
            <div className="relative h-72 overflow-hidden bg-gradient-to-br from-cyan-50 to-blue-50">
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* Floating "Click to flip" badge */}
              <div className="absolute top-4 right-4 bg-cyan-600 text-white text-xs px-3 py-1 rounded-full animate-pulse">
                Click to flip
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-cyan-600 font-medium text-sm">
                {member.role}
              </p>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div
          className="absolute w-full h-full backface-hidden"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-2xl shadow-lg overflow-hidden border-2 border-cyan-500 h-full p-6 flex flex-col text-white">
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2">
                {member.name}
              </h3>
              <p className="text-cyan-100 font-medium text-sm mb-2">
                {member.role}
              </p>
              <div className="h-1 w-16 bg-white/50 rounded"></div>
            </div>

            {/* Bio */}
            <div className="flex-grow overflow-auto mb-4">
              <p className="text-white/90 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>

            {/* Department Badge */}
            {member.department && (
              <div className="mb-4">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                  {member.department}
                </span>
              </div>
            )}

            {/* Action Button */}
            {member.linkedin && (
              <a 
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm font-medium"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            )}

            {/* Click to flip back */}
            <div className="text-center mt-4 text-white/70 text-xs">
              Click to flip back
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function TeamPage() {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const teamMembers = [
    {
      name: "Harish Ragavendra Srinivasan",
      role: "Founder & CEO",
      department: "Leadership",
      bio: "Harish is a self-taught innovator in satellites, rocketry, and defense technology. As the founder of IARRD, he leads strategic initiatives to drive advancements in space exploration and security, fostering global collaboration and cutting-edge innovation.",
      photo: "https://i.pinimg.com/736x/d4/8e/1b/d48e1b5cbb3f5ace1cebef360ff91064.jpg",
      email: "ceo.iarrd@gmail.com",
      linkedin: "https://www.linkedin.com/in/harish-ragavendra-srinivasan",
      isLeadership: true
    },
    {
      name: "Keerthi Sai A S",
      role: "CTO & R&D Team Lead",
      department: "Technology",
      bio: "Keerthi Sai A S leads the research and development efforts at IARRD as Chief Technology Officer. She is responsible for technical planning, system architecture, and execution of core projects, ensuring research outcomes are translated into practical and scalable technological solutions.",
      photo: "https://i.pinimg.com/736x/65/2a/1c/652a1ca38f31a529c63740e6eda5e156.jpg",
      email: "cto.iarrd@gmail.com",
      linkedin: "https://www.linkedin.com/in/keerthisaias/",
      isLeadership: true
    },
    {
      name: "Goutham GV",
      role: "CFO & Fund & Finance Lead",
      department: "Finance",
      bio: "Goutham GV manages financial planning, budgeting, and fundraising operations at IARRD. He oversees resource allocation, financial compliance, and sustainability strategies that support long-term research, development, and organizational growth.",
      photo: "https://i.pinimg.com/736x/af/c7/c1/afc7c1f038e75d5459e2050669aa4d0c.jpg",
      email: "cfo.iarrd1@gmail.com",
      linkedin: "https://www.linkedin.com/in/goutham-gv-603482397/",
      isLeadership: true
    },
    {
      name: "Sahana Raga Sri Vk",
      role: "CBDE & Creative Head at Social Media Team",
      department: "Business",
      bio: "Sahana Raga Sri Vk oversees business development, outreach, and creative communications at IARRD. She manages collaborations, partnerships, and digital presence, ensuring consistent communication of the organization’s vision and technical initiatives.",
      photo: "https://i.pinimg.com/736x/27/0a/32/270a32a411438222f0a49fe35fb8eb90.jpg",
      email: "sahanacbde.iarrd@gmail.com",
      linkedin: "https://www.linkedin.com/in/sahana-raga-sri-1708a9378/",
      isLeadership: true
    },
    {
      name: "Tamizh Amuthan R",
      role: "Astronomy Team Lead",
      department: "Astronomy",
      bio: "Tamizh Amuthan R leads the Astronomy division at IARRD. He focuses on the development of AI-driven tools and methodologies for astronomical observation, data analysis, and educational research applications.",
      photo: "https://i.pinimg.com/736x/c3/34/f9/c334f95c6c50c10413a2b588d2de8c34.jpg",
      email: "tamizhamuthan.iarrd@gmail.com",
      linkedin: "https://www.linkedin.com/in/tamizh-amuthan-926450297/"
    },
    {
      name: "Hemagiri Raj",
      role: "Defence Team Lead",
      department: "Defence",
      bio: "Hemagiri Raj heads the Defence division, working on AI-enabled defense and security technologies. His role includes research into autonomous systems, surveillance platforms, and applications supporting national security and disaster response.",
      photo: "https://i.pinimg.com/736x/97/68/49/976849146979e50a1aeeceb8b5af2ec6.jpg",
      email: "hemagiri.iarrd@gmail.com",
      linkedin: "https://www.linkedin.com/in/hemagiri-raj-s/"
    },
    {
      name: "Santhosh Kumar B",
      role: "Marine Team Lead",
      department: "Marine",
      bio: "Santhosh Kumar B leads the Marine Technology division at IARRD. He focuses on research and development of autonomous marine and underwater systems using AI and robotics for ocean research, maritime security, and sustainable monitoring.",
      photo: "https://i.pinimg.com/736x/1e/47/a6/1e47a6fa8b67c0e13d304d8011f3f4b5.jpg",
      email: "santhosh.iarrd@gmail.com",
      linkedin: "https://www.linkedin.com/in/gnanesh-a-s-270715326/"
    },
    {
      name: "Sharan Murali",
      role: "Satellite Team Lead",
      department: "Satellite",
      bio: "Sharan Murali leads the Satellite Systems division, overseeing CubeSat platform development, payload integration, and mission planning. His work supports environmental monitoring, disaster management, and scientific satellite applications.",
      photo: "https://i.pinimg.com/736x/6c/c5/71/6cc57192e584bff418a87a3f9653534c.jpg",
      email: "sharan.iarrd@gmail.com",
      linkedin: "https://www.linkedin.com/in/sharan-murali-08b51a295/"
    },
    {
      name: "Gnanesh A S",
      role: "Social Media Team Lead",
      department: "Outreach",
      bio: "Gnanesh A S manages IARRD’s outreach and public engagement initiatives. He is responsible for content coordination, visibility strategies, and supporting partnership communication across digital platforms.",
      photo: "https://i.pinimg.com/736x/39/83/62/398362704d904748b92fba8a91be1418.jpg",
      email: "gnanesh.iarrd@gmail.com",
      linkedin: "https://www.linkedin.com/in/gnanesh-as"
    },
    {
      name: "Mabasha",
      role: "Startup & Business Strategy Mentor",
      department: "Advisory",
      bio: "Mabasha advises IARRD on startup operations, business strategy, and organizational scaling. His guidance supports decision-making related to growth, funding approaches, and long-term sustainability.",
      photo: "https://i.pinimg.com/736x/fb/56/bf/fb56bfb3fa43a38b942af3ef84f90a30.jpg",
      email: "mabasha.iarrd@gmail.com",
      linkedin: "https://www.linkedin.com/in/mabasha-r/"
    }
  ];

  const leadershipMembers = teamMembers.filter(member => member.isLeadership);
  const otherMembers = teamMembers.filter(member => !member.isLeadership);
  
  // Separate CEO from other leadership
  const ceo = teamMembers.find(member => member.role.includes('Founder & CEO'));
  const leadershipWithoutCEO = leadershipMembers.filter(member => !member.role.includes('Founder & CEO'));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative">
      {/* Particle Background */}
      <Particles />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 text-white py-20 md:py-32 overflow-hidden">
        {/* Space-themed Background with stars */}
        <div className="absolute inset-0">
          {/* Star field effect */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(2px 2px at 20% 30%, white, transparent),
                             radial-gradient(2px 2px at 60% 70%, white, transparent),
                             radial-gradient(1px 1px at 50% 50%, white, transparent),
                             radial-gradient(1px 1px at 80% 10%, white, transparent),
                             radial-gradient(2px 2px at 90% 60%, white, transparent),
                             radial-gradient(1px 1px at 33% 80%, white, transparent),
                             radial-gradient(1px 1px at 15% 90%, white, transparent)`,
            backgroundSize: '200% 200%',
            opacity: 0.3
          }}></div>
          
          {/* Animated gradient orbs */}
          <div className="absolute inset-0 opacity-30">
            <motion.div 
              className="absolute top-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 30, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <motion.div 
              className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -20, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <motion.div 
              className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-400 rounded-full blur-3xl"
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

          {/* Satellite/Orbital paths */}
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <motion.circle
              cx="50%"
              cy="50%"
              r="200"
              fill="none"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="5,10"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              style={{ originX: "50%", originY: "50%" }}
            />
            <motion.circle
              cx="50%"
              cy="50%"
              r="300"
              fill="none"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="8,15"
              animate={{ rotate: -360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              style={{ originX: "50%", originY: "50%" }}
            />
          </svg>
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
              <Users className="w-10 h-10" />
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              The People Building IARRD’s Space, Defence, and Research Capabilities
            </p>

            {/* Team Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-4xl font-bold">30+</div>
                <div className="text-white/80 mt-1">Team Members</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-4xl font-bold">8</div>
                <div className="text-white/80 mt-1">Departments</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="text-4xl font-bold">5+</div>
                <div className="text-white/80 mt-1">Specializations</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CEO Hero Spotlight */}
      {ceo && (
        <section className="py-16 md:py-24 relative z-10 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-20">
              <motion.div 
                className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  x: [0, 30, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              {/* Badge */}
              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-white border border-white/30">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-bold text-sm tracking-wider">FOUNDER & CEO</span>
                </div>
              </div>

              {/* CEO Card */}
              <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                  {/* Photo Section */}
                  <div className="md:col-span-2 relative h-96 md:h-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20"></div>
                    <img
                      src={ceo.photo}
                      alt={ceo.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  {/* Content Section */}
                  <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                    <motion.h2 
                      className="text-4xl md:text-5xl font-bold text-gray-900 mb-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      {ceo.name}
                    </motion.h2>
                    
                    <motion.p 
                      className="text-2xl text-cyan-600 font-semibold mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      {ceo.role}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="h-1 w-20 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full mb-6"></div>
                      
                      <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        {ceo.bio}
                      </p>

                      {/* Stats/Info */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 rounded-xl border-2 border-cyan-200">
                          <p className="text-xs text-cyan-700 font-bold uppercase tracking-wider mb-1">Founded</p>
                          <p className="text-2xl font-bold text-gray-900">May 2023</p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl border-2 border-purple-200">
                          <p className="text-xs text-purple-700 font-bold uppercase tracking-wider mb-1">Department</p>
                          <p className="text-lg font-bold text-gray-900">{ceo.department}</p>
                        </div>
                      </div>

                      {/* LinkedIn Button */}
                      <motion.a
                        href="https://www.linkedin.com/in/harish-ragavendra-srinivasan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 font-semibold shadow-lg"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin className="w-5 h-5" />
                        Connect on LinkedIn
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Leadership Section */}
      {(
        <section className="py-16 md:py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            {/* Decorative elements */}
            <div className="absolute left-0 top-1/4 w-64 h-64 bg-cyan-200/30 rounded-full blur-3xl -z-10"></div>
            <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl -z-10"></div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
            >
              Leadership Team
            </motion.h2>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              {leadershipWithoutCEO.map((member, index) => {
                // Alternate directions: left, up, right, left, up, right...
                const directions = ['left', 'up', 'right'];
                const direction = directions[index % 3] as 'left' | 'up' | 'right';
                return (
                  <TeamCard 
                    key={member.name} 
                    member={member} 
                    index={index}
                    direction={direction}
                  />
                );
              })}
            </motion.div>
          </div>
        </section>
      )}

      {/* Other Team Members */}
      {(
        <section className="py-16 bg-gray-50 relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            {/* Decorative gradient orbs */}
            <div className="absolute left-1/4 top-0 w-96 h-96 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-3xl -z-10"></div>
            <div className="absolute right-1/4 bottom-0 w-72 h-72 bg-gradient-to-br from-cyan-200/40 to-blue-200/40 rounded-full blur-3xl -z-10"></div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
            >
              Team Leads & Specialists
            </motion.h2>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              {otherMembers.map((member, index) => {
                // Alternate between left and right for wave effect
                const direction = index % 2 === 0 ? 'left' : 'right';
                return (
                  <TeamCard 
                    key={member.name} 
                    member={member} 
                    index={index}
                    direction={direction as 'left' | 'right'}
                  />
                );
              })}
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
