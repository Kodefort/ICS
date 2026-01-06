"use client";

import { useState, useEffect, ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 1;
        }
        return prev - 1;
      });
    }, 20); // Countdown speed (~2 seconds)

    const timer = setTimeout(() => setLoading(false), 1900); // Stop loader after 2 sec

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
        {/* Animated Logo */}
        <img
          src="/logo.png"
          alt="School Logo"
          className="w-36 h-36 object-contain mb-6 animate-[pulse_1s_ease-in-out_infinite]"
        />

        {/* Countdown Number */}
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-[pulse_1s_ease-in-out_infinite]">
          {count}
        </h1>
      </div>
    );
  }

  return <>{children}</>;
}
