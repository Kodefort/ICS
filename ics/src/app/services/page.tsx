import React from 'react';

const sections = [
    { id: 'index', title: 'Services Index' },
    { id: 'priority', title: 'Priority Services' },
    { id: 'academic', title: 'Academic Services' },
    { id: 'student', title: 'Student Services' },
    { id: 'library', title: 'Library Services' },
    { id: 'career', title: 'Career Development and Professional Services' },
];

export default function ServicesPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-[#0B2C5D] mb-8">Services</h1>
            <div className="space-y-16">
                {sections.map((section) => (
                    <section key={section.id} id={section.id} className="scroll-mt-24 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-blue-600 mb-4">{section.title}</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Information regarding {section.title} will be available here. This section is linked via hash routing.
                        </p>
                    </section>
                ))}
            </div>
        </div>
    );
}
