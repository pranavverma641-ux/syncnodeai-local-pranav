"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  FaDatabase,
  FaCloud,
  FaCogs,
  FaChartLine,
  FaShieldAlt,
  FaRocket,
  FaLayerGroup,
  FaBolt,
  FaDocker,
  FaAws,
  FaGoogle,
  FaPython,
} from "react-icons/fa";
import {
  SiApachespark,
  SiApacheflink,
  SiApacheairflow,
  SiApachekafka,
  SiPostgresql,
  SiMongodb,
  SiClickhouse,
  SiSnowflake,
  SiDatabricks,
  SiGooglebigquery,
  SiTerraform,
  SiKubernetes,
  SiRedis,
  SiElasticsearch,
  SiDbt,
  SiPresto,
} from "react-icons/si";

export default function DataEngineeringSection() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [visibleElements, setVisibleElements] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const cards = document.querySelectorAll(".animate-card");

    cards.forEach((card, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards((prev) => new Set([...Array.from(prev), index]));
            }, index * 100);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(card);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-animate]");
    const observers: IntersectionObserver[] = [];

    elements.forEach((el) => {
      const key = el.getAttribute("data-animate");
      if (!key) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...Array.from(prev), key]));
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const services = [
    {
      icon: <FaDatabase className="text-4xl" />,
      title: "Data Pipeline Architecture",
      description:
        "Build robust, scalable ETL/ELT pipelines that handle massive data volumes with ease",
      features: [
        "Real-time Streaming",
        "Batch Processing",
        "Auto-scaling",
        "Fault Tolerance",
      ],
      color: "from-blue-500 to-purple-600",
      textColor: "text-blue-500",
    },
    {
      icon: <FaCloud className="text-4xl" />,
      title: "Cloud Data Solutions",
      description:
        "Modern cloud-native data architecture designed for performance and cost optimization",
      features: [
        "Multi-cloud Strategy",
        "Serverless Computing",
        "Data Lakes",
        "Cost Optimization",
      ],
      color: "from-emerald-500 to-teal-600",
      textColor: "text-emerald-500",
    },
    {
      icon: <FaCogs className="text-4xl" />,
      title: "Data Integration",
      description:
        "Seamlessly connect disparate data sources into unified, accessible data ecosystems",
      features: [
        "API Integration",
        "Database Sync",
        "File Processing",
        "Real-time Updates",
      ],
      color: "from-orange-500 to-red-600",
      textColor: "text-orange-500",
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "Analytics Infrastructure",
      description:
        "High-performance data warehouses and analytics platforms for business intelligence",
      features: [
        "Data Modeling",
        "Query Optimization",
        "BI Integration",
        "Performance Tuning",
        "Data Warehousing Solutions",
        "Big Data Processing",
      ],
      color: "from-purple-500 to-pink-600",
      textColor: "text-purple-500",
    },
  ];

  const technologies = [
    // Processing & Orchestration
    {
      icon: <SiApachespark />,
      name: "Apache Spark",
      category: "Processing",
      color: "from-orange-400 to-yellow-500",
    },
    {
      icon: <SiApacheflink />,
      name: "Apache Flink",
      category: "Stream Processing",
      color: "from-pink-500 to-purple-500",
    },
    {
      // Apache Beam icon removed due to missing export in react-icons/si
      icon: <SiApacheairflow />,
      name: "Apache Airflow",
      category: "Workflow",
      color: "from-teal-400 to-emerald-500",
    },

    // Messaging / Streaming
    {
      icon: <SiApachekafka />,
      name: "Apache Kafka",
      category: "Streaming",
      color: "from-pink-500 to-purple-500",
    },

    // Databases
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
      category: "Relational DB",
      color: "from-sky-600 to-blue-800",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
      category: "NoSQL DB",
      color: "from-green-400 to-green-600",
    },
    {
      icon: <SiClickhouse />,
      name: "ClickHouse",
      category: "Columnar DB",
      color: "from-yellow-400 to-orange-500",
    },

    // Warehousing / Analytics
    {
      icon: <SiSnowflake />,
      name: "Snowflake",
      category: "Data Warehouse",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: <SiDatabricks />,
      name: "Databricks",
      category: "Lakehouse",
      color: "from-pink-400 to-rose-500",
    },
    {
      icon: <SiGooglebigquery />,
      name: "BigQuery",
      category: "Analytics Warehouse",
      color: "from-indigo-400 to-blue-600",
    },

    // Infrastructure & Cloud
    {
      icon: <FaAws />,
      name: "AWS",
      category: "Cloud",
      color: "from-orange-400 to-yellow-600",
    },
    {
      icon: <FaGoogle />,
      name: "Google Cloud",
      category: "Cloud",
      color: "from-pink-400 to-purple-600",
    },
    {
      icon: <SiTerraform />,
      name: "Terraform",
      category: "Infrastructure as Code",
      color: "from-purple-400 to-indigo-600",
    },

    // Containerization & Deployment
    {
      icon: <FaDocker />,
      name: "Docker",
      category: "Containerization",
      color: "from-sky-500 to-blue-600",
    },
    {
      icon: <SiKubernetes />,
      name: "Kubernetes",
      category: "Orchestration",
      color: "from-blue-400 to-indigo-600",
    },

    // Caching / Search
    {
      icon: <SiRedis />,
      name: "Redis",
      category: "Caching",
      color: "from-red-500 to-red-700",
    },
    {
      icon: <SiElasticsearch />,
      name: "Elasticsearch",
      category: "Search & Indexing",
      color: "from-yellow-400 to-orange-500",
    },

    // Programming Language
    {
      icon: <FaPython />,
      name: "Python",
      category: "Language",
      color: "from-yellow-400 to-blue-400",
    },

    // Optional Add-ons
    {
      icon: <SiDbt />,
      name: "dbt",
      category: "Data Modeling",
      color: "from-fuchsia-500 to-purple-600",
    },
    {
      icon: <SiPresto />,
      name: "Presto",
      category: "SQL Query Engine",
      color: "from-green-500 to-blue-600",
    },
  ];

  const processSteps = [
    {
      icon: <FaRocket />,
      title: "Discovery & Assessment",
      description:
        "Deep dive into your current data landscape and identify opportunities for optimization",
      duration: "1-2 weeks",
    },
    {
      icon: <FaLayerGroup />,
      title: "Architecture Design",
      description:
        "Create scalable, future-proof data architecture tailored to your business needs",
      duration: "2-3 weeks",
    },
    {
      icon: <FaBolt />,
      title: "Implementation & Testing",
      description:
        "Build, test, and deploy robust data pipelines with comprehensive quality assurance",
      duration: "4-8 weeks",
    },
    {
      icon: <FaShieldAlt />,
      title: "Monitoring & Optimization",
      description:
        "Continuous monitoring, performance tuning, and proactive maintenance",
      duration: "Ongoing",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Light Theme */}
      <div className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#2368AB] rounded-full mb-6 shadow-lg">
            <FaDatabase className="text-3xl text-white" />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-[#2368AB] mb-6 leading-tight">
            Data Engineering
            <span className="block">Excellence</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Transform your raw data into powerful insights with our cutting-edge
            data engineering solutions
          </p>
          <Link href="/contact" className="inline-block">
            <button className="px-8 py-4 bg-gradient-to-r from-[#2368AB] to-indigo-500 rounded-full text-white font-semibold hover:scale-105 transition-all">
              Get Started <ArrowRight className="inline ml-2 w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>

      {/* Services Section - Light Theme */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-[#2368AB] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`animate-card group relative p-8 rounded-3xl bg-white shadow-xl border border-gray-200 transition-all duration-700 hover:scale-105 ${
                  visibleCards.has(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{service.icon}</div>
                </div>

                <h3
                  className={`text-2xl font-bold ${service.textColor} mb-4 transition-all duration-300`}
                >
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-2`}
                      ></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Optional hover glow effect */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section - Light Theme */}
      <div className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2368AB] mb-4">
              Our Process
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              A proven methodology for delivering exceptional data solutions
            </p>
          </div>

          {/* Desktop Layout (Horizontal) */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Vertical Timeline */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-1 bg-[#2368AB] rounded-full h-full"></div>

              <div className="space-y-16">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-center relative transition-all duration-700 ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    {/* Card */}
                    <div
                      className={`w-2/5 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}
                    >
                      <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-500">
                        <div className="flex items-center mb-4">
                          <div className="text-3xl text-[#2368AB] mr-3">
                            {step.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="relative flex items-center justify-center w-12 h-12 bg-[#2368AB] rounded-full z-20 shadow-lg">
                        <div className="w-6 h-6 bg-white rounded-full"></div>
                      </div>
                      <div className="absolute w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full animate-ping z-10"></div>
                    </div>

                    {/* Spacer */}
                    <div className="w-2/5"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="block md:hidden">
            <div className="space-y-10 relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 w-0.5 h-full bg-[#2368AB]"></div>

              {processSteps.map((step, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Node */}
                  <div className="relative flex-shrink-0 flex items-center justify-center w-16 h-16 mr-4">
                    <div className="w-8 h-8 bg-[#2368AB] rounded-full flex items-center justify-center z-10">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full animate-ping"></div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 pb-8">
                    <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-center mb-3">
                        <div className="text-2xl text-[#2368AB] mr-3">
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
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

      {/* Technologies Section - Light Theme */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ease-out ${
              visibleElements.has("de-tech-title")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            data-animate="de-tech-title"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Technologies We{" "}
              <span className="bg-[#2368AB] bg-clip-text text-transparent">
                Master
              </span>
            </h2>
            <div className="w-24 h-1 bg-[#2368AB] mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-12">
              Cutting-edge tools and platforms for modern data engineering
            </p>
          </div>

          {/* Technology Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-700 ease-out ${
                  visibleElements.has("de-tech-cards")
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-8 scale-95"
                }`}
                data-animate="de-tech-cards"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="relative p-6 bg-white border border-gray-200 rounded-2xl text-center shadow-sm group-hover:shadow-md transition-all duration-300 h-full">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      tech.color || "from-blue-500 to-purple-600"
                    } opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                  ></div>

                  <div className="relative flex flex-col items-center justify-center h-full">
                    <div className="mb-4 group-hover:scale-110 transition-all duration-300 transform">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-cyan-100/50 p-2 group-hover:bg-transparent transition-all duration-300 shadow-sm">
                        <div className="text-3xl text-[#2368AB]">
                          {tech.icon}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-gray-800 font-semibold text-sm group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                      {tech.name}
                    </h3>
                  </div>

                  {/* Hover pulse dot */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className={`w-2 h-2 bg-gradient-to-r ${
                        tech.color || "from-blue-500 to-purple-500"
                      } rounded-full animate-pulse`}
                    ></div>
                  </div>

                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${
                      tech.color || "from-blue-500 to-purple-500"
                    } opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500 rounded-2xl`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Light Theme */}
      <div className="pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="p-12 rounded-3xl shadow-xl border"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)",
              borderColor: "#e5e7eb", // Tailwind's gray-200
            }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2368AB] rounded-full mb-6 shadow-md">
              <FaRocket className="text-2xl text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's build the data infrastructure that will power your business
              growth
            </p>
            <Link href="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-[#2368AB] to-purple-500 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-purple-300/30">
                Start Your Data Journey
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
