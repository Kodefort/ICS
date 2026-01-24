"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Send, ArrowLeft, Save } from "lucide-react";

const HOBBY_OPTIONS = [
    "Reading",
    "Writing / Blogging",
    "Drawing / Painting",
    "Singing",
    "Dancing",
    "Playing Musical Instrument",
    "Photography",
    "Coding / Programming",
    "Robotics",
    "Chess",
    "Gaming / Esports",
    "Football",
    "Cricket",
    "Basketball",
    "Swimming",
    "Athletics",
    "Badminton",
    "Table Tennis",
    "Cooking / Baking",
    "Gardening",
    "Traveling",
    "Volunteering",
    "Debating / Public Speaking",
    "Other"
];

interface AdmissionFormProps {
    onCancel: () => void;
    onSuccess?: () => void; // Keeping for backward compat if needed, but we prefer onSuccessWithData
    onSuccessWithData?: (data: any) => void;
    onSave: (data: any) => void;
    initialData?: any;
    readOnly?: boolean;
}

export default function AdmissionForm({ onCancel, onSuccess, onSuccessWithData, onSave, initialData, readOnly = false }: AdmissionFormProps) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [previewUrl, setPreviewUrl] = useState<string | null>(initialData?.studentPhotoUrl || null);

    const [formData, setFormData] = useState({
        // Student Info
        studentName: "",
        fatherName: "",
        motherName: "",
        address: "",
        city: "",
        pinCode: "",
        district: "",
        state: "",
        country: "India",
        landmark: "",
        contactNumber: "",
        aadhaarNumber: "",
        nationality: "",
        bloodGroup: "",
        studentPhoto: null as File | null,
        signature: null as File | null,
        previousSchool: "",
        achievements: "",
        religion: "",
        caste: "",

        // Parent Info
        fatherAadhaar: "",
        motherAadhaar: "",

        // Personal Details
        hobby: "",
        dob: "",
        ...initialData
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        if (readOnly) return;

        const { name, value, type } = e.target;

        if (type === 'file') {
            const fileInput = e.target as HTMLInputElement;
            const file = fileInput.files ? fileInput.files[0] : null;
            setFormData((prev: any) => ({ ...prev, [name]: file }));

            if (name === "studentPhoto" && file) {
                const url = URL.createObjectURL(file);
                setPreviewUrl(url);
            }
        } else {
            setFormData((prev: any) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (readOnly) return;

        try {
            // Convert files to base64
            const fileToBase64 = (file: File): Promise<string> => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => resolve(reader.result as string);
                    reader.onerror = error => reject(error);
                });
            };

            let photoBase64 = null;
            let signatureBase64 = null;

            if (formData.studentPhoto instanceof File) {
                photoBase64 = await fileToBase64(formData.studentPhoto);
            }
            if (!photoBase64 && formData.studentPhotoUrl) {
                photoBase64 = formData.studentPhotoUrl;
            }

            if (formData.signature instanceof File) {
                signatureBase64 = await fileToBase64(formData.signature);
            }
            if (!signatureBase64 && formData.signatureUrl) {
                signatureBase64 = formData.signatureUrl;
            }

            const payload = {
                ...formData,
                studentPhotoUrl: photoBase64,
                signatureUrl: signatureBase64,
            };

            // Remove raw file objects from payload to avoid serialization issues (though standard JSON.stringify ignores them usually, explicit is better/cleaner)
            // Actually spread copies them. JSON.stringify ignores functions/Symbol/undefined, but File objects become empty objects {}.
            // It's fine as we send studentPhotoUrl primarily.

            const response = await fetch('/api/admissions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                console.log("Form Submitted:", payload);
                setIsSubmitted(true);
                // We don't call onSuccess here immediately, we wait for user to click "Go to Dashboard"
                // But we should update the parent state potentially? 
                // Let's store payload in a ref or state if needed, but effectively we just need it when "Go to Dashboard" is clicked.
                // Or we can just call the data callback now and let the UI show success screen?
                // The Success Screen is internal to this component. 
                // So we do nothing else here.

                // Store payload for the final callback
                (window as any).__lastSubmissionPayload = payload;
            } else {
                console.error("Submission failed");
                alert("Submission failed. Please try again.");
            }

        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred.");
        }
    };

    const handleSuccessClick = () => {
        const payload = (window as any).__lastSubmissionPayload || formData;
        if (onSuccessWithData) {
            onSuccessWithData(payload);
        } else if (onSuccess) {
            onSuccess();
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gray-200 font-sans text-black relative overflow-hidden flex items-center justify-center">
                {/* Top White "Sky" Decoration (Negative space for the hill) */}
                <div className="absolute top-0 left-0 w-full z-0 leading-none">
                    <svg className="w-full h-[150px] sm:h-[250px] lg:h-[350px]" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="#ffffff" fillOpacity="1" d="M0,0 L1440,0 L1440,160 C1300,160 1150,50 1000,50 C800,50 700,150 500,140 C300,130 100,280 0,280 L0,0Z"></path>
                        <path fill="none" stroke="#1e3a8a" strokeWidth="4" d="M1440,160 C1300,160 1150,50 1000,50 C800,50 700,150 500,140 C300,130 100,280 0,280"></path>
                    </svg>
                </div>

                <div className="max-w-3xl mx-auto relative z-10 px-4 text-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "backOut" }}
                        className="bg-white/80 backdrop-blur-sm p-12 rounded-3xl border-2 border-dashed border-[#1e3a8a] shadow-xl"
                    >
                        <div className="flex justify-center mb-6">
                            <div className="h-24 w-24 bg-[#1e3a8a] rounded-full flex items-center justify-center">
                                <Send className="text-white w-12 h-12" />
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-wide text-[#1e3a8a] mb-6">
                            Application Submitted!
                        </h2>
                        <p className="text-xl text-gray-800 mb-8">
                            Thank you, <span className="font-bold">{formData.studentName}</span>. Your admission application has been received successfully.
                        </p>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={handleSuccessClick}
                                className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-[#1e3a8a] rounded-full hover:bg-blue-900 transition-colors"
                            >
                                Go to Dashboard
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-200 font-sans text-black relative overflow-hidden">

            {/* Top White "Sky" Decoration (Negative space for the hill) */}
            <div className="absolute top-0 left-0 w-full z-0 leading-none">
                <svg className="w-full h-[150px] sm:h-[250px] lg:h-[350px]" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="#ffffff" fillOpacity="1" d="M0,0 L1440,0 L1440,160 C1300,160 1150,50 1000,50 C800,50 700,150 500,140 C300,130 100,280 0,280 L0,0Z"></path>
                    <path fill="none" stroke="#1e3a8a" strokeWidth="4" d="M1440,160 C1300,160 1150,50 1000,50 C800,50 700,150 500,140 C300,130 100,280 0,280"></path>
                </svg>
            </div>

            <div className="max-w-4xl mx-auto relative z-10 pt-[120px] sm:pt-[150px] lg:pt-[180px] pb-20 px-4 sm:px-6 lg:px-8">

                {/* Navigation Controls */}
                <div className="absolute top-[100px] left-4 md:left-8 z-50">
                    <button onClick={onCancel} className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all text-[#1e3a8a] font-bold">
                        <ArrowLeft size={18} /> Back to Dashboard
                    </button>
                </div>

                {/* Photo Preview Frame */}
                {previewUrl && (
                    <div className="absolute top-[160px] right-4 sm:right-8 md:right-0 w-32 h-40 bg-white border-4 border-gray-800 shadow-xl transform rotate-3 z-20 hidden sm:block">
                        <div className="w-full h-full relative overflow-hidden">
                            <Image
                                src={previewUrl}
                                alt="Student Preview"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full text-center">
                            <span className="text-xs font-bold font-mono bg-yellow-200 px-2 py-1 transform -rotate-3 inline-block shadow-sm border border-black">
                                STUDENT
                            </span>
                        </div>
                    </div>
                )}

                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-center space-y-4 mb-16"
                >
                    <div className="flex justify-center mb-6">
                        <Image
                            src="/logo_code.jpg"
                            alt="ICS Logo"
                            width={120}
                            height={120}
                            className="h-24 w-auto rounded-full shadow-lg"
                        />
                    </div>
                    <div className="inline-block relative">
                        <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-wide text-black relative z-10 transition-all duration-300 hover:tracking-[0.1em]">
                            Admission Form
                        </h1>
                        {/* Navy Blue Sketchy Underline */}
                        <svg className="absolute -bottom-4 left-0 w-full h-6 text-[#1e3a8a] -z-0" viewBox="0 0 200 9" fill="none" preserveAspectRatio="none">
                            <path d="M2.00025 6.99999C44.7571 3.51868 126.912 -1.70588 198.003 3.49997" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                    </div>

                    <p className="text-lg text-gray-800 max-w-2xl mx-auto mt-4">
                        Please fill out the details below to complete your admission application.
                    </p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-16 relative">

                    {/* STATIC FULL-HEIGHT DECORATION CONTAINER */}
                    <div className="hidden xl:block absolute -left-52 top-[-100px] bottom-[-100px] w-48 z-20 pointer-events-none overflow-hidden">

                        {/* 1. The Long Static Rope covering full form height */}
                        <svg className="absolute top-0 left-0 w-full h-full" preserveAspectRatio="none">
                            <pattern id="ropePattern" x="0" y="0" width="200" height="400" patternUnits="userSpaceOnUse">
                                <path
                                    d="M100,0 Q115,25 100,50 T100,100 T100,150 T100,200 T100,250 T100,300 T100,350 T100,400"
                                    stroke="black"
                                    fill="none"
                                    strokeWidth="3"
                                    strokeDasharray="6 6"
                                    strokeLinecap="round"
                                    opacity="0.8"
                                    className="animate-rope-flow"
                                />
                            </pattern>
                            <rect x="0" y="0" width="100%" height="100%" fill="url(#ropePattern)" />
                        </svg>

                        {/* 2. Paper Airplanes (Animated) */}
                        {/* Plane 1: Wide loop */}
                        <motion.div
                            className="absolute top-[10%] left-10"
                            animate={{
                                x: [0, 60, 0, -60, 0],
                                y: [0, -40, 0, 40, 0],
                                rotate: [12, 25, 12, -5, 12],
                            }}
                            transition={{
                                duration: 12,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            <PaperAirplane className="w-12 h-12 text-black/60" />
                        </motion.div>

                        {/* Plane 2: Bobbing and Swaying */}
                        <motion.div
                            className="absolute top-[40%] right-10"
                            animate={{
                                y: [0, -20, 0, 20, 0],
                                x: [0, 10, 0, -10, 0],
                                rotate: [-12, -20, -12, -5, -12]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <PaperAirplane className="w-10 h-10 text-black/40" />
                        </motion.div>

                        {/* Plane 3: Diagonal Flight / Rotation */}
                        <motion.div
                            className="absolute top-[70%] left-4"
                            animate={{
                                x: [0, 30, 0],
                                y: [0, -30, 0],
                                rotate: [45, 90, 45, 0, 45]
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <PaperAirplane className="w-14 h-14 text-black/50" />
                        </motion.div>
                    </div>

                    {/* 3. Sticky Climber (Separate container so it stays in view) */}
                    <div className="hidden xl:block absolute -left-52 top-0 h-full w-48 z-30 pointer-events-none">
                        <div className="sticky top-1/3">
                            <svg className="w-full h-[300px] overflow-visible" viewBox="0 0 200 300">
                                {/* Proper Cartoon Climber Figure */}
                                <g transform="translate(50, 80) scale(1.2)">
                                    {/* Sketchy Graduation Cap */}
                                    <motion.g
                                        transform="rotate(-5)"
                                        animate={{ y: [0, -15, 0] }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 4,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <path d="M5,20 L40,5 L75,20 L40,35 Z" fill="white" stroke="#1e3a8a" strokeWidth="2" strokeLinejoin="round" />
                                        <path d="M40,35 L40,38" stroke="#1e3a8a" strokeWidth="1" />
                                        <path d="M15,25 L15,40 Q40,55 65,40 L65,25" fill="none" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" />
                                        {/* Tassel */}
                                        <path d="M75,20 L75,45" stroke="black" strokeWidth="1.5" />
                                        <circle cx="75" cy="48" r="3" fill="#1e3a8a" />
                                    </motion.g>
                                </g>
                            </svg>
                        </div>
                    </div>

                    {/* Section 1: Student Information */}
                    <section className="space-y-8">
                        <SectionHeader title="1. Student Information" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
                            <SketchyInput label="Name" name="studentName" required value={formData.studentName} onChange={handleChange} disabled={readOnly} />
                            <SketchyInput label="Father's Name" name="fatherName" required value={formData.fatherName} onChange={handleChange} disabled={readOnly} />
                            <SketchyInput label="Mother's Name" name="motherName" required value={formData.motherName} onChange={handleChange} disabled={readOnly} />

                            <SketchyInput label="Address" name="address" fullWidth className="lg:col-span-3" value={formData.address} onChange={handleChange} disabled={readOnly} />

                            <SketchyInput label="City / Town" name="city" required value={formData.city} onChange={handleChange} disabled={readOnly} />
                            <SketchyInput label="Pin Code" name="pinCode" type="number" required value={formData.pinCode} onChange={handleChange} disabled={readOnly} />
                            <SketchyInput label="District" name="district" required value={formData.district} onChange={handleChange} disabled={readOnly} />

                            <SketchyInput label="State" name="state" required value={formData.state} onChange={handleChange} disabled={readOnly} />
                            <SketchyInput label="Country" name="country" disabled={true} value={formData.country} onChange={handleChange} />
                            <SketchyInput label="Nearest Landmark" name="landmark" value={formData.landmark} onChange={handleChange} disabled={readOnly} />

                            <SketchyInput label="Contact Number" name="contactNumber" type="tel" required value={formData.contactNumber} onChange={handleChange} disabled={readOnly} />
                            <SketchyInput label="Aadhaar Number" name="aadhaarNumber" required value={formData.aadhaarNumber} onChange={handleChange} disabled={readOnly} />
                            <SketchyInput label="Nationality" name="nationality" required value={formData.nationality} onChange={handleChange} disabled={readOnly} />

                            <SketchySelect label="Blood Group" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}
                                options={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]}
                                disabled={readOnly}
                            />
                            <SketchyInput label="Religion" name="religion" value={formData.religion} onChange={handleChange} disabled={readOnly} />
                            <SketchyInput label="Caste" name="caste" value={formData.caste} onChange={handleChange} disabled={readOnly} />

                            <SketchyFileInput label="Student Photo" name="studentPhoto" required={!readOnly} onChange={handleChange} accept="image/*" disabled={readOnly} />
                            <SketchyFileInput label="Signature" name="signature" onChange={handleChange} accept="image/*" disabled={readOnly} />

                            <SketchyInput label="Previous School & Address" name="previousSchool" fullWidth className="lg:col-span-3" value={formData.previousSchool} onChange={handleChange} disabled={readOnly} />
                            <SketchyInput label="Achievements" name="achievements" fullWidth className="lg:col-span-3" value={formData.achievements} onChange={handleChange} disabled={readOnly} />
                        </div>
                    </section>

                    {/* Section 2: Parent / Guardian Information */}
                    <section className="space-y-8">
                        <SectionHeader title="2. Parent / Guardian Information" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                            <SketchyInput label="Father's Aadhaar Number" name="fatherAadhaar" required value={formData.fatherAadhaar} onChange={handleChange} disabled={readOnly} />
                            <SketchyInput label="Mother's Aadhaar Number" name="motherAadhaar" required value={formData.motherAadhaar} onChange={handleChange} disabled={readOnly} />
                        </div>
                    </section>

                    {/* Section 3: Personal Details */}
                    <section className="space-y-8">
                        <SectionHeader title="3. Personal Details" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                            <SketchySelect label="Hobby" name="hobby" options={HOBBY_OPTIONS} value={formData.hobby} onChange={handleChange} disabled={readOnly} />
                            <SketchyInput label="Date of Birth" name="dob" type="date" required value={formData.dob} onChange={handleChange} disabled={readOnly} />
                        </div>
                    </section>

                    {/* Section 4: Privacy & Policy */}
                    <section className="space-y-6">
                        <SectionHeader title="4. Privacy & Policy Statement" />
                        <div className="relative p-8 border-2 border-dashed border-black/30 rounded-3xl bg-black/5">
                            <p className="text-lg leading-relaxed text-gray-800">
                                We keep data encrypted and protected. We do not sell data or use it for any other purpose other than maintaining records for the well-being and running of the institution.
                            </p>
                            <div className="mt-6 flex items-center space-x-3">
                                <input type="checkbox" id="agree" required className="w-6 h-6 text-[#1e3a8a] rounded border-gray-300 focus:ring-[#1e3a8a]" />
                                <label htmlFor="agree" className="text-base font-medium text-black cursor-pointer select-none">
                                    I agree to the privacy policy. *
                                </label>
                            </div>
                        </div>
                    </section>


                    {/* Submit Button - Hidden in Read Only Mode */}
                    {!readOnly && (
                        <div className="flex justify-center pt-8 pb-12 gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="button"
                                onClick={() => onSave(formData)}
                                className="group relative inline-flex items-center justify-center px-8 py-5 text-xl font-bold text-[#1e3a8a] transition-all duration-200"
                            >
                                <span className="relative flex items-center gap-3 tracking-wider">
                                    <Save size={20} /> SAVE AS DRAFT
                                </span>
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="group relative inline-flex items-center justify-center px-16 py-5 text-xl font-bold text-white transition-all duration-200"
                            >
                                <div className="absolute inset-0 border-2 border-[#1e3a8a] bg-[#1e3a8a] rounded-full transform rotate-1 group-hover:rotate-2 transition-transform h-full w-full"></div>
                                <div className="absolute inset-0 border-2 border-black bg-transparent rounded-full transform -rotate-1 group-hover:-rotate-2 transition-transform h-full w-full"></div>
                                <span className="relative flex items-center gap-3 tracking-wider">
                                    SUBMIT APPLICATION <Send size={20} />
                                </span>
                            </motion.button>
                        </div>
                    )}

                </form>
            </div>
        </div>
    );
}

// Reusable Components

const PaperAirplane = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M22 2L11 13" />
        <path d="M22 2L15 22L11 13L2 9L22 2Z" />
    </svg>
);

const SectionHeader = ({ title }: { title: string }) => (
    <div className="border-b-2 border-black/20 pb-2 mb-6">
        <h2 className="text-2xl font-bold text-[#1e3a8a] uppercase tracking-wider">{title}</h2>
    </div>
);

// Custom "Sketchy" Input Component
const SketchyInput = ({
    label,
    name,
    value,
    onChange,
    type = "text",
    required = false,
    className = "",
    placeholder = "",
    disabled = false,
    fullWidth = false
}: {
    label: string,
    name: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    type?: string,
    required?: boolean,
    className?: string,
    placeholder?: string,
    disabled?: boolean,
    fullWidth?: boolean
}) => {
    // Randomize border radius mostly fixed to avoid mismatch, but irregular
    const borderRadius = "255px 15px 225px 15px / 15px 225px 15px 255px";

    return (
        <div className={`space-y-2 ${className}`}>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1e3a8a] pl-2">
                {label} {required && "*"}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                disabled={disabled}
                placeholder={placeholder}
                className={`w-full bg-transparent border-2 border-black text-black px-6 py-3 focus:outline-none focus:border-[#1e3a8a] transition-colors placeholder-gray-600 disabled:opacity-50 disabled:cursor-not-allowed`}
                style={{
                    borderRadius: borderRadius,
                }}
            />
        </div>
    );
};

// Custom "Sketchy" Select Component
const SketchySelect = ({
    label,
    name,
    value,
    onChange,
    options,
    required = false,
    className = "",
    fullWidth = false,
    disabled = false
}: {
    label: string,
    name: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    options: string[],
    required?: boolean,
    className?: string,
    fullWidth?: boolean,
    disabled?: boolean
}) => {
    const borderRadius = "255px 15px 225px 15px / 15px 225px 15px 255px";

    return (
        <div className={`space-y-2 ${className}`}>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1e3a8a] pl-2">
                {label} {required && "*"}
            </label>
            <div className="relative">
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    disabled={disabled}
                    className={`w-full bg-transparent border-2 border-black text-black px-6 py-3 pr-10 focus:outline-none focus:border-[#1e3a8a] transition-colors appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
                    style={{
                        borderRadius: borderRadius,
                    }}
                >
                    <option value="">Select...</option>
                    {options.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-black">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

// Custom "Sketchy" File Input Component
const SketchyFileInput = ({
    label,
    name,
    onChange,
    required = false,
    className = "",
    accept = "",
    disabled = false
}: {
    label: string,
    name: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    required?: boolean,
    className?: string,
    accept?: string,
    disabled?: boolean
}) => {
    const borderRadius = "255px 15px 225px 15px / 15px 225px 15px 255px";

    return (
        <div className={`space-y-2 ${className}`}>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#1e3a8a] pl-2">
                {label} {required && "*"}
            </label>
            <input
                type="file"
                name={name}
                onChange={onChange}
                required={required}
                accept={accept}
                disabled={disabled}
                className={`w-full bg-transparent border-2 border-black text-black px-6 py-3 focus:outline-none focus:border-[#1e3a8a] transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#1e3a8a] file:text-white hover:file:bg-blue-900 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
                style={{
                    borderRadius: borderRadius,
                }}
            />
        </div>
    );
};
