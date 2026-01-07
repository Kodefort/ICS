"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="bg-white shadow-lg border-b border-gray-200 z-50">

        <div className="max-w-7xl mx-auto pl-8 pr-4 sm:pl-12 sm:pr-6 lg:pl-16 lg:pr-8">

          {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
          <div className="flex flex-col md:flex-row justify-between items-center py-4">
            {/* Logo and Title */}
            <div className="flex-shrink-0 flex flex-col items-center space-y-2">

              <div className="flex items-center gap-3 justify-center">
                <Link href="/" className="shrink-0">
                  <Image
                    src="/logo_code.jpg"
                    alt="ICS Logo"
                    width={60}
                    height={60}
                    className="block md:hidden h-14 w-auto hover:scale-105 transition-transform duration-200"
                  />
                  <Image
                    src="/logo_code.jpg"
                    alt="ICS Logo"
                    width={60}
                    height={60}
                    className="hidden md:block h-16 w-auto hover:scale-105 transition-transform duration-200"
                  />
                </Link>

                <Link href="/" className="flex flex-col items-center justify-center">
                  <h1 className="text-base sm:text-xl md:text-lg font-mono font-bold text-[#0B2C5D] text-center leading-tight">
                    Infinite Code School
                  </h1>

                  <h2 className="text-xs sm:text-sm md:text-xs font-medium text-[#4A6FA5] text-center tracking-wide">
                    Brighter Tomorrow
                  </h2>
                </Link>
              </div>


            </div>

            </div>
          </div>
      </header>
    </div>      

            );
}