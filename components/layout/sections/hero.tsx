import React from "react";
import {
  Database,
  Cloud,
  Brain,
  Zap,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const services: {
  id: number;
  title: string;
  description: string;
  icon: typeof Database;
  features: { text: string }[];
  url: string;
  status: "available" | "coming-soon";
}[] = [
  {
    id: 1,
    title: "Data Engineering",
    description:
      "Build robust, scalable, and reliable data foundations. We design, develop, and optimize data pipelines, warehouses, and lakes, ensuring your data is clean, accessible, and ready for analysis.",
    icon: Database,
    features: [
      { text: "Data Architecture & Infrastructure Design" },
      { text: "Data Pipeline Development & Management" },
      { text: "Data Modeling & Optimization" },
      { text: "Data Quality & Governance" },
      { text: "Workflow Automation & Monitoring" },
      { text: "Data Accessibility & Integration" },
    ],
    url: "/services/data-engineering",
    status: "available",
  },
  {
    id: 2,
    title: "Data & Cloud Migration",
    description:
      "Seamlessly transition your data and infrastructure to secure, high-performance cloud environments (AWS, Azure, GCP). Minimize downtime, reduce costs, and enhance scalability with our expert migration strategies.",
    icon: Cloud,
    features: [
      {
        text: "Benefit: Achieve agility, security, and efficiency in the cloud, faster.",
      },
      { text: "Cloud Infrastructure Assessment & Planning" },
      { text: "Seamless Data Transfer & Synchronization" },
      { text: "Downtime Minimization Strategies" },
    ],
    url: "/services/cloud-solutions",
    status: "available",
  },
  {
    id: 3,
    title: "Business Intelligence & Data Analytics",
    description:
      "Transform raw data into actionable insights. We design intuitive dashboards, predictive models, and custom reports that empower your teams to make data-driven decisions and uncover hidden opportunities.",
    icon: Sparkles,
    features: [
      { text: "Interactive Dashboards & Visualizations" },
      { text: "Custom Reports & KPIs" },
      { text: "Predictive & Descriptive Analytics" },
    ],
    url: "/services/analytics-bi",
    status: "available",
  },
  {
    id: 4,
    title: "AI/ML Solutions",
    description:
      "Leverage the power of Artificial Intelligence and Machine Learning to automate processes, enhance customer experiences, predict trends, and innovate faster. From custom model development to integration, we bring AI to life.",
    icon: Brain,
    features: [
      { text: "Custom AI/ML Model Development" },
      { text: "AI-Powered Automation & Insights" },
      { text: "Integration with Existing Systems" },
      { text: "Customer Personalization & Engagement" },
    ],
    url: "/services/ai-ml",
    status: "available",
  },
];

export default function ServicesGridSection() {
  const handleLearnMore = (
    id: number,
    status: "available" | "coming-soon",
    url: string
  ) => {
    if (status === "available") {
      console.log(`Navigate to: ${url}`);
    }
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
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`group relative bg-gradient-to-br from-[#EAF2FB] via-[#F5F9FD] to-[#EAF2FB] rounded-2xl p-8 border border-gray-200 hover:scale-105 hover:shadow-lg transition-all duration-500 min-h-[320px] flex flex-col justify-between`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r from-[#2368AB] via-[#3A7FD5] to-[#5FA8F5] rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all duration-500`}
                ></div>

                <div className="relative flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {service.title}
                    </h3>

                    <IconComponent className={`w-8 h-8 text-[#2368AB]`} />
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={`px-3 py-1 font-medium rounded-full border border-[#2368AB] text-[#2368AB] text-[13px] transition-all duration-300 hover:bg-[#2368AB] hover:text-white`}
                      >
                        {typeof feature === "string" ? feature : feature.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
