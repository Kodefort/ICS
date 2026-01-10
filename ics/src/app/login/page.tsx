"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LoginPage() {
    const [studentId, setStudentId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Mock Authentication Logic
        if (studentId.trim().toLowerCase() === 'student123' && password.trim() === 'ics2026') {
            // Set session (simplified for demo)
            localStorage.setItem('student_session', 'active');
            router.push('/student');
        } else {
            setError('Invalid Student ID or Password');
        }
    };

    return (
        <div className="min-h-screen relative flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background with Gradient and Pattern */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B2C5D] via-[#1a4380] to-[#2B7CFF]"></div>
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)`
                }}></div>
                {/* Decorative Blobs */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-md w-full space-y-8 glass p-10 rounded-2xl shadow-2xl relative z-10 border border-white/20">
                <div className="flex flex-col items-center">
                    <div className="p-3 bg-white/10 rounded-full mb-4 backdrop-blur-sm border border-white/20 shadow-lg">
                        <Image
                            src="/logo_code.jpg"
                            alt="ICS Logo"
                            width={80}
                            height={80}
                            className="h-16 w-auto rounded-full"
                        />
                    </div>
                    <h2 className="mt-2 text-center text-3xl font-bold text-[#0B2C5D] font-sans">
                        Welcome Back
                    </h2>
                    <p className="mt-2 text-center text-sm text-slate-600 font-medium">
                        Sign in to access your student dashboard
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="student-id" className="block text-sm font-medium text-slate-700 mb-1 ml-1">Student ID</label>
                            <input
                                id="student-id"
                                name="studentId"
                                type="text"
                                required
                                className="appearance-none block w-full px-4 py-3 border border-gray-200 rounded-xl bg-white/50 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                                placeholder="Enter your ID"
                                value={studentId}
                                onChange={(e) => setStudentId(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1 ml-1">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="appearance-none block w-full px-4 py-3 border border-gray-200 rounded-xl bg-white/50 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="p-3 rounded-lg bg-red-50 border border-red-100 text-red-600 text-sm text-center font-medium animate-fadeIn">
                            {error}
                        </div>
                    )}

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl font-sans"
                        >
                            Sign In
                        </button>
                    </div>
                </form>

                <div className="pt-4 border-t border-gray-100">
                    <div className="text-center text-xs text-slate-500 bg-white/40 p-3 rounded-lg backdrop-blur-sm">
                        <p className="font-semibold mb-1">Demo Credentials:</p>
                        <p className="font-mono bg-white/50 inline-block px-2 py-0.5 rounded border border-gray-200">ID: student123</p>
                        <span className="mx-2 text-gray-300">|</span>
                        <p className="font-mono bg-white/50 inline-block px-2 py-0.5 rounded border border-gray-200">Pass: ics2026</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
