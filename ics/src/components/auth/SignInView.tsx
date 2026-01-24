"use client";

import { SignInButton } from "./SignInButton";
import { ShieldCheck, Star, Sparkles, School, Mail, Lock, User as UserIcon, Loader2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { handleCredentialSignIn, handleSignUp } from "@/app/actions/auth";
import Image from "next/image";

export default function SignInView() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    async function handleSubmit(formData: FormData) {
        setIsLoading(true);
        setError(null);
        setSuccess(null);

        if (isSignUp) {
            const result = await handleSignUp(formData);
            if (result?.error) {
                setError(result.error);
            } else if (result?.success) {
                setSuccess(result.success);
                // Optional: switch to sign in mode after success
                setTimeout(() => setIsSignUp(false), 2000);
            }
        } else {
            const result = await handleCredentialSignIn(formData);
            if (result?.error) {
                setError(result.error);
            }
        }
        setIsLoading(false);
    }

    return (
        <div className="min-h-screen bg-gray-50 flex overflow-hidden relative">

            {/* Left Side - Hero / Visuals */}
            <div className="hidden lg:flex w-1/2 bg-[#1e3a8a] relative overflow-hidden flex-col justify-between p-12 text-white">
                {/* Background Patterns */}
                <div className="absolute inset-0 z-0 opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100" height="100" fill="url(#grid)" />
                    </svg>
                </div>

                {/* Decorative Circles */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 12, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-500/30 rounded-full blur-3xl"
                />

                {/* Content */}
                <div className="relative z-10 mt-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm font-medium tracking-wide mb-6"
                    >
                        <Sparkles size={16} className="text-yellow-400" /> Admissions Open 2026-27
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6"
                    >
                        Shape Their <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Future</span> Today.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl text-blue-100 max-w-lg leading-relaxed"
                    >
                        Join our community of excellence. Experience world-class education designed for holistic growth.
                    </motion.p>
                </div>

                <div className="relative z-10 flex items-center gap-4 text-sm text-blue-200/80">
                    <School size={16} /> ICS
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 relative">

                {/* Mobile Background (Shown only on small screens) */}
                <div className="absolute inset-0 bg-[#1e3a8a] lg:hidden z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 lg:hidden z-0"></div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden relative z-10"
                >
                    <div className="p-8 md:p-12">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-6 shadow-sm transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                                <ShieldCheck className="w-8 h-8 text-[#1e3a8a]" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                {isSignUp ? "Create Account" : "Welcome Back"}
                            </h2>
                            <p className="text-gray-500">
                                {isSignUp ? "Start your admission journey" : "Sign in to access your dashboard"}
                            </p>
                        </div>

                        <div className="space-y-6">

                            {/* Form */}
                            <form action={handleSubmit} className="space-y-4">
                                <AnimatePresence mode="popLayout">
                                    {error && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                            className="bg-red-50 text-red-600 text-sm p-3 rounded-lg text-center font-medium"
                                        >
                                            {error}
                                        </motion.div>
                                    )}
                                    {success && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                            className="bg-green-50 text-green-600 text-sm p-3 rounded-lg text-center font-medium"
                                        >
                                            {success}
                                        </motion.div>
                                    )}

                                    {isSignUp && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                        >
                                            <div className="relative">
                                                <UserIcon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Full Name"
                                                    required
                                                    className="w-full py-3.5 pl-12 pr-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-all"
                                                />
                                            </div>
                                        </motion.div>
                                    )}

                                    <div className="relative">
                                        <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            required
                                            className="w-full py-3.5 pl-12 pr-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-all"
                                        />
                                    </div>

                                    <div className="relative">
                                        <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            required
                                            minLength={6}
                                            className="w-full py-3.5 pl-12 pr-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-all"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full py-4 bg-[#1e3a8a] text-white rounded-xl font-bold text-lg shadow-lg hover:bg-blue-900 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? (
                                            <Loader2 size={24} className="animate-spin" />
                                        ) : (
                                            <>
                                                {isSignUp ? "Create Account" : "Sign In"} <ArrowRight size={20} />
                                            </>
                                        )}
                                    </button>
                                </AnimatePresence>
                            </form>

                            <div className="relative flex py-2 items-center">
                                <div className="flex-grow border-t border-gray-200"></div>
                                <span className="flex-shrink-0 mx-4 text-gray-300 text-xs uppercase tracking-widest font-bold">Or continue with</span>
                                <div className="flex-grow border-t border-gray-200"></div>
                            </div>

                            <SignInButton />

                            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 flex gap-3 items-start cursor-pointer hover:bg-blue-50 transition-colors" onClick={() => { setIsSignUp(!isSignUp); setError(null); setSuccess(null); }}>
                                <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5 fill-current" />
                                <p className="text-sm text-blue-800 leading-snug">
                                    <span className="font-bold">{isSignUp ? "Already have an account?" : "New User?"}</span>
                                    <span className="underline ml-1">{isSignUp ? "Sign In here." : "Create account automatically."}</span>
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 text-center">
                        <p className="text-xs text-gray-400">
                            By signing in, you agree to our Terms of Service and Privacy Policy.
                        </p>
                    </div>
                </motion.div>

                {/* Mobile Footer text */}
                <div className="absolute bottom-6 text-white/60 text-xs lg:hidden z-10">
                    &copy; 2026 Indian Community School
                </div>
            </div>
        </div>
    );
}
