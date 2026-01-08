"use client";

import { useState } from 'react';
import Link from 'next/link';
import { navigationData } from '@/config/navigationData';

// Helper function to get icon for menu item
// Returns null if no icon matches, or simply use logic to select icons based on label if needed
// For now, I'll keep the icons inline or create a helper if the code gets too messy.
// To keep it clean, I'll map the icon paths or use a switch inside the map.

const getIconPath = (label: string) => {
  switch (label) {
    case 'Home':
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>;
    case 'About':
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>;
    case 'Academics':
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>;
    case 'Services':
      return (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </>
      );
    case 'Community':
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>;
    case 'Contact':
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>;
    default:
      return null;
  }
};

export default function SubHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);

  const toggleMobileSubmenu = (label: string) => {
    setActiveMobileSubmenu(activeMobileSubmenu === label ? null : label);
  };

  return (
    <div className="sticky top-0 bg-white shadow-lg border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto pl-8 pr-4 sm:pl-12 sm:pr-6 lg:pl-16 lg:pr-8">

        {/* Mobile menu button - below header on mobile */}
        <div className="md:hidden flex justify-center py-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg className="block h-6 w-6 transition-transform duration-200 rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="block h-6 w-6 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 animate-fadeIn h-full">
          {navigationData.map((item) => (
            <div key={item.label} className="group/main relative flex items-center h-full">
              <Link href={item.href} className="text-slate-700 hover:text-blue-600 px-3 py-4 rounded-md text-sm font-mono font-bold transition-all duration-200 hover:bg-blue-50 flex items-center relative h-full">
                <svg className="w-5 h-5 mr-2 group-hover/main:fill-blue-600 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {getIconPath(item.label)}
                </svg>
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover/main:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>

              {/* Submenu */}
              {item.subItems && item.subItems.length > 0 && (
                <div className="absolute top-full left-0 w-72 bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-b-xl rounded-tr-xl border-t-2 border-t-blue-500 border-x border-b border-gray-100/50 opacity-0 invisible group-hover/main:opacity-100 group-hover/main:visible transition-all duration-300 transform translate-y-4 group-hover/main:translate-y-2 z-50 overflow-hidden ring-1 ring-black/5">
                  <div className="py-3 p-2 grid gap-1">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-3 text-sm text-slate-600 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-white rounded-lg font-medium transition-all duration-200 group/sub"
                      >
                        <span className="relative inline-flex items-center">
                          {/* Animated dot on hover */}
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all duration-300"></span>
                          {subItem.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden animate-slideDown max-h-[80vh] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t border-gray-200">
            {navigationData.map((item) => (
              <div key={item.label} className="block">
                <div className="flex items-center justify-between group text-slate-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-mono font-bold transition-all duration-200 hover:bg-blue-100 hover:scale-105 relative cursor-pointer" onClick={() => item.subItems ? toggleMobileSubmenu(item.label) : null}>
                  <Link href={item.href} className="flex items-center flex-grow">
                    <svg className="w-6 h-6 mr-2 group-hover:fill-blue-600 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      {getIconPath(item.label)}
                    </svg>
                    {item.label}
                  </Link>
                  {item.subItems && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleMobileSubmenu(item.label);
                      }}
                      className="p-1 focus:outline-none"
                    >
                      <svg className={`w-4 h-4 transition-transform duration-200 ${activeMobileSubmenu === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Mobile Submenu */}
                {item.subItems && activeMobileSubmenu === item.label && (
                  <div className="pl-11 pr-2 space-y-1 bg-gray-100/50 rounded-b-md pb-2">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-150"
                        onClick={() => setIsOpen(false)} // Close menu on selection
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
