"use client";

import React, { useState, useEffect } from "react";
import MobileAuthForm from "../../../components/admissions/MobileAuthForm";
import ParentDashboard from "../../../components/admissions/ParentDashboard";
import AdmissionForm from "../../../components/admissions/AdmissionForm";
import { LogOut } from "lucide-react";

type ViewState = 'LOGIN' | 'DASHBOARD' | 'FORM';

export default function AdmissionControllerPage() {
    const [view, setView] = useState<ViewState>('LOGIN');
    const [userMobile, setUserMobile] = useState<string | null>(null);
    const [applications, setApplications] = useState<any[]>([]);

    useEffect(() => {
        // Check for existing session
        const storedMobile = localStorage.getItem('parent_mobile');
        if (storedMobile) {
            setUserMobile(storedMobile);
            setView('DASHBOARD');
            // Load mock applications
            loadApplications(storedMobile);
        }
    }, []);

    const loadApplications = (mobile: string) => {
        // In a real app, fetch from API
        // For now, check local storage for a specific draft
        const draft = localStorage.getItem(`draft_${mobile}`);
        if (draft) {
            setApplications([
                {
                    id: 'draft_1',
                    studentName: JSON.parse(draft).studentName || 'Untitled Draft',
                    class: 'Class I',
                    status: 'DRAFT',
                    lastUpdated: 'Just now'
                }
            ]);
        } else {
            setApplications([]);
        }
    };

    const handleAuthSuccess = (mobile: string) => {
        localStorage.setItem('parent_mobile', mobile);
        setUserMobile(mobile);
        setView('DASHBOARD');
        loadApplications(mobile);
    };

    const handleLogout = () => {
        localStorage.removeItem('parent_mobile');
        setUserMobile(null);
        setView('LOGIN');
    };

    const handleNewApplication = () => {
        setView('FORM');
    };

    const handleFormCancel = () => {
        if (userMobile) loadApplications(userMobile);
        setView('DASHBOARD');
    };

    const handleFormSuccess = () => {
        // Save mock submission
        if (userMobile) {
            const newApp = {
                id: `sub_${Date.now()}`,
                studentName: 'Student Name', // ideally passed back from form
                class: 'Class I',
                status: 'SUBMITTED',
                lastUpdated: new Date().toLocaleDateString()
            };
            // Update local state for demo
            setApplications(prev => [...prev, newApp]);
        }
        setView('DASHBOARD');
    };

    const handleFormSave = (data: any) => {
        if (userMobile) {
            localStorage.setItem(`draft_${userMobile}`, JSON.stringify(data));
            // Reload apps to show the draft
            loadApplications(userMobile);
        }
        setView('DASHBOARD');
    };

    // Render Logic
    if (view === 'LOGIN') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 z-0 opacity-30">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="w-full relative z-10">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl md:text-5xl font-extrabold text-[#1e3a8a] mb-2 font-sans tracking-tight">ICS ADMISSIONS</h1>
                        <p className="text-gray-600">Parent Portal</p>
                    </div>
                    <MobileAuthForm onSuccess={handleAuthSuccess} />
                </div>
            </div>
        );
    }

    if (view === 'DASHBOARD' && userMobile) {
        return (
            <div className="relative">
                <button
                    onClick={handleLogout}
                    className="fixed top-6 right-6 z-50 bg-white/80 backdrop-blur text-red-600 px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:bg-red-50 transition-all font-bold text-sm flex items-center gap-2 border border-red-100"
                >
                    <LogOut size={16} /> Logout
                </button>
                <ParentDashboard
                    parentMobile={userMobile}
                    applications={applications}
                    onNewApplication={handleNewApplication}
                    onContinueApplication={() => setView('FORM')}
                />
            </div>
        );
    }

    if (view === 'FORM') {
        return (
            <AdmissionForm
                onCancel={handleFormCancel}
                onSuccess={handleFormSuccess}
                onSave={handleFormSave}
            />
        );
    }

    return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div></div>;
}
