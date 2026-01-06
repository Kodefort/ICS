"use client";

import { useState, useEffect, ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // Loader duration
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <img
          src="/logo_only.jpg"
          alt="School Logo"
          className="w-36 h-36 object-contain animate-logo"
        />
      </div>
    );
  }

  return <>{children}</>;
}
