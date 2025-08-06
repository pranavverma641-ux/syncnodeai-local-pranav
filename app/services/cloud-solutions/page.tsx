"use client";
import React, { useState, useEffect, useRef } from "react";
import { faAws } from "@fortawesome/free-brands-svg-icons";
import { SiGooglecloud, SiDigitalocean } from "react-icons/si";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VscAzure } from "react-icons/vsc";
import {
  Cloud,
  Server,
  Database,
  Shield,
  ArrowRight,
  CheckCircle,
  Clock,
  TrendingUp,
  BarChart3,
  Rocket,
  Headphones,
  Search,
  BarChart,
} from "lucide-react";
import Link from "next/link";
import CloudProcessSection from "./cloudProcessSection";

export default function CloudServicesPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(
              (prev) => new Set([...Array.from(prev), entry.target.id])
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const cloudServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-600" />,
      title: "Infrastructure as a Service",
      description:
        "Scalable compute, storage, and networking resources on-demand",
      features: [
        "Virtual Machines & Containers",
        "Auto-scaling Resources",
        "Load Balancing",
        "CDN Integration",
        "Disaster Recovery",
      ],
      color: "from-blue-100 to-cyan-100",
    },
    {
      icon: <Database className="w-8 h-8 text-green-600" />,
      title: "Database Solutions",
      description:
        "Managed database services with high availability and performance",
      features: [
        "Multi-cloud Databases",
        "Real-time Synchronization",
        "Automated Backups",
        "Performance Optimization",
        "Data Analytics",
      ],
      color: "from-green-100 to-emerald-100",
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with compliance management",
      features: [
        "Zero Trust Architecture",
        "Identity Management",
        "Threat Detection",
        "Compliance Monitoring",
        "Data Encryption",
      ],
      color: "from-purple-100 to-pink-100",
    },
    {
      icon: <Rocket className="w-8 h-8 text-orange-600" />,
      title: "DevOps & Automation",
      description: "Streamlined development and deployment pipelines",
      features: [
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Monitoring & Logging",
        "Container Orchestration",
        "Automated Testing",
      ],
      color: "from-orange-100 to-red-100",
    },
  ];

  const platforms = [
    {
      name: "AWS",
      logo: <FontAwesomeIcon icon={faAws} className="w-12 h-12 text-orange-500" />,
      description: "Amazon Web Services",
    },
    {
      name: "Azure",
      logo: <VscAzure className="w-12 h-12 text-blue-500" />,
      description: "Microsoft Azure",
    },
    {
      name: "GCP",
      logo: <SiGooglecloud className="w-12 h-12 text-blue-400" />,
      description: "Google Cloud Platform",
    },
    {
      name: "Digital Ocean",
      logo: <SiDigitalocean className="w-12 h-12 text-blue-400" />,
      description: "Developer Cloud",
    },
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalability",
      description: "Scale resources up or down based on demand",
      color: "text-blue-500",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security",
      description: "Enterprise-grade security and compliance",
      color: "text-green-500",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Cost Efficiency",
      description: "Pay only for what you use with optimized pricing",
      color: "text-purple-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock monitoring and support",
      color: "text-orange-500",
    },
  ];

  return (
    <div className="min-h-screen text-gray-900">
      {/* Hero */}
      <section className="relative mt-4 pt-32 pb-10 flex items-center justify-center px-4">
        <div className="text-center z-10 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-black mb-8 text-[#2368AB]">
            Cloud Services
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-4xl mx-auto">
            Transform your business with scalable, secure, and intelligent cloud
            infrastructure that adapts to your growth and accelerates your
            digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" passHref>
              <button className="px-8 py-4 bg-gradient-to-r from-[#2368AB] to-indigo-500 rounded-full text-white font-semibold hover:from-[#2368AB] hover:to-purple-600 transition-all">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        ref={(el) => {
          sectionRefs.current[2] = el;
        }}
        id="services"
        className="py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gray-800">
              Our Services
            </h2>
            <p className="text-lg text-gray-700">
              Comprehensive cloud solutions designed to accelerate your digital
              transformation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {cloudServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <CloudProcessSection />

      {/* Platforms */}
      <section
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
        id="platforms"
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-[#2368AB]">
              Supported Platforms
            </h2>
            <p className="text-lg text-gray-700">
              We work with all major cloud providers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="mb-4 flex justify-center items-center h-16">
                  {platform.logo}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {platform.name}
                </h3>
                <p className="text-gray-600 text-sm">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        ref={(el) => {
          sectionRefs.current[1] = el;
        }}
        id="benefits"
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-[#2368AB]">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-700">
              Advantages that set us apart from the competition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div
                  className={`w-16 h-16 ${benefit.color} bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-16 shadow-md border border-gray-100">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-8">
              <Rocket className="w-10 h-10 text-[#2368AB]" />
            </div>
            <h2 className="text-5xl font-bold mb-6 text-[#2368AB]">
              Ready to Transform?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Let's architect your cloud infrastructure for tomorrow's
              challenges. Start your journey to the cloud today.
            </p>
            <Link href="/contact" passHref>
              <button className="px-8 py-4 bg-gradient-to-r from-[#2368AB] to-indigo-500 rounded-full text-white font-semibold transition-all">
                Get Free Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
