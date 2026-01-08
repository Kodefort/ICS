import React from 'react';

const sections = [
    { id: 'story', title: 'Our Story' },
    { id: 'mission-vision', title: 'Mission & Vision' },
    { id: 'leadership', title: 'Leadership Team' },
    { id: 'faculty', title: 'Faculty & Mentors' },
    { id: 'infrastructure', title: 'Infrastructure' },
    { id: 'partnerships', title: 'Partnerships' },
];

export default function AboutPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-[#0B2C5D] mb-8">About Us</h1>
            <div className="space-y-16">
                {sections.map((section) => (
                    <section key={section.id} id={section.id} className="scroll-mt-24 p-6 bg-white rounded-lg shadow-md border border-gray-100">
                        <h2 className="text-2xl font-bold text-blue-600 mb-4">{section.title}</h2>
                        <p className="text-gray-600">
                            Content for {section.title} goes here. This section is linked via hash routing.
                        </p>
                    </section>
                ))}
            </div>
        </div>
    );
}
