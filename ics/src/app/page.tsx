import HeroSlideshow from "../components/HeroSlideshow";
import { Globe, Smartphone, BarChart, Brain, Shield, Cloud, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Slideshow Section */}
      <HeroSlideshow />

      {/* Welcome Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B2C5D] mb-4 sm:mb-6 px-4 tracking-tight">
              Welcome to Infinite Code School
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Empowering the next generation of developers with cutting-edge education and real-world experience. Join us on a journey to excellence.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12">

            {/* Card 1 */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-100 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-mono text-[#0B2C5D] mb-2 sm:mb-3">
                Innovative Learning
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                Experience cutting-edge curriculum designed for the modern tech industry with hands-on projects and real-world applications.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-gradient-to-br from-purple-50 to-pink-100 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-purple-100">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-mono text-[#0B2C5D] mb-2 sm:mb-3">
                Expert Mentors
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                Learn from industry professionals with years of real-world experience who are passionate about your success.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-gradient-to-br from-green-50 to-teal-100 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-green-100 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-mono text-[#0B2C5D] mb-2 sm:mb-3">
                Career Support
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                Get comprehensive job placement assistance and build a portfolio that stands out to employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-r from-[#0B2C5D] to-[#2B7CFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2 font-sans">
                5000+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-blue-100">
                Students Enrolled
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2 font-sans">
                95%
              </div>
              <div className="text-xs sm:text-sm md:text-base text-blue-100">
                Job Placement Rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2 font-sans">
                50+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-blue-100">
                Expert Instructors
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2 font-sans">
                100+
              </div>
              <div className="text-xs sm:text-sm md:text-base text-blue-100">
                Industry Partners
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-sans text-[#0B2C5D] mb-3 sm:mb-4 px-4">
              Our Programs
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Choose from our wide range of cutting-edge programs designed to launch your tech career
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { title: 'Web Development', icon: Globe, color: 'from-blue-500 to-cyan-500' },
              { title: 'Mobile App Development', icon: Smartphone, color: 'from-purple-500 to-pink-500' },
              { title: 'Data Science', icon: BarChart, color: 'from-green-500 to-teal-500' },
              { title: 'AI & Machine Learning', icon: Brain, color: 'from-orange-500 to-red-500' },
              { title: 'Cybersecurity', icon: Shield, color: 'from-indigo-500 to-purple-500' },
              { title: 'Cloud Computing', icon: Cloud, color: 'from-cyan-500 to-blue-500' }
            ].map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  className="group glass p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-50/50 cursor-pointer relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${program.color} opacity-10 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150`}></div>
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br ${program.color} p-0.5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-gray-800" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0B2C5D] mb-2 font-sans">
                    {program.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    Master the skills needed for a successful career in {program.title.toLowerCase()}.
                  </p>
                  <div className={`inline-flex items-center gap-2 text-[#0B2C5D] text-sm font-bold group-hover:gap-3 transition-all`}>
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-[#0B2C5D] via-[#1a4380] to-[#2B7CFF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-sans text-white mb-4 sm:mb-5 md:mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of students who have transformed their careers with us. Your future in tech starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center px-4">
            <button className="bg-white text-[#0B2C5D] px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-lg sm:rounded-xl font-bold font-sans text-sm sm:text-base md:text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
              Enroll Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-lg sm:rounded-xl font-bold font-sans text-sm sm:text-base md:text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 shadow-xl">
              View Programs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}