"use client";

import React, { useEffect, useState } from 'react';
import { X, Calendar, Bell } from 'lucide-react';

interface EmergencyOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const EmergencyOverlay: React.FC<EmergencyOverlayProps> = ({ isOpen, onClose }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || !isOpen) return null;


    return (
        <>
            {/* Backdrop with blur - only visible when open */}
            <div
                className={`fixed inset-0 z-[2000] transition-all duration-500 ease-in-out pointer-events-none ${isOpen ? 'bg-black/20 backdrop-blur-sm' : 'bg-transparent pointer-events-none delay-200'
                    }`}
            />

            {/* The large teal circle container (Desktop) / Full screen (Mobile) */}
            <div
                className={`fixed z-[2001] bg-[#00a396] transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) shadow-2xl overflow-hidden origin-bottom-left
                flex flex-col items-start
          ${isOpen
                        ? 'inset-0 w-full h-full opacity-100 scale-100 rounded-none pt-20 px-8 md:w-[120vh] md:h-[120vh] md:rounded-full md:inset-auto md:-left-[20vh] md:-bottom-[20vh] md:pt-[30%] md:pl-[30%]'
                        : 'left-0 bottom-0 w-0 h-0 opacity-0 scale-0 md:left-[-20vh] md:bottom-[-20vh]'}
        `}
            >
                <div className={`w-full max-w-md text-white transition-opacity duration-500 delay-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex items-center space-x-3 mb-6 mt-12 md:mt-0">
                        <Bell className="w-8 h-8 text-white shrink-0" />
                        <h2 className="text-xl sm:text-2xl font-bold tracking-widest uppercase">Emergency Announcements</h2>
                    </div>

                    <p className="text-lg sm:text-xl font-medium leading-relaxed mb-8">
                        Admission dates and criteria are available on the admission...
                    </p>

                    <div className="flex items-center space-x-2 text-white/90">
                        <Calendar className="w-5 h-5" />
                        <span className="font-mono text-lg">29-12-2022</span>
                    </div>
                </div>
            </div>

            {/* Red Close Button */}
            <button
                onClick={onClose}
                className={`fixed z-[2002] bottom-24 right-6 md:bottom-6 md:left-6 bg-red-500 hover:bg-red-600 text-white rounded-full p-4 shadow-xl transition-all duration-500 transform hover:scale-110
            ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0 pointer-events-none'}
        `}
                aria-label="Close Announcement"
            >
                <X className="w-8 h-8" />
            </button>
        </>
    );
};

export default EmergencyOverlay;
