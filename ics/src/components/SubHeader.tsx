"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, Search, User } from 'lucide-react';
import { navigationData } from '@/config/navigationData';
import SearchOverlay from './SearchOverlay';

export default function SubHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);

  const toggleMobileSubmenu = (label: string) => {
    setActiveMobileSubmenu(activeMobileSubmenu === label ? null : label);
  };

  // State to track scroll position for sticky logo
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <div className={`sticky top-0 z-[999] py-1.5 transition-all duration-300 ${isScrolled ? 'bg-white backdrop-blur-md border-b border-gray-100' : 'bg-white backdrop-blur-md border-b border-gray-100'}`}>
      <div className="max-w-7xl mx-auto pl-8 pr-4 sm:pl-12 sm:pr-6 lg:pl-18 lg:pr-8">

        {/* Mobile Header: Logo Left, Menu Button Right */}
        <div className="lg:hidden flex justify-between items-center py-2 px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo_code.jpg"
              alt="ICS Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="font-sans font-bold text-[#0B2C5D] text-lg">ICS</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-slate-600 hover:text-blue-900 transition-colors"
              aria-label="Search"
            >
              <Search className="w-6 h-6" />
            </button>

            <Link
              href="/student"
              className="p-2 text-slate-600 hover:text-blue-900 transition-colors"
              aria-label="Student Portal"
            >
              <User className="w-6 h-6" />
            </Link>

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
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex justify-start space-x-1 animate-fadeIn h-full items-center">

          {navigationData.map((item) => (
            <div key={item.label} className="group/main py-1">

              {item.label === "Home" ? (
      //           isScrolled ? (
      //             /* 🔹 LOGO shown ON SCROLL */
      //             <Link
      //               href="/"
      //               aria-label="Home"
      //               className="inline-flex items-center gap-1.5 px-1.5 py-2 rounded-md hover:bg-blue-50 transition-colors"
      //             >
      //               <Image
      //                 src="/logo_code.jpg"
      //                 alt="ICS Logo"
      //                 width={20}
      //                 height={20}
      //                 className="h-9 w-9 rounded-full"
      //               />
      //               {/* <span className="font-bold text-sm text-[#0B2C5D] leading-none">
      //   ICS
      // </span> */}
      //             </Link>
      //           ) 
                // : (
                  /* 🔹 HOME BUTTON shown INITIALLY */
                  <Link
                    href="/"
                    aria-label="Home"
                    className="inline-flex items-center justify-center px-1.5 py-2 rounded-md hover:bg-blue-50 transition-colors"
                  >
                    <Home className="w-5 h-5 text-slate-600" />
                  </Link>
                )
             : (
                /* 🔹 Other nav items unchanged */
                <Link
                  href={item.href}
                  className="text-slate-600 text-sm  hover:text-blue-900 px-1.5 py-0 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                >
                  {item.label}
                </Link>
              )}


              {/* Submenu */}
              {item.sections && item.sections.length > 0 && (
                <div className="absolute top-full left-0 w-full bg-slate-50 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] border-t border-black opacity-0 invisible group-hover/main:opacity-100 group-hover/main:visible transition-all duration-200 transform translate-y-2 group-hover/main:translate-y-0 z-10">

                  <div className="max-w-7xl mx-auto pl-8 pr-4 sm:pl-12 sm:pr-6 lg:pl-16 lg:pr-8">
                    <div className="flex flex-row p-2 gap-3 justify-start">
                      {/* Vertical line aligned with content */}
                      <div className="w-1 bg-blue-600 rounded-full opacity-80 shrink-0 self-stretch my-1"></div>

                      {/* Using grid to organize sections, or flex for single section */}
                      <div className={item.sections?.length === 1 ? "flex justify-start" : "grid grid-cols-4 gap-32"}>
                        {item.sections.map((section, idx) => (
                          <div key={idx} className="flex flex-col items-start">
                            {section.title && (
                              <h3 className="text-blue-900 font-bold text-2xl mb-8 w-fit relative group/heading cursor-default">
                                {section.title}
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover/heading:scale-x-100 transition-transform duration-300 origin-left"></span>
                              </h3>
                            )}
                            <ul className="space-y-4">
                              {section.items.map((subItem) => (
                                <li key={subItem.label}>
                                  <Link
                                    href={subItem.href}
                                    className="text-slate-500 hover:text-blue-600 text-base transition-colors duration-150 w-fit block relative group/link text-left"
                                  >
                                    {subItem.label}
                                    <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left"></span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}


          {/* Independent Desktop Utility Icons - Integrated into Nav to prevent overlap */}
          <div className="ml-auto flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="group p-3 rounded-full bg-white shadow-md text-slate-600 hover:text-blue-900 hover:bg-blue-50 transition-all duration-200 cursor-pointer border border-gray-200 relative"
              aria-label="Search"
            >
              <Search className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
            </button>
            <Link
              href="/student"
              className="group p-3 rounded-full bg-white shadow-md text-slate-600 hover:text-blue-900 hover:bg-blue-50 transition-all duration-200 cursor-pointer border border-gray-200 relative"
              aria-label="Student Portal"
            >
              <User className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
            </Link>
          </div>
        </nav>

      </div>

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Navigation */}
      {
        isOpen && (
          <div className="lg:hidden animate-slideDown max-h-[80vh] overflow-y-auto bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigationData.map((item) => (
                <div key={item.label} className="block">
                  <div className="flex items-center justify-between text-slate-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => item.sections ? toggleMobileSubmenu(item.label) : null}>
                    <Link href={item.href} className="flex-grow">
                      {item.label}
                    </Link>
                    {item.sections && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleMobileSubmenu(item.label);
                        }}
                        className="p-1 focus:outline-none text-slate-400"
                      >
                        <svg className={`w-4 h-4 transition-transform duration-200 ${activeMobileSubmenu === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* Mobile Submenu */}
                  {item.sections && activeMobileSubmenu === item.label && (
                    <div className="bg-slate-50 pl-4 pr-2 py-2 space-y-4 border-t border-black">
                      {item.sections.map((section, idx) => (
                        <div key={idx}>
                          {section.title && (
                            <h4
                              tabIndex={0} // Make focusable for click-to-activate on mobile
                              className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 relative w-fit group/mobile-heading cursor-pointer focus:outline-none"
                            >
                              {section.title}
                              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover/mobile-heading:scale-x-100 group-active/mobile-heading:scale-x-100 group-focus/mobile-heading:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </h4>
                          )}
                          <ul className="space-y-1">
                            {section.items.map((subItem) => (
                              <li key={subItem.label}>
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  className="block px-3 py-2 text-sm text-slate-600 hover:text-blue-600 transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )
      }
    </div >
  );
}
