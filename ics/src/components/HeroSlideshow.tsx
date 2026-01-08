"use client";

import { useState, useEffect, useCallback } from "react";

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
      image: "/slides/slide1.jpg",
      title: "Updated Admission Criteria",
      subtitle:
        "The latest admission criteria and exam alternatives are now available on the admissions page.",
      bgColor: "from-cyan-200 via-blue-200 to-blue-300",
    },
    {
      id: 2,
      image: "/slides/slide2.jpg",
      title: "Academic Calendar 2025–2026",
      subtitle: "Plan your learning journey with us.",
      bgColor: "from-purple-200 via-pink-200 to-rose-300",
    },
    {
      id: 3,
      image: "/slides/slide3.jpg",
      title: "Excellence in Education",
      subtitle: "Empowering future leaders through quality education.",
      bgColor: "from-green-200 via-teal-200 to-cyan-300",
    },
    {
      id: 4,
      image: "/slides/slide4.jpg",
      title: "Innovation & Technology",
      subtitle: "Building tomorrow with cutting-edge innovation.",
      bgColor: "from-orange-200 via-amber-200 to-yellow-300",
    },
    {
      id: 5,
      image: "/slides/slide5.jpg",
      title: "Student Success Stories",
      subtitle: "Celebrating inspiring achievements every day.",
      bgColor: "from-indigo-200 via-purple-200 to-pink-300",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
          <div className="relative w-full aspect-[21/9] md:aspect-[21/8]">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <div
                  className={`relative w-full h-full bg-gradient-to-r ${slide.bgColor}`}
                >
                  {/* Decorative overlays */}
                  <div className="absolute inset-0 opacity-20">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `repeating-linear-gradient(
                          45deg,
                          transparent,
                          transparent 30px,
                          rgba(255,255,255,0.1) 30px,
                          rgba(255,255,255,0.1) 60px
                        )`,
                      }}
                    />
                  </div>

                  <div className="absolute top-10 right-20 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-20 left-10 w-56 h-56 bg-white/15 rounded-full blur-3xl" />

                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full px-8 md:px-16 lg:px-20">
                      <div className="max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B2C5D] mb-4 md:mb-6 leading-tight">
                          {slide.title}
                        </h2>

                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 font-medium">
                          {slide.subtitle}
                        </p>

                        <div className="mt-6 md:mt-8">
                          <button className="bg-[#0B2C5D] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold hover:bg-[#0a2347] transition-all duration-300 hover:scale-105 shadow-xl">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent" />
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-500 rounded-full ${
                  index === currentSlide
                    ? "bg-[#0B2C5D] w-10 h-2.5"
                    : "bg-white/60 hover:bg-white/80 w-2.5 h-2.5"
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
