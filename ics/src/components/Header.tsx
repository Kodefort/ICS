"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {

  return (
    <header className="bg-white z-50">
      <div className="max-w-7xl mx-auto pl-8 pr-4 sm:pl-12 sm:pr-6 lg:pl-16 lg:pr-8 py-4">
        <Link href="/" className="flex items-center justify-center md:justify-start gap-3">
          {/* Logo: mobile */}
          <Image
            src="/logo_code.jpg"
            alt="ICS Logo"
            width={80}
            height={80}
            className="h-14 md:h-16 w-auto hover:scale-105 transition-transform duration-200"
          />

          {/* Text */}
          <span className="flex flex-col items-center md:items-start">
            <h1 className="text-base sm:text-xl md:text-lg font-mono font-bold text-[#0B2C5D] leading-tight">
              Infinite Code School
            </h1>
            <h2 className="text-xs sm:text-sm md:text-xs font-medium text-[#4A6FA5] tracking-wide">
              Brighter Tomorrow
            </h2>
          </span>
        </Link>
      </div>
    </header>


  );
}