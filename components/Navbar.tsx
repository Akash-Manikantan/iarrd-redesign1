"use client";

import { useState, useRef } from 'react';
import { Rocket, Menu, Users, Info, FolderKanban, Shield, Satellite, Building2, ChevronDown, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
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
    }, 300);
  };

  const handleNavigation = (section: string) => {
    setSidebarOpen(false);
    // Only scroll if on home page, otherwise navigate to home
    if (window.location.pathname === '/') {
      const element = document.getElementById(section.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${section.toLowerCase()}`;
    }
  };

  return (
    <>
      {/* Desktop Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Rocket className="w-7 h-7 text-cyan-400" />
              <span className="text-2xl font-bold text-white tracking-tight">IARRD</span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-white/90 hover:text-cyan-400 transition-colors text-base font-medium"
              >
                Home
              </Link>
              
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
                    <Link
                      href="/team"
                      onClick={() => setOpenDropdown(null)}
                      className="block w-full px-4 py-3 text-left text-white/90 hover:text-cyan-400 hover:bg-gray-700/50 transition-colors flex items-center gap-3"
                    >
                      <Users className="w-4 h-4" />
                      <span>Our Team</span>
                    </Link>
                    <Link
                      href="/investors"
                      onClick={() => setOpenDropdown(null)}
                      className="block w-full px-4 py-3 text-left text-white/90 hover:text-cyan-400 hover:bg-gray-700/50 transition-colors flex items-center gap-3"
                    >
                      <Building2 className="w-4 h-4" />
                      <span>Investors</span>
                    </Link>
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
            <Link
              href="/"
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-4 text-white/80 hover:text-cyan-400 w-full p-3 rounded-lg hover:bg-white/10 transition-all"
            >
              <Rocket className="w-5 h-5" />
              <span className="text-lg">Home</span>
            </Link>
            <button
              onClick={() => handleNavigation('about')}
              className="flex items-center gap-4 text-white/80 hover:text-cyan-400 w-full p-3 rounded-lg hover:bg-white/10 transition-all"
            >
              <Info className="w-5 h-5" />
              <span className="text-lg">About</span>
            </button>
            <Link
              href="/team"
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-4 text-white/80 hover:text-cyan-400 w-full p-3 rounded-lg hover:bg-white/10 transition-all"
            >
              <Users className="w-5 h-5" />
              <span className="text-lg">Our Team</span>
            </Link>
            <Link
              href="/investors"
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-4 text-white/80 hover:text-cyan-400 w-full p-3 rounded-lg hover:bg-white/10 transition-all"
            >
              <Building2 className="w-5 h-5" />
              <span className="text-lg">Investors</span>
            </Link>
            <button
              onClick={() => handleNavigation('projects')}
              className="flex items-center gap-4 text-white/80 hover:text-cyan-400 w-full p-3 rounded-lg hover:bg-white/10 transition-all"
            >
              <FolderKanban className="w-5 h-5" />
              <span className="text-lg">Projects</span>
            </button>
            <button
              onClick={() => handleNavigation('contact')}
              className="flex items-center gap-4 text-white/80 hover:text-cyan-400 w-full p-3 rounded-lg hover:bg-white/10 transition-all"
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg">Contact</span>
            </button>
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}
