"use client";

import { useState } from 'react';
import { Bell } from 'lucide-react';
import EmergencyOverlay from './EmergencyOverlay';

export default function EmergencyWidget() {
    const [showEmergency, setShowEmergency] = useState(false);

    return (
        <>
            <EmergencyOverlay isOpen={showEmergency} onClose={() => setShowEmergency(false)} />

            {/* Floating Emergency Bell Button */}
            <button
                onClick={() => setShowEmergency(true)}
                className="fixed bottom-24 md:bottom-48 right-6 z-[2000] bg-[#00a396] text-white p-4 rounded-full shadow-xl hover:bg-[#008f83] transition-all duration-300 hover:scale-110 group"
                aria-label="Emergency Announcements"
            >
                <Bell className="w-6 h-6 animate-pulse" />
                {/* Messenger-like notification badge */}
                <span className="absolute top-0 right-0 block h-3 w-3 rounded-full ring-2 ring-[#00a396] bg-red-500 transform translate-x-1/4 -translate-y-1/4"></span>
            </button>
        </>
    );
}
