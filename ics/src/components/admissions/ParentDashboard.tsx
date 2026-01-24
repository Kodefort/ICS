"use strict";
import React from 'react';
import { Plus, FileText, Clock, CheckCircle, AlertCircle, ArrowRight, User } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Mock Data Interface
interface Application {
    id: string;
    studentName: string;
    class: string;
    status: 'DRAFT' | 'SUBMITTED' | 'UNDER_REVIEW' | 'ACCEPTED' | 'REJECTED';
    lastUpdated: string;
}

interface ParentDashboardProps {
    parentMobile: string;
    applications: Application[];
    onNewApplication: () => void;
    onContinueApplication: (id: string) => void;
    onViewApplication: (id: string) => void;
}

const statusColors = {
    'DRAFT': 'bg-gray-100 text-gray-600 border-gray-200',
    'SUBMITTED': 'bg-blue-50 text-blue-700 border-blue-200',
    'UNDER_REVIEW': 'bg-yellow-50 text-yellow-700 border-yellow-200',
    'ACCEPTED': 'bg-green-50 text-green-700 border-green-200',
    'REJECTED': 'bg-red-50 text-red-700 border-red-200',
};

const statusIcons = {
    'DRAFT': FileText,
    'SUBMITTED': CheckCircle,
    'UNDER_REVIEW': Clock,
    'ACCEPTED': CheckCircle, // Double check or star ideally
    'REJECTED': AlertCircle,
};

export default function ParentDashboard({ parentMobile, applications, onNewApplication, onContinueApplication, onViewApplication }: ParentDashboardProps) {

    return (
        <div className="min-h-screen bg-gray-50/50 p-6 md:p-12 font-sans">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-2">Admission Dashboard</h1>
                        <p className="text-gray-600">Manage your child's applications and track status.</p>
                    </div>
                    <div className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-200">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <User className="text-[#1e3a8a]" size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Logged in as</p>
                            <p className="text-sm font-bold text-gray-900 font-mono">+91 {parentMobile}</p>
                        </div>
                    </div>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Applications List */}
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                            <FileText className="text-[#1e3a8a]" /> Your Applications
                        </h2>

                        {applications.length === 0 ? (
                            <div className="bg-white rounded-3xl p-10 text-center border-2 border-dashed border-gray-300">
                                <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                <h3 className="text-lg font-bold text-gray-700 mb-2">No Applications Yet</h3>
                                <p className="text-gray-500 mb-6">Start a new admission application for your child.</p>
                                <button
                                    onClick={onNewApplication}
                                    className="bg-[#1e3a8a] text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-900 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                                >
                                    Start New Application
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {applications.map((app) => {
                                    const StatusIcon = statusIcons[app.status] || FileText;
                                    return (
                                        <motion.div
                                            key={app.id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group relative overflow-hidden"
                                        >
                                            <div className="absolute top-0 left-0 w-1 h-full bg-[#1e3a8a]"></div>
                                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                                <div>
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <h3 className="text-lg font-bold text-gray-900">{app.studentName || "Untitled Application"}</h3>
                                                        <span className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 ${statusColors[app.status]}`}>
                                                            <StatusIcon size={12} /> {app.status.replace('_', ' ')}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-gray-500 font-medium">Class: {app.class} • Last Updated: {app.lastUpdated}</p>
                                                </div>

                                                {app.status === 'DRAFT' ? (
                                                    <button
                                                        onClick={() => onContinueApplication(app.id)}
                                                        className="px-5 py-2.5 bg-blue-50 text-blue-700 font-bold rounded-xl hover:bg-blue-100 transition-colors flex items-center gap-2 group-hover:translate-x-1 duration-300"
                                                    >
                                                        Continue <ArrowRight size={16} />
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() => onViewApplication(app.id)}
                                                        className="px-5 py-2.5 bg-gray-50 text-gray-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
                                                    >
                                                        View Details
                                                    </button>
                                                )}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Right Column: Actions & Info */}
                    <div className="space-y-6">

                        {/* New Application Card */}
                        {applications.length > 0 && (
                            <button
                                onClick={onNewApplication}
                                className="w-full bg-gradient-to-br from-[#1e3a8a] to-[#0B2C5D] text-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02] text-left group overflow-hidden relative"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm group-hover:rotate-12 transition-transform">
                                        <Plus className="text-white w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-1">New Admission</h3>
                                    <p className="text-blue-200 text-sm mb-4">Apply for another child</p>
                                    <div className="flex items-center gap-2 font-bold text-sm bg-white/20 w-fit px-4 py-2 rounded-lg backdrop-blur-sm group-hover:bg-white group-hover:text-[#1e3a8a] transition-colors">
                                        Start Now <ArrowRight size={16} />
                                    </div>
                                </div>
                            </button>
                        )}

                        {/* Info Card */}
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <AlertCircle size={20} className="text-orange-500" /> Important Dates
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex gap-4 items-start">
                                    <div className="flex-shrink-0 w-12 text-center">
                                        <span className="block text-xs text-gray-400 font-bold uppercase">Feb</span>
                                        <span className="block text-xl font-bold text-gray-800">15</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-800">Application Deadline</p>
                                        <p className="text-xs text-gray-500">Last day to submit forms for Phase 1</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start border-t border-gray-50 pt-4">
                                    <div className="flex-shrink-0 w-12 text-center">
                                        <span className="block text-xs text-gray-400 font-bold uppercase">Mar</span>
                                        <span className="block text-xl font-bold text-gray-800">01</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-800">Entrance Test</p>
                                        <p className="text-xs text-gray-500">For Class 6th to 9th</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
