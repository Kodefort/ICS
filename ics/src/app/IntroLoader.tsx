"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function IntroLoader() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show on home page ('/')
    if (pathname === "/") {
      setShow(true);
      const t = setTimeout(() => setShow(false), 2000); // show for 2s
      return () => clearTimeout(t);
    } else {
      setShow(false);
    }
  }, [pathname]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-white overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35 } }}
        >
          {/* Spread from middle */}
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ clipPath: "inset(0 50% 0 50%)" }}
            animate={{ clipPath: "inset(0 0% 0 0%)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {/* Center content */}
          <div className="relative z-10 h-full w-full flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="logo-flame-glow">
                <Image
                  src="/logo_code.jpg"
                  alt="Infinite Code School"
                  width={110}
                  height={110}
                  priority
                />
              </div>

              <p className="mt-4 text-sm font-medium text-[#4A6FA5]">
                Infinite Code School
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
