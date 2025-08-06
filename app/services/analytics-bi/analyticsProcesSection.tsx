import React, { useState, useEffect } from "react";
import { Database, BarChart3, Brain, TrendingUp, Settings } from "lucide-react";

const AnalyticsProcessSection = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  const process = [
    {
      title: "Data Discovery & Audit",
      description:
        "Comprehensive assessment of your data sources, quality, and current analytics infrastructure",
      icon: <Database className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-600",
      duration: "1-2 weeks",
    },
    {
      title: "Architecture & Strategy",
      description:
        "Design scalable data architecture and define analytics strategy aligned with business goals",
      icon: <Settings className="w-8 h-8" />,
      color: "from-purple-500 to-violet-600",
      duration: "2-3 weeks",
    },
    {
      title: "Data Pipeline & Modeling",
      description:
        "Build robust ETL pipelines and create dimensional models for optimal data processing",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-600",
      duration: "3-5 weeks",
    },
    {
      title: "Advanced Analytics & AI",
      description:
        "Implement machine learning models, predictive analytics, and AI-driven insights",
      icon: <Brain className="w-8 h-8" />,
      color: "from-orange-500 to-amber-600",
      duration: "4-6 weeks",
    },
    {
      title: "Visualization & Optimization",
      description:
        "Create interactive dashboards, reports, and continuous performance optimization",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-rose-500 to-pink-600",
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
              Our Analytics Process
            </h2>
            <p className="text-gray-700 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4">
              Transform your data into actionable insights with our proven
              analytics methodology
            </p>
          </div>

          <div className="relative">
            {/* Desktop Layout */}
            <div className="hidden lg:block">
              {/* Timeline Line */}
              <div
                className="absolute left-1/2 transform -translate-x-0.5 w-1 bg-[#2368AB] rounded-full"
                style={{ height: "100%", top: "0" }}
              ></div>

              <div className="space-y-16">
                {process.map((step, index) => (
                  <div
                    key={index}
                    data-index={index + 40}
                    className={`animate-card flex items-center relative ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    } transition-all duration-700 ${
                      visibleCards.has(index + 40)
                        ? "opacity-100 translate-x-0"
                        : `opacity-0 ${
                            index % 2 === 0
                              ? "-translate-x-10"
                              : "translate-x-10"
                          }`
                    }`}
                  >
                    {/* Content Card */}
                    <div
                      className={`w-2/5 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}
                    >
                      <div
                        className="p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 hover:scale-[1.02] relative overflow-hidden group"
                        style={{
                          background: "rgba(255,255,255,0.85)",
                          backdropFilter: "blur(6px)",
                          border: "1px solid rgba(0,0,0,0.1)",
                        }}
                      >
                        <div
                          className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                        ></div>

                        <div className="relative z-10">
                          <div className="flex items-center mb-4 justify-start">
                            <div
                              className={`p-2 mr-3 text-[#2368AB]`}
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

                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="relative flex items-center justify-center w-12 h-12 bg-[#2368AB] rounded-full z-20 shadow-lg">
                        <div className="w-6 h-6 bg-white rounded-full"></div>
                      </div>
                      <div className="absolute w-20 h-20 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full animate-ping z-10"></div>
                    </div>

                    <div className="w-2/5"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden">
              <div className="absolute left-8 top-0 w-0.5 h-full bg-[#2368AB] rounded-full"></div>

              <div className="space-y-8 sm:space-y-12">
                {process.map((step, index) => (
                  <div
                    key={index}
                    data-index={index + 40}
                    className={`animate-card relative pl-20 transition-all duration-700 ${
                      visibleCards.has(index + 40)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-6 transform -translate-x-1/2 flex items-center justify-center">
                      <div
                        className={`relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-[#2368AB] rounded-full z-20 shadow-lg`}
                      >
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full"></div>
                      </div>
                      <div
                        className={`absolute w-12 h-12 sm:w-16 sm:h-16 bg-[#2368AB] rounded-full animate-ping z-10 opacity-10`}
                      ></div>
                    </div>

                    {/* Content Card */}
                    <div
                      className="p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 hover:scale-[1.02] relative overflow-hidden group"
                      style={{
                        background: "rgba(255,255,255,0.85)",
                        backdropFilter: "blur(6px)",
                        border: "1px solid rgba(0,0,0,0.1)",
                      }}
                    >
                      <div
                        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                      ></div>

                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-3 sm:gap-0">
                          <div className="flex items-center">
                            <div
                              className={`p-2 text-[#2368AB] mr-3`}
                            >
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

export default AnalyticsProcessSection;
