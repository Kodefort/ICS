import HeroSlideshow from "../components/HeroSlideshow";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Slideshow Section - Full Width */}
      <HeroSlideshow />

      {/* Welcome Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-[#0B2C5D] mb-4">
              Welcome to Infinite Code School
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Empowering the next generation of developers with cutting-edge education and real-world experience. Join us on a journey to excellence.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
            
            {/* Card 1 */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-100 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-mono text-[#0B2C5D] mb-3">
                Innovative Learning
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Experience cutting-edge curriculum designed for the modern tech industry with hands-on projects and real-world applications.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-gradient-to-br from-purple-50 to-pink-100 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-purple-100">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-mono text-[#0B2C5D] mb-3">
                Expert Mentors
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Learn from industry professionals with years of real-world experience who are passionate about your success.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-gradient-to-br from-green-50 to-teal-100 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-green-100">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-mono text-[#0B2C5D] mb-3">
                Career Support
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Get comprehensive job placement assistance and build a portfolio that stands out to employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-[#0B2C5D] to-[#2B7CFF]">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-white mb-2 font-mono">
                5000+
              </div>
              <div className="text-sm md:text-base text-blue-100">
                Students Enrolled
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-white mb-2 font-mono">
                95%
              </div>
              <div className="text-sm md:text-base text-blue-100">
                Job Placement Rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-white mb-2 font-mono">
                50+
              </div>
              <div className="text-sm md:text-base text-blue-100">
                Expert Instructors
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-white mb-2 font-mono">
                100+
              </div>
              <div className="text-sm md:text-base text-blue-100">
                Industry Partners
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-[#0B2C5D] mb-4">
              Our Programs
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our wide range of cutting-edge programs designed to launch your tech career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: 'Web Development', icon: '🌐', color: 'from-blue-500 to-cyan-500' },
              { title: 'Mobile App Development', icon: '📱', color: 'from-purple-500 to-pink-500' },
              { title: 'Data Science', icon: '📊', color: 'from-green-500 to-teal-500' },
              { title: 'AI & Machine Learning', icon: '🤖', color: 'from-orange-500 to-red-500' },
              { title: 'Cybersecurity', icon: '🔒', color: 'from-indigo-500 to-purple-500' },
              { title: 'Cloud Computing', icon: '☁️', color: 'from-cyan-500 to-blue-500' }
            ].map((program, index) => (
              <div
                key={index}
                className="group bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 cursor-pointer"
              >
                <div className={`text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {program.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold font-mono text-[#0B2C5D] mb-2">
                  {program.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">
                  Master the skills needed for a successful career in {program.title.toLowerCase()}.
                </p>
                <div className={`inline-block bg-gradient-to-r ${program.color} text-white px-4 py-2 rounded-lg text-sm font-semibold group-hover:shadow-lg transition-all duration-300`}>
                  Learn More →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-r from-[#0B2C5D] via-[#1a4380] to-[#2B7CFF]">
        <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of students who have transformed their careers with us. Your future in tech starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <button className="bg-white text-[#0B2C5D] px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold font-mono text-base md:text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
              Enroll Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold font-mono text-base md:text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 shadow-xl">
              View Programs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}