"use client";

import { usePathname } from 'next/navigation';
import Header from "./Header";
import SubHeader from "./SubHeader";
import Footer from "./Footer";
import MessengerWidget from "./MessengerWidget";
import EmergencyWidget from "./EmergencyWidget";
import IntroLoader from "../app/IntroLoader"; // Assuming IntroLoader is in app/ or imported correctly. Check imports in layout.tsx.

// IntroLoader was imported as: import IntroLoader from "./IntroLoader"; in layout.tsx (which is in src/app)
// So if I am in src/components/LayoutWrapper.tsx, IntroLoader is in src/app/IntroLoader.tsx?
// Let's check where IntroLoader is.
// layout.tsx (src/app/layout.tsx) imports it as `./IntroLoader`. So it is in src/app/IntroLoader.tsx.
// So import path from components/LayoutWrapper.tsx should be "../app/IntroLoader".
// However, components usually shouldn't import from app/ like that if avoidable, but for this refactor it's fine.

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    // Check if we are exactly on the admission form page
    // User said "on admission form page". Logic: pathname === '/admissions/apply'
    const isAdmissionPage = pathname === '/admissions/apply';

    return (
        <>
            {!isAdmissionPage && <IntroLoader />}
            {!isAdmissionPage && <Header />}
            {!isAdmissionPage && <SubHeader />}
            <main className="min-h-screen">
                {children}
            </main>
            {!isAdmissionPage && <MessengerWidget />}
            {!isAdmissionPage && <EmergencyWidget />}
            {!isAdmissionPage && <Footer />}
        </>
    );
}
