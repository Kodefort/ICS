import React from 'react';

const sections = [
    { id: 'get-in-touch', title: 'Get in Touch' },
    { id: 'admissions', title: 'Admissions Enquiry' },
    { id: 'visit', title: 'Visit Campus' },
    { id: 'support', title: 'Support & Helpdesk' },
    { id: 'faqs', title: 'FAQs' },
    { id: 'feedback', title: 'Feedback' },
];

export default function ContactPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-[#0B2C5D] mb-8">Contact Us</h1>
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
