"use client";

import { useState } from 'react';
import Link from 'next/link';
import { navigationData } from '@/config/navigationData';

export default function SubHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);

  const toggleMobileSubmenu = (label: string) => {
    setActiveMobileSubmenu(activeMobileSubmenu === label ? null : label);
  };

  return (
    <div className="sticky top-0 bg-white shadow-sm border-b border-gray-100 z-50">
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
        <nav className="hidden md:flex justify-end space-x-1 animate-fadeIn h-full relative">
          {navigationData.map((item) => (
            <div key={item.label} className="group/main pb-4 pt-4">
              {/* Added padding to container instead of link to bridge gap to submenu */}
              <Link href={item.href} className="text-slate-600 hover:text-blue-900 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center relative z-20">
                {item.label}
              </Link>

              {/* Submenu */}
              {item.sections && item.sections.length > 0 && (
                <div className="absolute top-full right-0 w-screen max-w-7xl  bg-slate-50 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] border-t border-black opacity-0 invisible group-hover/main:opacity-100 group-hover/main:visible transition-all duration-200 transform translate-y-2 group-hover/main:translate-y-0 z-10 left-auto">
                  {/* Centering container for submenu content if we want it aligned with max-w-7xl, 
                        currently relying on the exact positioning relative to the header container which is already max-w-7xl.
                        Since we want the menu to appear 'under' the nav but maybe span full width? 
                        The user asked for "ui exactly like this", which usually implies a full-ish width mega menu.
                        The 'absolute right-0 w-screen max-w-7xl' tactic constrains it to the header's width but lets it fill that space.
                    */}
                  <div className="flex flex-row p-8 gap-8 justify-end">
                    {/* Using grid to organize sections, or flex for single section */}
                    <div className={item.sections?.length === 1 ? "flex justify-end" : "grid grid-cols-4 gap-32"}>
                      {item.sections.map((section, idx) => (
                        <div key={idx} className={`flex flex-col ${item.sections?.length === 1 ? "items-end" : ""}`}>
                          {section.title && (
                            <h3 className="text-blue-900 font-bold text-2xl mb-8 w-fit relative group/heading cursor-default">
                              {section.title}
                              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover/heading:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </h3>
                          )}
                          <ul className={`space-y-4 ${item.sections?.length === 1 ? "flex flex-col items-end" : ""}`}>
                            {section.items.map((subItem) => (
                              <li key={subItem.label}>
                                <Link
                                  href={subItem.href}
                                  className={`text-slate-500 hover:text-blue-600 text-base transition-colors duration-150 w-fit block relative group/link ${item.sections?.length === 1 ? "text-right" : "text-right md:text-left"}`}
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
                    {/* Vertical line aligned with content */}
                    <div className="w-1 bg-blue-600 rounded-full opacity-80 shrink-0 self-stretch my-1"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden animate-slideDown max-h-[80vh] overflow-y-auto bg-white border-t border-gray-100">
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
                            className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-3 relative w-fit group/mobile-heading cursor-pointer focus:outline-none"
                          >
                            {section.title}
                            <span className="absolute -bottom-1 left-3 w-[calc(100%_-_24px)] h-0.5 bg-blue-600 transform scale-x-0 group-hover/mobile-heading:scale-x-100 group-active/mobile-heading:scale-x-100 group-focus/mobile-heading:scale-x-100 transition-transform duration-300 origin-left"></span>
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
      )}
    </div>
  );
}
