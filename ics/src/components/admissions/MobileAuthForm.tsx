"use strict";
import React, { useState, useEffect } from 'react';
import { Smartphone, ArrowRight, Loader2, CheckCircle, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type AuthMode = 'LOGIN' | 'REGISTER';

interface MobileAuthFormProps {
    onSuccess: (mobile: string, mode: AuthMode) => void;
    initialMode?: AuthMode;
}

export default function MobileAuthForm({ onSuccess, initialMode = 'REGISTER' }: MobileAuthFormProps) {
    const [mode, setMode] = useState<AuthMode>(initialMode);
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState(['', '', '', '', '', '']); // 6 digit OTP
    const [step, setStep] = useState<'MOBILE' | 'OTP'>('MOBILE');
    const [isLoading, setIsLoading] = useState(false);

    // Mock States
    const [canResend, setCanResend] = useState(false);
    const [timer, setTimer] = useState(30);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (step === 'OTP' && timer > 0) {
            interval = setInterval(() => setTimer(t => t - 1), 1000);
        } else if (timer === 0) {
            setCanResend(true);
        }
        return () => clearInterval(interval);
    }, [step, timer]);

    const handleSendOTP = async (e: React.FormEvent) => {
        e.preventDefault();
        if (mobile.length < 10) return; // Basic validation

        setIsLoading(true);
        // Simulate API verification
        setTimeout(() => {
            setIsLoading(false);
            setStep('OTP');
            setTimer(30);
            setCanResend(false);
        }, 1500);
    };

    const handleVerifyOTP = async (e: React.FormEvent) => {
        e.preventDefault();
        const otpValue = otp.join('');
        if (otpValue.length < 6) return;

        setIsLoading(true);
        // Simulate API verification
        setTimeout(() => {
            setIsLoading(false);
            onSuccess(mobile, mode);
        }, 1500);
    };

    const handleOtpChange = (index: number, value: string) => {
        if (isNaN(Number(value))) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus next input
        if (value && index < 5) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            nextInput?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            const prevInput = document.getElementById(`otp-${index - 1}`);
            prevInput?.focus();
        }
    };

    return (
        <div className="w-full max-w-md mx-auto bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50 relative overflow-hidden">

            {/* Decorational Background Blobs */}
            <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-[-50px] left-[-50px] w-32 h-32 bg-purple-400/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
                <div className="text-center mb-8">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg mb-4 transform rotate-3">
                        {step === 'MOBILE' ? (
                            <Smartphone className="w-8 h-8 text-white" />
                        ) : (
                            <ShieldCheck className="w-8 h-8 text-white" />
                        )}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">
                        {step === 'MOBILE' ? (mode === 'REGISTER' ? 'Create Parent Account' : 'Welcome Back') : 'Verify Mobile'}
                    </h2>
                    <p className="text-gray-500 mt-2 text-sm">
                        {step === 'MOBILE'
                            ? (mode === 'REGISTER' ? 'Enter your mobile number to start your application' : 'Enter your registered mobile number')
                            : `Enter the code sent to +91 ${mobile}`}
                    </p>
                </div>

                <AnimatePresence mode="wait">
                    {step === 'MOBILE' ? (
                        <motion.form
                            key="mobile-form"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            onSubmit={handleSendOTP}
                            className="space-y-6"
                        >
                            <div className="relative group">
                                <label className="block text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 ml-1">Mobile Number</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">+91</span>
                                    <input
                                        type="tel"
                                        maxLength={10}
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-blue-500 focus:ring-0 outline-none transition-all font-mono text-lg text-gray-800 shadow-sm group-hover:border-blue-200"
                                        placeholder="98765 43210"
                                        required
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading || mobile.length < 10}
                                className="w-full py-4 bg-[#1e3a8a] hover:bg-blue-900 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isLoading ? <Loader2 className="animate-spin" /> : <>Send OTP <ArrowRight size={20} /></>}
                            </button>

                            <div className="text-center">
                                <button
                                    type="button"
                                    onClick={() => setMode(mode === 'LOGIN' ? 'REGISTER' : 'LOGIN')}
                                    className="text-sm font-semibold text-gray-500 hover:text-blue-600 transition-colors"
                                >
                                    {mode === 'LOGIN' ? "Don't have an account? Register" : "Already have an account? Login"}
                                </button>
                            </div>
                        </motion.form>
                    ) : (
                        <motion.form
                            key="otp-form"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            onSubmit={handleVerifyOTP}
                            className="space-y-8"
                        >
                            <div className="flex justify-between gap-2">
                                {otp.map((digit, idx) => (
                                    <input
                                        key={idx}
                                        id={`otp-${idx}`}
                                        type="text"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) => handleOtpChange(idx, e.target.value)}
                                        onKeyDown={(e) => handleKeyDown(idx, e)}
                                        className="w-12 h-14 text-center text-2xl font-bold bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-blue-500 focus:ring-0 outline-none transition-all shadow-sm"
                                    />
                                ))}
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading || otp.join('').length < 6}
                                className="w-full py-4 bg-[#1e3a8a] hover:bg-blue-900 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isLoading ? <Loader2 className="animate-spin" /> : "Verify & Continue"}
                            </button>

                            <div className="text-center flex justify-between items-center text-sm px-2">
                                <button
                                    type="button"
                                    onClick={() => setStep('MOBILE')}
                                    className="text-gray-500 hover:text-gray-800 font-medium"
                                >
                                    Change Number
                                </button>

                                {canResend ? (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setTimer(30);
                                            setCanResend(false);
                                            // Trigger resend logic
                                        }}
                                        className="text-blue-600 font-bold hover:underline"
                                    >
                                        Resend Code
                                    </button>
                                ) : (
                                    <span className="text-gray-400 font-mono">Resend in 00:{timer < 10 ? `0${timer}` : timer}</span>
                                )}
                            </div>
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
