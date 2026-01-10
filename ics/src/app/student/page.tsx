"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BookOpen, Calendar, Clock, GraduationCap, LogOut, User } from 'lucide-react';

export default function StudentPortal() {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const session = localStorage.getItem('student_session');
        if (!session) {
            router.push('/login');
        } else {
            setIsAuthenticated(true);
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('student_session');
        router.push('/login');
    };

    if (!isAuthenticated) {
        return null; // Or a loading spinner
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Portal Header */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-[#0B2C5D] flex items-center gap-2">
                        <GraduationCap className="h-8 w-8" />
                        Student Portal
                    </h1>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
                    >
                        <LogOut className="h-5 w-5" />
                        Logout
                    </button>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Welcome Section */}
                <div className="bg-blue-900 rounded-lg shadow-lg p-6 mb-8 text-white">
                    <h2 className="text-3xl font-bold mb-2">Welcome back, Student!</h2>
                    <p className="text-blue-100">Here is your academic overview for today.</p>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Card 1: Schedule */}
                    <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <Calendar className="h-6 w-6 text-blue-600" />
                            </div>
                            <span className="text-xs font-semibold bg-green-100 text-green-800 px-2 py-1 rounded-full">Today</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Upcoming Class</h3>
                        <p className="text-gray-600 text-sm mb-4">Mathematics - Room 101</p>
                        <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            10:00 AM - 11:30 AM
                        </div>
                    </div>

                    {/* Card 2: Assignments */}
                    <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-500">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-purple-100 rounded-lg">
                                <BookOpen className="h-6 w-6 text-purple-600" />
                            </div>
                            <span className="text-xs font-semibold bg-red-100 text-red-800 px-2 py-1 rounded-full">2 Pending</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Assignments</h3>
                        <p className="text-gray-600 text-sm mb-4">Due this week</p>
                        <ul className="text-sm text-gray-500 space-y-2">
                            <li className="flex justify-between">
                                <span>Physics Lab Report</span>
                                <span className="text-red-500 font-medium">Tomorrow</span>
                            </li>
                            <li className="flex justify-between">
                                <span>History Essay</span>
                                <span className="text-orange-500 font-medium">Fri</span>
                            </li>
                        </ul>
                    </div>

                    {/* Card 3: Profile */}
                    <div className="bg-white rounded-lg shadow p-6 border-l-4 border-indigo-500">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-indigo-100 rounded-lg">
                                <User className="h-6 w-6 text-indigo-600" />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">My Profile</h3>
                        <p className="text-gray-600 text-sm mb-1">John Doe</p>
                        <p className="text-gray-500 text-sm">Grade 11 - Section A</p>
                        <p className="text-gray-500 text-sm mt-2">ID: student123</p>
                    </div>

                </div>
            </main>
        </div>
    );
}
