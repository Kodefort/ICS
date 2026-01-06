"use client";

import { useEffect, useState, ReactNode } from "react";

export default function RootLayout({ children }: { children?: ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="w-full max-w-md px-4">
          <svg width="100%" height="auto" viewBox="0 0 600 260" fill="none" className="max-w-full h-auto">
          <defs>
            <linearGradient id="icsGrad" x1="80" y1="130" x2="520" y2="130" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0B2240" />
              <stop offset="50%" stopColor="#2B7CFF" />
              <stop offset="100%" stopColor="#18A6A6" />
            </linearGradient>
          </defs>

          <path
            d="
              M120 130
              C120 60, 240 60, 300 130
              C360 200, 480 200, 480 130
              C480 60, 360 60, 300 130
              C240 200, 120 200, 120 130
            "
            stroke="url(#icsGrad)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="infinity-path"
          />
        </svg>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
