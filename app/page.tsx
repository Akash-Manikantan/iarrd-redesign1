"use client";

import { ArrowRight, Rocket, Satellite, Globe2, Anchor, ExternalLink, Mail, Menu, Users, Phone, Info, FolderKanban, Shield, Instagram, Linkedin, ChevronDown, Building2, Telescope, Ship, ArrowDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import AnimatedBackground from '../components/ui/animated-background';
import HeroStats from '../components/hero-stats';
import AboutSection from './components/about-section';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleDropdownEnter = (dropdown: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300); // 300ms delay before closing
  };

  const teamMembers = [
    {
      name: "Harish Ragavendra Srinivasan",
      role: "Founder & CEO",
      bio: "Harish is a self-taught innovator in satellites, rocketry, and defense technology. As the founder of IARRD, he leads strategic initiatives to drive advancements in space exploration and security, fostering global collaboration and cutting-edge innovation.",
      photo:"https://i.pinimg.com/736x/d4/8e/1b/d48e1b5cbb3f5ace1cebef360ff91064.jpg"
    },
    {
      name: "Keerthi Sai A S",
      role: "CTO & R&D Team Lead",
      bio: "Keerthi Sai is the Chief Technology Officer and leads the R&D team at IARRD. With a strong background in data analysis, she drives technological innovation and oversees the development of key projects within the organization.",
      photo: "https://i.pinimg.com/736x/65/2a/1c/652a1ca38f31a529c63740e6eda5e156.jpg"
    },
    {
      name: "Goutham GV",
      role: "CFO & Fund & Finance Lead",
      bio: "Goutham GV serves as the Chief Financial Officer at IARRD, managing all financial strategies and fundraising initiatives. With a keen focus on budgeting, resource allocation, and funding operations, he ensures financial stability while supporting innovation and sustainable growth.",
      photo: "https://i.pinimg.com/736x/af/c7/c1/afc7c1f038e75d5459e2050669aa4d0c.jpg"
    },
    {
  name: "Sahana Raga Sri Vk",
  role: "CBDE & Creative Head at Social Media Team",
  bio: "Sahana Raga Sri Vk leads IARRD’s business and creative efforts as Chief Business Executive and Creative Head. She manages outreach, collaborations, and social media strategy, helping the organization grow its presence while staying true to its vision.",
  photo: "https://i.pinimg.com/736x/27/0a/32/270a32a411438222f0a49fe35fb8eb90.jpg"
},
    {
      name: "Tamizh Amuthan R",
      role: "Astronomy Team Lead",
      bio: "Tamizh leads the Astronomy team at IARRD, focusing on developing AI-driven tools to enhance astronomical research and observations. His work advances our understanding of the universe through innovative technologies.",
      photo: "https://i.pinimg.com/736x/c3/34/f9/c334f95c6c50c10413a2b588d2de8c34.jpg"
    },
    {
      name: "Hemagiri Raj",
      role: "Defence Team Lead",
      bio: "Hemagiri leads the Defence team, researching space security and defense technologies, contributing to IARRD's mission of sustainable space exploration.",
      photo: "https://i.pinimg.com/736x/97/68/49/976849146979e50a1aeeceb8b5af2ec6.jpg"
    },
    {
      name: "Santhosh Kumar B",
      role: "Marine Team Lead",
      bio: "Santhosh Kumar leads the Marine Division at IARRD, focusing on developing smart and sustainable marine technologies using AI and robotics for ocean research and defense applications.",
      photo:"https://i.pinimg.com/736x/1e/47/a6/1e47a6fa8b67c0e13d304d8011f3f4b5.jpg"
    },
    {
      name: "Sharan Murali",
      role: "Satellite Team Lead",
      bio: "Sharan heads the satellite division, working on the development of CubeSat technologies and satellite payload systems to monitor the Earth and beyond.",
      photo: "https://i.pinimg.com/736x/6c/c5/71/6cc57192e584bff418a87a3f9653534c.jpg"
    },
    {
      name: "Gnanesh A S",
      role: "Social Media Team Lead",
      bio: "Gnanesh manages all outreach efforts, promoting IARRD’s work and securing partnerships through social media and public engagements.",
      photo: "https://i.pinimg.com/736x/39/83/62/398362704d904748b92fba8a91be1418.jpg"
    },
    {
      name: "Mabasha",
      role: "Startup & Business Strategy Mentor",
      bio: "Mabasha guides IARRD in startup management, funding, and operations, helping the organization scale effectively. His expertise supports IARRD’s growth in space technology and defense innovation.",
      photo: "https://i.pinimg.com/736x/fb/56/bf/fb56bfb3fa43a38b942af3ef84f90a30.jpg"
    }
  ];

  const projects = [
    {
      name: "PrithiviSat",
      description: "PrithiviSat is a low-cost, AI-enabled CubeSat platform developed for environmental monitoring, disaster early warning, and weather intelligence, with applications in agriculture and climate analysis.",
      progress: 40,
      timeline: "2023-2027",
      image: "https://i.pinimg.com/736x/59/3e/d2/593ed24b756ec62002e7d694deea60a5.jpg",
      status: "Active Development",
      category: "Satellite Systems",
      techStack: ["AI/ML", "IoT Sensors", "Weather Modeling", "Data Analytics"],
      applications: ["Disaster Prediction", "Agricultural Monitoring", "Weather Forecasting", "Environmental Tracking"],
      teamSize: "8 Engineers",
      budget: "₹xxxx",
      keyFeatures: [
        "Real-time weather monitoring",
        "AI-based disaster prediction",
        "Agricultural data analytics",
        
      ],
      milestones: [
        { phase: "Design Complete", status: "In Progress" },
        { phase: "Prototype Testing", status: "Pending" },
        { phase: "Integration", status: "Pending" },
        { phase: "Launch Preparation", status: "Q4 2026" }
      ]
    },
    {
      name: "IRAI-Q2",
      description: "IRAI-Q2 is an AI-enabled unmanned aerial platform designed for surveillance, reconnaissance, disaster response, and security operations, with a focus on autonomy and long-range capability.",
      progress: 60,
      timeline: "2023-2027",
      image: "https://i.pinimg.com/736x/16/b1/b2/16b1b2022ed00c739b1a18fe1d29b496.jpg",
      status: "Active Development",
      category: "Defense Systems",
      techStack: ["Computer Vision", "Autonomous Navigation", "Thermal Imaging", "Edge AI"],
      applications: ["Border Surveillance", "Disaster Response", "Search & Rescue", "Security Operations"],
      teamSize: "8 Engineers",
      budget: "₹xxxx",
      keyFeatures: [
        "Autonomous flight control",
        "AI-based threat detection",
        "Extended operational range (50 km+)",
        
      ],
      milestones: [
        { phase: "Prototype Development", status: "In Progress" },
        { phase: "Flight Testing", status: "Pending" },
        { phase: "AI Integration", status: "Pending" },
        { phase: "Field Deployment", status: "Q2 2026" }
      ]
    },
    {
      name: "Astronomy Research Tools",
      description: "AI-Driven Scientific Platforms. A suite of intelligent tools aimed at automating astronomical data analysis, celestial object classification, and research workflows.",
      progress: 15,
      timeline: "2026-2028",
      image: "https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?auto=format&fit=crop&q=80",
      status: "Research Phase",
      category: "Astronomical Research",
      techStack: ["Deep Learning", "Image Processing", "Data Mining", "Cloud Computing"],
      applications: ["Celestial Object Detection", "Astronomical Data Analysis", "Educational Tools", "Research Support"],
      teamSize: "4 Researchers",
      budget: "₹xxxx",
      keyFeatures: [
        "AI-powered celestial object classification",
        "Automated data processing pipeline",
        "Integration with major observatories"
      ],
      milestones: [
        { phase: "Research & Planning", status: "In Progress" },
        { phase: "Algorithm Development", status: "Q3 2026" },
        { phase: "Platform Development", status: "Q1 2027" },
        { phase: "Beta Release", status: "Q4 2027" }
      ]
    }
  ];

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 50);
      }, 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMissionClick = () => {
    const missionSection = document.querySelector('#latest-mission');
    missionSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLearnMore = (projectName: string) => {
    setSidebarOpen(false);
    const projectDetails = projects.find(p => p.name === projectName);
    if (projectDetails) {
      alert(`
        Project: ${projectDetails.name}
        Timeline: ${projectDetails.timeline}
        Current Progress: ${projectDetails.progress}%

        Description: ${projectDetails.description}

        Status: Active - Click OK to view detailed documentation.
      `);
    }
  };

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      setSubscribeStatus("Please enter an email address");
      return;
    }
    setSubscribeStatus("Thank you for subscribing! Check your email for confirmation.");
    setEmail("");
    setTimeout(() => setSubscribeStatus(""), 3000);
  };

  const handleNavigation = (section: string) => {
    setSidebarOpen(false);
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AnimatedBackground />
      
      {/* Desktop Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Rocket className="w-7 h-7 text-cyan-400" />
              <span className="text-2xl font-bold text-white tracking-tight">IARRD</span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-white/90 hover:text-cyan-400 transition-colors text-base font-medium"
              >
                Home
              </button>
              
              {/* Company Dropdown */}
              <div className="relative"
                onMouseEnter={() => handleDropdownEnter('company')}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="flex items-center gap-1 text-white/90 hover:text-cyan-400 transition-colors text-base font-medium">
                  Company
                  <ChevronDown className="w-4 h-4" />
                </button>
                {openDropdown === 'company' && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-56 bg-gray-800 border border-gray-700 rounded-lg shadow-xl py-2 z-50"
                    onMouseEnter={() => handleDropdownEnter('company')}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      onClick={() => { handleNavigation('about'); setOpenDropdown(null); }}
                      className="w-full px-4 py-3 text-left text-white/90 hover:text-cyan-400 hover:bg-gray-700/50 transition-colors flex items-center gap-3"
                    >
                      <Info className="w-4 h-4" />
                      <span>About IARRD</span>
                    </button>
                    <a
                      href="/team"
                      onClick={() => setOpenDropdown(null)}
                      className="block w-full px-4 py-3 text-left text-white/90 hover:text-cyan-400 hover:bg-gray-700/50 transition-colors flex items-center gap-3"
                    >
                      <Users className="w-4 h-4" />
                      <span>Our Team</span>
                    </a>
                    <a
                      href="/investors"
                      onClick={() => setOpenDropdown(null)}
                      className="block w-full px-4 py-3 text-left text-white/90 hover:text-cyan-400 hover:bg-gray-700/50 transition-colors flex items-center gap-3"
                    >
                      <Building2 className="w-4 h-4" />
                      <span>Investors</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Projects Dropdown */}
              <div className="relative"
                onMouseEnter={() => handleDropdownEnter('projects')}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="flex items-center gap-1 text-white/90 hover:text-cyan-400 transition-colors text-base font-medium">
                  Projects
                  <ChevronDown className="w-4 h-4" />
                </button>
                {openDropdown === 'projects' && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-56 bg-gray-800 border border-gray-700 rounded-lg shadow-xl py-2 z-50"
                    onMouseEnter={() => handleDropdownEnter('projects')}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      onClick={() => { handleNavigation('projects'); setOpenDropdown(null); }}
                      className="w-full px-4 py-3 text-left text-white/90 hover:text-cyan-400 hover:bg-gray-700/50 transition-colors flex items-center gap-3"
                    >
                      <FolderKanban className="w-4 h-4" />
                      <span>All Projects</span>
                    </button>
                    <button
                      onClick={() => { handleNavigation('projects'); setOpenDropdown(null); }}
                      className="w-full px-4 py-3 text-left text-white/90 hover:text-cyan-400 hover:bg-gray-700/50 transition-colors flex items-center gap-3"
                    >
                      <Satellite className="w-4 h-4" />
                      <span>PrithiviSat</span>
                    </button>
                    <button
                      onClick={() => { handleNavigation('projects'); setOpenDropdown(null); }}
                      className="w-full px-4 py-3 text-left text-white/90 hover:text-cyan-400 hover:bg-gray-700/50 transition-colors flex items-center gap-3"
                    >
                      <Shield className="w-4 h-4" />
                      <span>IRAI-Q2</span>
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavigation('contact')}
                className="text-white/90 hover:text-cyan-400 transition-colors text-base font-medium"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
              onClick={() => setSidebarOpen(!isSidebarOpen)}
              aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 z-50 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
      >
        <div className="p-6">
          <div className="flex items-center mb-12">
            <div className="flex items-center gap-3">
              <Rocket className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">IARRD</span>
            </div>
          </div>
          <nav className="space-y-6">
            <button
              onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setSidebarOpen(false); }}
              className="flex items-center gap-4 text-white/80 hover:text-cyan-400 w-full p-3 rounded-lg hover:bg-white/10 transition-all"
            >
              <Rocket className="w-5 h-5" />
              <span className="text-lg">Home</span>
            </button>
            <button
              onClick={() => handleNavigation('about')}
              className="flex items-center gap-4 text-white/80 hover:text-cyan-400 w-full p-3 rounded-lg hover:bg-white/10 transition-all"
              aria-label="Navigate to About section"
            >
              <Info className="w-5 h-5" />
              <span className="text-lg">About</span>
            </button>
            <button
              onClick={() => handleNavigation('projects')}
              className="flex items-center gap-4 text-white/80 hover:text-cyan-400 w-full p-3 rounded-lg hover:bg-white/10 transition-all"
              aria-label="Navigate to Projects section"
            >
              <FolderKanban className="w-5 h-5" />
              <span className="text-lg">Projects</span>
            </button>
            <button
              onClick={() => handleNavigation('contact')}
              className="flex items-center gap-4 text-white/80 hover:text-cyan-400 w-full p-3 rounded-lg hover:bg-white/10 transition-all"
              aria-label="Navigate to Contact section"
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg">Contact Us</span>
            </button>
          </nav>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <section className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/HeroVideo.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-20">
            
            {/* LEFT SIDE - Content */}
            <div className="space-y-8">
              {/* Brand Logo */}
              <div className="flex items-center gap-3">
                <Rocket className="w-10 h-10 text-cyan-400" />
                <h1 className="text-4xl md:text-5xl font-bold text-white">IARRD</h1>
              </div>

              {/* Main Headline */}
              <div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Building
                  <span className="block text-cyan-400">India's Future</span>
                </h2>

                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                  IARRD develops affordable space, defense, and AI-driven technologies that strengthen India’s technological self-reliance and real-world impact.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleNavigation('projects')}
                  className="bg-cyan-500 text-black px-8 py-4 rounded-lg hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 text-lg font-bold shadow-lg shadow-cyan-500/20"
                  aria-label="Explore active projects"
                >
                  Explore Active Projects <Rocket className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleNavigation('contact')}
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2 text-lg font-semibold"
                  aria-label="Collaborate with us"
                >
                  IARRD EDU <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========== NEW ABOUT SECTION ========== */}
      <AboutSection />

      <section id="projects" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-cyan-600 text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Active Projects
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Active Projects</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Pioneering next-generation space, defense, and scientific technologies with measurable progress and strategic impact.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-2xl hover:border-cyan-600 transition-all duration-300 overflow-hidden">
                {/* Project Image */}
                <div
                  className="h-56 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-md border border-gray-200">
                    <span className="text-sm font-bold text-cyan-600">{project.progress}% Complete</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-cyan-600 px-4 py-2 rounded-full shadow-md">
                    <span className="text-sm font-bold text-white">{project.status}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
                      <span className="text-xs font-semibold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-700 mb-2">
                      <span className="font-semibold">Development Progress</span>
                      <span className="font-bold text-cyan-600">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-cyan-600 rounded-full h-3 transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>Timeline: {project.timeline}</span>
                      <span>Team: {project.teamSize}</span>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {project.keyFeatures.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-600 mt-2 flex-shrink-0" />
                          <span className="text-xs text-gray-600 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-900 mb-3">Technology Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="text-xs font-medium text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-900 mb-3">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.applications.map((app, i) => (
                        <span key={i} className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Milestones */}
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <h4 className="text-sm font-bold text-gray-900 mb-3">Project Milestones:</h4>
                    <div className="space-y-2">
                      {project.milestones.map((milestone, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <span className="text-xs text-gray-600">{milestone.phase}</span>
                          <span className={`text-xs font-semibold ${
                            milestone.status === '✓' ? 'text-green-600' : 
                            milestone.status === 'In Progress' ? 'text-cyan-600' : 'text-gray-400'
                          }`}>
                            {milestone.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Budget & CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">Project Budget</p>
                      <p className="text-lg font-bold text-gray-900">{project.budget}</p>
                    </div>
                    <button
                      onClick={() => handleLearnMore(project.name)}
                      className="bg-cyan-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-cyan-700 transition-colors font-semibold text-sm shadow-lg shadow-cyan-600/30"
                      aria-label={`View full details for ${project.name}`}
                    >
                      Full Details <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header with tagline */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Let's Build the Future Together</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              IARRD welcomes research institutions, academic partners, industry collaborators, and technology investors who share a commitment to advancing India's space and defense ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Get in Touch</h3>
              <div className="space-y-4 mb-8">
                <a href="mailto:iarrd.official@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-cyan-600 transition-colors">
                  <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-cyan-600" />
                  </div>
                  <span>iarrd.official@gmail.com</span>
                </a>
                <a href="tel:+918903272879" className="flex items-center gap-3 text-gray-700 hover:text-cyan-600 transition-colors">
                  <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-cyan-600" />
                  </div>
                  <span>+91 8903272879</span>
                </a>
                <p className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center">
                    <Globe2 className="w-5 h-5 text-cyan-600" />
                  </div>
                  <span>Anaicut road, Ranipet-13</span>
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4 text-gray-900">Follow Us</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/company/iarrd/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-cyan-600 hover:border-cyan-600 transition-all duration-300 group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                  </a>
                  <a 
                    href="https://www.instagram.com/iarrd.official" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-cyan-600 hover:border-cyan-600 transition-all duration-300 group"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Stay Updated</h3>
              <p className="text-gray-600 mb-6 text-sm">Subscribe to receive updates on our missions, research progress, and partnership opportunities.</p>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-300 px-6 py-3 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600/20 text-gray-900 placeholder:text-gray-400 transition-all"
                  aria-label="Email address for newsletter subscription"
                />
                <button
                  type="submit"
                  className="w-full bg-cyan-600 text-white px-8 py-3 rounded-lg hover:bg-cyan-700 transition-colors flex items-center justify-center gap-2 font-semibold shadow-lg shadow-cyan-600/30"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe to Newsletter <Mail className="w-5 h-5" />
                </button>
              </form>
              {subscribeStatus && (
                <p className={`mt-4 ${subscribeStatus.includes("Thank you") ? "text-green-400" : "text-red-400"}`}>
                  {subscribeStatus}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}