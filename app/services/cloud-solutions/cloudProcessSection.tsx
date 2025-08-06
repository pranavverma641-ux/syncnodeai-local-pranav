import React, { useState, useEffect } from "react";
import { Search, Settings, CloudLightning, Activity } from "lucide-react";

const CloudProcessSection = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  const process = [
    {
      title: "Discovery & Assessment",
      description:
        "We analyze your current infrastructure and business requirements",
      icon: <Search className="w-8 h-8" />,
      color: "from-blue-100 to-cyan-100",
      duration: "1-2 weeks",
    },
    {
      title: "Architecture Design",
      description: "Custom cloud architecture tailored to your specific needs",
      icon: <Settings className="w-8 h-8" />,
      color: "from-purple-100 to-pink-100",
      duration: "2-3 weeks",
    },
    {
      title: "Migration & Implementation",
      description: "Seamless migration with minimal downtime and disruption",
      icon: <CloudLightning className="w-8 h-8" />,
      color: "from-green-100 to-emerald-100",
      duration: "3-6 weeks",
    },
    {
      title: "Optimization & Support",
      description: "Continuous monitoring, optimization, and ongoing support",
      icon: <Activity className="w-8 h-8" />,
      color: "from-orange-100 to-red-100",
      duration: "Ongoing",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              (entry.target as HTMLElement).dataset.index || "0"
            );
            setVisibleCards((prev) => new Set([...Array.from(prev), index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".animate-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2368AB] mb-4">
              Our Process
            </h2>
            <p className="text-gray-700 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4">
              A proven methodology for delivering exceptional cloud solutions
            </p>
          </div>

          <div className="relative">
            {/* Desktop Layout */}
            <div className="hidden lg:block">
              <div
                className="absolute left-1/2 transform -translate-x-0.5 w-1 bg-[#2368AB] rounded-full"
                style={{ height: "100%", top: "0" }}
              ></div>

              <div className="space-y-16">
                {process.map((step, index) => (
                  <div
                    key={index}
                    data-index={index + 30}
                    className={`animate-card flex items-center relative ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    } transition-all duration-700 ${
                      visibleCards.has(index + 30)
                        ? "opacity-100 translate-x-0"
                        : `opacity-0 ${
                            index % 2 === 0
                              ? "-translate-x-10"
                              : "translate-x-10"
                          }`
                    }`}
                  >
                    <div
                      className={`w-2/5 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}
                    >
                      <div
                        className="p-6 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-lg relative overflow-hidden group"
                        style={{
                          background: "white",
                          border: "1px solid rgba(0,0,0,0.05)",
                        }}
                      >
                        <div className="relative z-10">
                          <div className="flex items-center mb-2 justify-start">
                            <div
                              className={`px-2 rounded-lg text-[#2368AB]`}
                            >
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
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="relative flex items-center justify-center w-12 h-12 bg-[#2368AB] rounded-full z-20 shadow-md">
                        <div className="w-6 h-6 bg-white rounded-full"></div>
                      </div>
                      <div className="absolute w-20 h-20 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full animate-ping z-10"></div>
                    </div>

                    <div className="w-2/5"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile */}
            <div className="lg:hidden">
              <div className="absolute left-8 top-0 w-0.5 h-full bg-[#2368AB] rounded-full"></div>

              <div className="space-y-8 sm:space-y-12">
                {process.map((step, index) => (
                  <div
                    key={index}
                    data-index={index + 30}
                    className={`animate-card relative pl-20 transition-all duration-700 ${
                      visibleCards.has(index + 30)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                  >
                    <div className="absolute left-6 transform -translate-x-1/2 flex items-center justify-center">
                      <div
                        className={`relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-[#2368AB] rounded-full z-20 shadow-md`}
                      >
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full flex items-center justify-center">
                        </div>
                      </div>
                      <div
                        className={`absolute w-12 h-12 sm:w-16 sm:h-16 rounded-full animate-ping z-10 opacity-20`}
                        style={{
                          background: `linear-gradient(to right, #93c5fd, #c4b5fd)`,
                        }}
                      ></div>
                    </div>

                    <div
                      className="p-4 sm:p-6 rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-lg relative overflow-hidden group"
                      style={{
                        background: "white",
                        border: "1px solid rgba(0,0,0,0.05)",
                      }}
                    >
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-3 sm:gap-0">
                          <div className="flex items-center">
                            <div
                              className={`p-2 mr-3`}
                            >
                              {React.cloneElement(step.icon, {
                                className: "w-5 h-5 sm:w-6 sm:h-6 text-[#2368AB]",
                              })}
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                              {step.title}
                            </h3>
                          </div>
                          <span className="text-xs sm:text-sm text-gray-600 bg-gray-100 px-2 sm:px-3 py-1 rounded-full self-start sm:ml-auto">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                          {step.description}
                        </p>
                      </div>
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

export default CloudProcessSection;
