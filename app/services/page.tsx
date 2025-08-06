// This page will list your services and link to individual service pages.

import Link from "next/link";
import { ServicesSection } from "@/components/layout/sections/services"; // Your existing overview
import { ArrowRight } from "lucide-react";

// Example service data - you would fetch this or define it more robustly
const allServices = [
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    description: "Harness the power of AI with custom ML models.",
    icon: "Brain" /* Placeholder */,
  },
  {
    id: "data-engineering",
    name: "Data Engineering",
    description: "Transform raw data into actionable insights.",
    icon: "Database" /* Placeholder */,
  },
  {
    id: "cloud-solutions",
    name: "Cloud Solutions",
    description: "Scale without limits with our cloud expertise.",
    icon: "Cloud" /* Placeholder */,
  },
  {
    id: "web-development",
    name: "Web Development",
    description: "Digital experiences redefined.",
    icon: "Code" /* Placeholder */,
  },
  {
    id: "analytics-bi",
    name: "Analytics & BI",
    description: "Insights that drive growth.",
    icon: "BarChart3" /* Placeholder */,
  },
  // Add all your services here
];

export default function ServicesOverviewPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">
        Our Services
      </h1>
      <p className="text-xl text-center text-gray-300 mb-12">
        We offer a comprehensive suite of technology services designed to
        elevate your business. Explore our core offerings below.
      </p>

      {/* You can use your existing ServicesSection for an overview if it fits */}
      {/* <ServicesSection /> */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {allServices.map((service) => (
          <Link
            href={`/services/${service.id}`}
            key={service.id}
            className="block p-6 bg-slate-800 rounded-lg shadow-lg hover:shadow-2xl hover:bg-slate-700 transition-all duration-300 group"
          >
            {/* You can add an icon component here based on service.icon */}
            <h2 className="text-2xl font-semibold text-blue-400 mb-3 group-hover:text-blue-300">
              {service.name}
            </h2>
            <p className="text-gray-400 mb-4 group-hover:text-gray-300">
              Build robust, scalable, and reliable data foundations. We design,
              develop, and optimize data pipelines, warehouses, and lakes,
              ensuring your data is clean, accessible, and ready for analysis
            </p>
            <div className="flex items-center mb-4">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/90 text-sm hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-sparkles w-3 h-3 inline mr-2"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                  <path d="M20 3v4"></path>
                  <path d="M22 5h-4"></path>
                  <path d="M4 17v2"></path>
                  <path d="M5 18H3"></path>
                </svg>
                Data Pipelines
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/90 text-sm hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-sparkles w-3 h-3 inline mr-2"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                  <path d="M20 3v4"></path>
                  <path d="M22 5h-4"></path>
                  <path d="M4 17v2"></path>
                  <path d="M5 18H3"></path>
                </svg>
                Data Pipelines
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/90 text-sm hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-sparkles w-3 h-3 inline mr-2"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                  <path d="M20 3v4"></path>
                  <path d="M22 5h-4"></path>
                  <path d="M4 17v2"></path>
                  <path d="M5 18H3"></path>
                </svg>
                Data Pipelines
              </div>
            </div>
            <div className="flex items-center text-blue-500 group-hover:text-blue-300 font-medium">
              Learn More{" "}
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      <p className="text-center text-gray-400">
        Need a custom solution?{" "}
        <Link href="/contact" className="text-blue-400 hover:underline">
          Get in touch
        </Link>{" "}
        to discuss your project.
      </p>
    </div>
  );
}
