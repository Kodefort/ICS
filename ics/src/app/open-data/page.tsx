
export default function OpenDataPage() {
    const sections = [
        { id: 'portal', title: 'Open Data Portal' },
        { id: 'geographic', title: 'Geographic Data' },
        { id: 'policy', title: 'Open Data Policy' },
        { id: 'request', title: 'Data Proposal / Request' },
        { id: 'standards', title: 'Data Standards & Formats' },
        { id: 'quality', title: 'Data Quality & Governance' },
        { id: 'terms', title: 'Usage Terms & Licensing' },
        { id: 'national', title: 'National Open Data Integration' },
        { id: 'feedback', title: 'Feedback & Improvement' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-[#0B2C5D] mb-8">Open Data</h1>
            <div className="space-y-16">
                {sections.map((section) => (
                    <section key={section.id} id={section.id} className="scroll-mt-24 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-blue-600 mb-4">{section.title}</h2>
                        <p className="text-slate-600 leading-relaxed">
                            Information regarding {section.title} will be available here. This section is accessible via direct hash link.
                        </p>
                    </section>
                ))}
            </div>
        </div>
    );
}
