import React, { useState, useEffect } from 'react';
import { FaRocket, FaCog, FaCheckCircle, FaRocket as FaLaunch, FaChartLine } from 'react-icons/fa';

const ProcessSection = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());

  const processSteps = [
    {
      icon: <FaChartLine />,
      title: "Data Collection & Analysis",
      description: "We gather and analyze your data to understand patterns and requirements",
      duration: "1-2 weeks",
    },
    {
      icon: <FaCog />,
      title: "Model Development",
      description: "Custom AI models are developed and trained specifically for your use case",
      duration: "2-4 weeks",
    },
    {
      icon: <FaCheckCircle />,
      title: "Testing & Validation",
      description: "Rigorous testing ensures accuracy and reliability of the AI solution",
      duration: "1-2 weeks",
    },
    {
      icon: <FaLaunch />,
      title: "Deployment & Integration",
      description: "Seamless integration with your existing systems and infrastructure",
      duration: "2-3 weeks",
    },
    {
      icon: <FaRocket />,
      title: "Monitoring & Optimization",
      description: "Continuous monitoring and improvement of AI performance over time",
      duration: "Ongoing",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt((entry.target as HTMLElement).dataset.index!);
            setVisibleCards(prev => new Set(Array.from(prev).concat(index)));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.animate-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2368AB] mb-4">Our Process</h2>
            <p className="text-gray-700 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4">
              A systematic approach to delivering world-class AI solutions
            </p>
          </div>

          <div className="relative">
            {/* Desktop Layout */}
            <div className="hidden lg:block">
              {/* Timeline Line */}
              <div 
                className="absolute left-1/2 transform -translate-x-0.5 w-1 bg-[#2368AB] rounded-full" 
                style={{height: '100%', top: '0'}}
              ></div>

              <div className="space-y-16">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    data-index={index + 20}
                    className={`animate-card flex items-center relative ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    } transition-all duration-700 ${
                      visibleCards.has(index + 20)
                        ? "opacity-100 translate-x-0"
                        : `opacity-0 ${
                            index % 2 === 0 ? "-translate-x-10" : "translate-x-10"
                          }`
                    }`}
                  >
                    {/* Content Card */}
                    <div
                      className={`w-2/5 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}
                    >
                      <div className="p-6 rounded-2xl shadow-md bg-white border border-gray-200 hover:shadow-lg transition-all">
                        <div className="flex items-center mb-4">
                          <div className="text-3xl text-[#2368AB] mr-3">
                            {step.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="relative flex items-center justify-center w-12 h-12 bg-[#2368AB] rounded-full z-20 shadow-lg">
                        <div className="w-6 h-6 bg-white rounded-full"></div>
                      </div>
                      <div className="absolute w-20 h-20 bg-[#2368AB] rounded-full animate-ping z-10"></div>
                    </div>

                    {/* Spacer */}
                    <div className="w-2/5"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden">
              <div className="absolute left-8 top-0 w-0.5 h-full bg-[#2368AB] rounded-full"></div>
              <div className="space-y-8 sm:space-y-12">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    data-index={index + 20}
                    className={`animate-card relative pl-20 transition-all duration-700 ${
                      visibleCards.has(index + 20)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                  >
                    {/* Node */}
                    <div className="absolute left-6 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-[#2368AB] rounded-full z-20 shadow-lg">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                      </div>
                      <div className="absolute w-12 h-12 sm:w-16 sm:h-16 bg-[#2368AB] rounded-full animate-ping z-10"></div>
                    </div>

                    {/* Card */}
                    <div className="p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all">
                      <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-3 sm:gap-0">
                        <div className="flex items-center">
                          <div className="text-2xl sm:text-3xl text-[#2368AB] mr-3">
                            {step.icon}
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
