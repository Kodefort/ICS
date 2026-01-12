"use client";

import { useState, useEffect, useCallback } from 'react';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  bgColor: string;
}

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      image: '/slides/slide1.jpg',
      title: 'Updated Admission Criteria',
      subtitle: 'Updated admission criteria and exam alternatives now available on the admissions page',
      bgColor: 'from-cyan-200 via-blue-200 to-blue-300'
    },
    {
      id: 2,
      image: '/slides/slide2.jpg',
      title: 'Academic Calendar 2025-2026',
      subtitle: 'Plan Your Learning Journey with Us',
      bgColor: 'from-purple-200 via-pink-200 to-rose-300'
    },
    {
      id: 3,
      image: '/slides/slide3.jpg',
      title: 'Excellence in Education',
      subtitle: 'Empowering Future Leaders',
      bgColor: 'from-green-200 via-teal-200 to-cyan-300'
    },
    {
      id: 4,
      image: '/slides/slide4.jpg',
      title: 'Innovation & Technology',
      subtitle: 'Building Tomorrow Today',
      bgColor: 'from-orange-200 via-amber-200 to-yellow-300'
    },
    {
      id: 5,
      image: '/slides/slide5.jpg',
      title: 'Student Success Stories',
      subtitle: 'Inspiring Achievements Every Day',
      bgColor: 'from-indigo-200 via-purple-200 to-pink-300'
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="w-full bg-white py-4 sm:py-6 md:py-8 lg:py-12">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-0 xl:px-16 max-w-7xl mx-auto">
        
        {/* Slideshow Container */}
        <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl">
          
          {/* Slides */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] lg:aspect-[21/8]">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* Background Gradient */}
                <div className={`relative w-full h-full bg-gradient-to-r ${slide.bgColor}`}>
                  
                  {/* Decorative Pattern Overlay */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 20px,
                        rgba(255, 255, 255, 0.1) 20px,
                        rgba(255, 255, 255, 0.1) 40px
                      )`
                    }}></div>
                  </div>

                  {/* Decorative Circles - Hidden on mobile for cleaner look */}
                  <div className="hidden sm:block absolute top-10 right-20 w-32 h-32 md:w-40 md:h-40 bg-white/20 rounded-full blur-3xl"></div>
                  <div className="hidden sm:block absolute bottom-20 left-10 w-40 h-40 md:w-56 md:h-56 bg-white/15 rounded-full blur-3xl"></div>
                  <div className="hidden md:block absolute top-1/2 left-1/3 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

                  {/* Content Container */}
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                      <div className="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
                        
                        {/* Title - Responsive Text Sizes */}
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0B2C5D] mb-2 sm:mb-3 md:mb-4 lg:mb-6 drop-shadow-lg leading-tight">
                          {slide.title}
                        </h2>
                        
                        {/* Subtitle - Responsive Text Sizes */}
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 font-medium leading-relaxed drop-shadow-md mb-3 sm:mb-4 md:mb-6">
                          {slide.subtitle}
                        </p>

                        {/* CTA Button - Responsive */}
                        <div className="mt-3 sm:mt-4 md:mt-6">
                          <button className="bg-[#0B2C5D] text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-md sm:rounded-lg text-xs sm:text-sm md:text-base lg:text-lg font-bold font-mono hover:bg-[#0a2347] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Gradient Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicators - Responsive Sizing and Positioning */}
          <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 md:gap-3 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-500 rounded-full ${
                  index === currentSlide
                    ? 'bg-[#0B2C5D] w-6 sm:w-8 md:w-10 lg:w-12 h-2 sm:h-2.5 md:h-3'
                    : 'bg-white/60 hover:bg-white/80 w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}