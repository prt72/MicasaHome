"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function WhyChooseUs({ reasons }) {
  // If reasons isn't passed as prop, provide default
  const defaultReasons = [
    "Post Hospitalisation care / Penjagaan Selepas Hospital",
    "Family is at work or overseas / Keluarga Bekerja atau Di Luar Negara",
    "Fully Furnished room / Bilik Perabot Lengkap",
    "Chronic care assistance / Bantuan Penjagaan Kronik",
  ];

  const reasonsList = reasons || defaultReasons;

  // Scroll Animation State
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="font-sans">
      {/* ================= WHY CHOOSE US & CONTACT ================= */}
      <section
        ref={sectionRef}
        className={`py-16 px-4 bg-blue-900 text-white transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT: Why Choose Us */}
          <div>
            <h2
              className={`text-3xl font-bold mb-6 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              Why Choose Us?
            </h2>
            <p
              className={`text-blue-200 mb-8 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              Kami komited untuk memberikan penjagaan terbaik untuk orang tersayang anda.
            </p>
            <ul className="space-y-4">
              {reasonsList.map((reason, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <span className="text-green-400 mt-1 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-100 hover:text-white transition-colors duration-300">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Contact Form */}
          <div
            className={`bg-white text-gray-800 rounded-2xl p-8 shadow-2xl transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-10 scale-95"
            }`}
          >
            <h3 className="text-2xl font-bold mb-2 text-center">Get In Touch</h3>
            <p className="text-center text-gray-500 mb-6 text-sm">
              Your path to quality life starts here.
            </p>

            {/* Decorative Heart Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center animate-pulse">
                <i className="fas fa-heart text-teal-600 text-2xl"></i>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <i className="fas fa-shield-alt text-teal-600"></i>
                  <span>Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-clock text-teal-600"></i>
                  <span>24/7 Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-heart text-teal-600"></i>
                  <span>Caring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}