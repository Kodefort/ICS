
export default function CommunityPage() {
    const sections = [
        { id: 'parents', title: 'Information for Parents' },
        { id: 'employees', title: 'Employees' },
        { id: 'graduates', title: 'Graduates' },
        { id: 'students', title: 'Current Students' },
        { id: 'new-students', title: 'New Students' },
        { id: 'business', title: 'Business and Industry Sectors' },
        { id: 'suppliers', title: 'Suppliers' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-[#0B2C5D] mb-8">Our Community</h1>
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
