"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-br from-[#0B2240] via-[#0B2C5D] to-[#1a3a5f] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: About / Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo_code.jpg"
                alt="ICS Logo"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div>
                <h3 className="text-lg font-bold font-mono">Infinite Code School</h3>
                <p className="text-xs text-blue-300">Brighter Tomorrow</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Empowering students with world-class coding education and innovative learning experiences for a brighter digital future.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <Link href="#" className="group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
              </Link>
              <Link href="#" className="group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-400 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </div>
              </Link>
              <Link href="#" className="group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              </Link>
              <Link href="#" className="group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-mono border-b-2 border-blue-400 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all duration-200">›</span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all duration-200">›</span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all duration-200">›</span>
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all duration-200">›</span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all duration-200">›</span>
                  Community
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all duration-200">›</span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-mono border-b-2 border-blue-400 pb-2 inline-block">Our Programs</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/programs/web-development" className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all duration-200">›</span>
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/programs/mobile-apps" className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all duration-200">›</span>
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/programs/data-science" className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all duration-200">›</span>
                  Data Science
                </Link>
              </li>
              <li>
                <Link href="/programs/ai-ml" className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all duration-200">›</span>
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/programs/cybersecurity" className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all duration-200">›</span>
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/programs/cloud-computing" className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                  <span className="mr-2 group-hover:mr-3 transition-all duration-200">›</span>
                  Cloud Computing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-mono border-b-2 border-blue-400 pb-2 inline-block">Get In Touch</h3>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>123 Education Street, Tech City, TC 12345</span>
              </div>
              
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <div>
                  <p>+1 (555) 123-4567</p>
                  <p>+1 (555) 987-6543</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>info@infinitecodeschool.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-2">
              <p className="text-sm text-gray-300 mb-3">Subscribe to our newsletter</p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-md transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0B2C5D]"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Infinite Code School. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Cookie Policy
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}