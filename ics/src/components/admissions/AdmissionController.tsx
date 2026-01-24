"use client";

import React, { useState, useEffect } from "react";
import ParentDashboard from "./ParentDashboard";
import AdmissionForm from "./AdmissionForm";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

type ViewState = 'DASHBOARD' | 'FORM';

interface AdmissionControllerProps {
    user: any; // Session user
}

export default function AdmissionController({ user }: AdmissionControllerProps) {
    const [view, setView] = useState<ViewState>('DASHBOARD');
    const [applications, setApplications] = useState<any[]>([]);
    const [selectedAppId, setSelectedAppId] = useState<string | null>(null);

    useEffect(() => {
        // Load mock applications for the logged in user
        // We use email as key instead of mobile now
        if (user?.email) {
            loadApplications(user.email);
        }
    }, [user]);

    const loadApplications = (email: string) => {
        // In a real app, fetch from API
        // For now, check local storage for a specific draft
        const draft = localStorage.getItem(`draft_${email}`);
        let apps = [];

        if (draft) {
            apps.push({
                id: 'draft_1',
                studentName: JSON.parse(draft).studentName || 'Untitled Draft',
                class: 'Class I',
                status: 'DRAFT',
                lastUpdated: 'Just now',
                data: JSON.parse(draft)
            });
        }

        // Also check for submitted apps in local storage (mock persistence)
        const submitted = localStorage.getItem(`submitted_${email}`);
        if (submitted) {
            apps = [...apps, ...JSON.parse(submitted)];
        }

        setApplications(apps);
    };

    const handleLogout = () => {
        signOut();
    };

    const handleNewApplication = () => {
        setSelectedAppId(null);
        setView('FORM');
    };

    const handleViewApplication = (id: string) => {
        setSelectedAppId(id);
        setView('FORM');
    };

    const handleFormCancel = () => {
        if (user?.email) loadApplications(user.email);
        setView('DASHBOARD');
        setSelectedAppId(null);
    };

    const handleFormSuccess = (formData: any) => {
        // Save mock submission
        if (user?.email) {
            const newApp = {
                id: `sub_${Date.now()}`,
                studentName: formData.studentName || 'Student Name',
                class: 'Class I',
                status: 'SUBMITTED',
                lastUpdated: new Date().toLocaleDateString(),
                data: formData
            };

            // Persist submitted apps to local storage specifically to fix "view details" persistence
            const existingSubmitted = JSON.parse(localStorage.getItem(`submitted_${user.email}`) || '[]');
            const updatedSubmitted = [...existingSubmitted, newApp];
            localStorage.setItem(`submitted_${user.email}`, JSON.stringify(updatedSubmitted));

            // Clear draft if it was a draft
            localStorage.removeItem(`draft_${user.email}`);

            // Update local state is handled by loadApplications usually but we can update directly for speed
            loadApplications(user.email);
        }
        setView('DASHBOARD');
    };

    const handleFormSave = (data: any) => {
        if (user?.email) {
            localStorage.setItem(`draft_${user.email}`, JSON.stringify(data));
            loadApplications(user.email);
        }
        setView('DASHBOARD');
    };

    if (view === 'DASHBOARD') {
        return (
            <div className="relative">
                <button
                    onClick={handleLogout}
                    className="fixed top-6 right-6 z-50 bg-white/80 backdrop-blur text-red-600 px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:bg-red-50 transition-all font-bold text-sm flex items-center gap-2 border border-red-100"
                >
                    <LogOut size={16} /> Logout
                </button>
                <ParentDashboard
                    parentMobile={user.email || "User"} // Using email as identifier
                    applications={applications}
                    onNewApplication={handleNewApplication}
                    onContinueApplication={(id) => { setSelectedAppId(id); setView('FORM'); }}
                    onViewApplication={handleViewApplication}
                />
            </div>
        );
    }

    if (view === 'FORM') {
        let initialData = undefined;
        let isReadOnly = false;

        if (selectedAppId) {
            const app = applications.find(a => a.id === selectedAppId);
            if (app) {
                // For draft, we use the data directly or from local storage if 'data' prop missing
                // For submitted, we use the 'data' property we saved
                initialData = app.data || (app.status === 'DRAFT' ? JSON.parse(localStorage.getItem(`draft_${user?.email}`) || '{}') : {});
                isReadOnly = app.status !== 'DRAFT';
            }
        } else {
            // New application, check for draft just in case or start fresh
            // Actually handleNewApplication clears selectedAppId, so we start fresh usually.
            // But existing logic checked for draft. Let's keep it simple: new app = fresh unless draft exists and we want to resume it (which is handled by Continue).
            // If New App clicked, we shouldn't auto-load draft unless we want to. Let's assume New App = empty.
            initialData = {};
        }

        return (
            <AdmissionForm
                onCancel={handleFormCancel}
                onSuccess={() => { }} // Success is handled inside form for submission, but we need to pass data back? 
                // Wait, AdmissionForm calls onSuccess without data in current code. We need to change that to pass data for our persistence logic.
                // Actually AdmissionForm submits to API. check handleSubmit in AdmissionForm.
                // It calls fetch('/api/admissions'). 
                // If we want to simulate "View Details" we need to capture that data. 
                // The current handleFormSuccess in controller just mocked it.
                // We should pass a callback to AdmissionForm that is called AFTER api success?
                // AdmissionForm prop: onSuccess: () => void. 
                // We might need to refactor AdmissionForm to pass data to onSuccess if we want to save it locally for this demo.
                // OR we just rely on the API to save it and we fetch it back.
                // Since this is a "hybrid" request (fix error + fix view details), and I don't have a GET endpoint for admissions yet, 
                // I will stick to local storage persistence for the "Dashboard" view.
                // I will update AdmissionForm to pass data to onSuccess.
                onSuccessWithData={(data: any) => handleFormSuccess(data)}
                onSave={handleFormSave}
                initialData={initialData}
                readOnly={isReadOnly}
            />
        );
    }

    return null;
}
