
export default function LibrariesPage() {
    const sections = [
        { id: 'about', title: 'About ICS Libraries' },
        { id: 'databases', title: 'Databases' },
        { id: 'borrowing', title: 'Interlibrary Borrowing' },
        { id: 'hours', title: 'Working Hours and Staff Directory' },
        { id: 'request', title: 'Request an Article' },
        { id: 'account', title: 'My Account' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-[#0B2C5D] mb-8">Libraries</h1>
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
