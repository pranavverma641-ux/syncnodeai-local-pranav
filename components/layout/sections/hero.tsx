"use client";

import {
  Database,
  Cloud,
  Brain,
  Zap,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

const services: {
  id: number;
  title: string;
  description: string;
  icon: typeof Database;
  gradient: string;
  accentColor: string;
  bgColor?: string;
  features: { text: string }[];
  glowColor: string;
  url: string;
  status: "available" | "coming-soon";
}[] = [
  {
    id: 1,
    title: "Data Engineering",
    description:
      "Build robust, scalable, and reliable data foundations. We design, develop, and optimize data pipelines, warehouses, and lakes, ensuring your data is clean, accessible, and ready for analysis.",
    icon: Database,
    gradient: "from-cyan-400 via-blue-500 to-indigo-500",
    accentColor: "text-cyan-700",
    bgColor:
      "bg-gradient-to-r from-cyan-100/50 via-blue-100/50 to-indigo-100/50",
    features: [
      { text: "Data Architecture & Infrastructure Design" },
      { text: "Data Pipeline Development & Management" },
      { text: "Data Modeling & Optimization" },
      { text: "Data Quality & Governance" },
      { text: "Workflow Automation & Monitoring" },
      { text: "Data Accessibility & Integration" },
    ],
    glowColor: "shadow-cyan-300/30",
    url: "/services/data-engineering",
    status: "available",
  },
  {
    id: 2,
    title: "Data & Cloud Migration",
    description:
      "Seamlessly transition your data and infrastructure to secure, high-performance cloud environments (AWS, Azure, GCP). Minimize downtime, reduce costs, and enhance scalability with our expert migration strategies.",
    icon: Cloud,
    gradient: "from-emerald-400 via-teal-500 to-blue-500",
    accentColor: "text-emerald-700",
    bgColor:
      "bg-gradient-to-r from-emerald-100/50 via-teal-100/50 to-blue-100/50",
    features: [
      {
        text: "Benefit: Achieve agility, security, and efficiency in the cloud, faster.",
      },
      { text: "Cloud Infrastructure Assessment & Planning" },
      { text: "Seamless Data Transfer & Synchronization" },
      { text: "Downtime Minimization Strategies" },
    ],
    glowColor: "shadow-emerald-300/30",
    url: "/services/cloud-solutions",
    status: "available",
  },
  {
    id: 3,
    title: "Business Intelligence & Data Analytics",
    description:
      "Transform raw data into actionable insights. We design intuitive dashboards, predictive models, and custom reports that empower your teams to make data-driven decisions and uncover hidden opportunities.",
    icon: Sparkles,
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    accentColor: "text-blue-700",
    bgColor:
      "bg-gradient-to-r from-blue-100/50 via-indigo-100/50 to-purple-100/50",
    features: [
      { text: "Interactive Dashboards & Visualizations" },
      { text: "Custom Reports & KPIs" },
      { text: "Predictive & Descriptive Analytics" },
    ],
    glowColor: "shadow-blue-300/30",
    url: "/services/analytics-bi",
    status: "available",
  },
  {
    id: 4,
    title: "AI/ML Solutions",
    description:
      "Leverage the power of Artificial Intelligence and Machine Learning to automate processes, enhance customer experiences, predict trends, and innovate faster. From custom model development to integration, we bring AI to life.",
    icon: Brain,
    gradient: "from-violet-500 via-purple-500 to-indigo-500",
    accentColor: "text-violet-700",
    bgColor:
      "bg-gradient-to-r from-violet-100/50 via-purple-100/50 to-indigo-100/50",
    features: [
      { text: "Custom AI/ML Model Development" },
      { text: "AI-Powered Automation & Insights" },
      { text: "Integration with Existing Systems" },
      { text: "Customer Personalization & Engagement" },
    ],
    glowColor: "shadow-violet-300/30",
    url: "/services/ai-ml",
    status: "available",
  },
];

export default function ServicesGridSection() {
  const router = useRouter();

  const handleLearnMore = (
    id: number,
    status: "available" | "coming-soon",
    url: string
  ) => {
    if (status === "available") router.push(url);
  };

  return (
    <section className="relative min-h-screen">
      <div className="relative z-10 container mx-auto px-6 pt-12">
        {/* Header */}
        <div className="text-center mb-16 mt-12 py-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 rounded-full mb-8 border border-yellow-200">
            <Zap className="w-4 h-4 text-yellow-500 animate-pulse" />
            <span className="text-sm font-medium text-yellow-700">
              INNOVATIVE • SCALABLE • SPECIALIZED
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#2368AB]">
            <div className="mb-2">Your Partner for Data Excellence</div>
            <span className="text-4xl md:text-6xl text-gray-700 bg-clip-text">
              Cloud Agility & AI-Driven Future
            </span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mt-4">
            Transform your business with our comprehensive suite of cloud, data,
            and AI solutions designed for the modern enterprise.
          </p>
        </div>

        {/* What We Do */}
        <div className="text-center mt-4 mb-6">
          <h2 className="text-5xl font-bold text-[#2368AB] px-4 leading-tight">
            What We Do
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-8xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative ${service.bgColor} border-gray-800 shadow-md rounded-2xl p-8 transition-all duration-500 hover:transform hover:scale-105`}
            >
              {/* Gradient Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
              ></div>

              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 shadow ${service.glowColor} group-hover:shadow-lg transition-all duration-500 relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
                <service.icon className="w-8 h-8 text-white z-10 transition-all duration-700 group-hover:scale-125 group-hover:rotate-12" />
              </div>

              {/* Title & Description */}
              <div className="relative z-10">
                <h3 className={`text-2xl font-bold ${service.accentColor} mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-slate-800 group-hover:to-gray-500 transition-all duration-300`}>
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="px-3 py-1 font-medium bg-white rounded-full border border-gray-200 text-gray-700 text-[13px] hover:bg-gray-50 transition-all duration-300"
                    >
                      {typeof feature === "string" ? feature : feature.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
