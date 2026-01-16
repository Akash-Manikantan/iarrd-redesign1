"use client";

import { Instagram, Linkedin, Lock } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        {/* Copyright and Certification */}
        <div className="text-center mb-4">
          <p className="text-sm text-gray-300">
            © 2026 IARRD. All Rights Reserved | Indian Astronomy Rocket Research and Development
          </p>
        </div>

        {/* Privacy Policy and Terms */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <Link 
            href="/privacy-policy" 
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
          >
            <Lock className="w-4 h-4" />
            Privacy Policy
          </Link>
          <span className="text-gray-600">|</span>
          <Link 
            href="/terms-of-service" 
            className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
          >
            Terms of Service
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://www.instagram.com/iarrd_official"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-500 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/company/iarrd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
