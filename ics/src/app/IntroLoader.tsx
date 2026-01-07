"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function IntroLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2000); // show for 2s
    return () => clearTimeout(t);
  }, []);

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
                  src="/logo_small_version.jpg"
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
