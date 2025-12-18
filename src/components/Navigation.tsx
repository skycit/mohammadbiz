'use client';

import Link from 'next/link';
import { siteConfig } from '@/content/site';

export default function Navigation() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          {siteConfig.name}
        </Link>
        <div className="hidden sm:flex space-x-6">
          <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
            About
          </a>
          <a href="#patent" className="text-gray-600 hover:text-gray-900 transition-colors">
            Patent
          </a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">
            Projects
          </a>
          <a href="#now" className="text-gray-600 hover:text-gray-900 transition-colors">
            Looking for
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
