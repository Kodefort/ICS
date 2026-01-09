import React from 'react';

const sections = [
    { id: 'industry-partners', title: 'Industry Partners' },
    { id: 'gov-partners', title: 'Government & Public Sector Partners' },
    { id: 'academic-partners', title: 'Academic & Research Partners' },
    { id: 'engagement', title: 'Community Engagement' },
    { id: 'student-partners', title: 'Student & Alumni Partnerships' },
    { id: 'international', title: 'International Partnerships' },
    { id: 'innovation', title: 'Innovation & Entrepreneurship Ecosystem' },
    { id: 'mous', title: 'Memorandums of Understanding (MoUs)' },
    { id: 'corporate-training', title: 'Corporate Training & Workforce Development' },
    { id: 'social-impact', title: 'Social Impact & Sustainability Partners' },
];

export default function CommunityPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-[#0B2C5D] mb-8">Our Community and Partners</h1>
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
