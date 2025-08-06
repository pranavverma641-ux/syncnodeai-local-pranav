"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ProcessSection from "./processSection";

export default function AIMLSection() {
  const [activeService, setActiveService] = useState(0);
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(
              (prev) =>
                new Set([
                  ...Array.from(prev),
                  (entry.target as HTMLElement).dataset.animate,
                ])
            );
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      title: "Machine Learning Models",
      description:
        "Custom ML models tailored to your specific business needs and data patterns",
      icon: "🧠",
      features: [
        "Predictive Analytics",
        "Classification Models",
        "Regression Analysis",
        "Deep Learning",
      ],
      color: "from-blue-400 to-cyan-400",
    },
    {
      id: 2,
      title: "Natural Language Processing",
      description:
        "Advanced text analysis, sentiment analysis, and language understanding solutions",
      icon: "💬",
      features: [
        "Text Analytics",
        "Chatbots & Virtual Assistants",
        "Language Translation",
        "Document Processing",
      ],
      color: "from-purple-400 to-pink-400",
    },
    {
      id: 3,
      title: "Computer Vision",
      description:
        "Image recognition, object detection, and visual data processing capabilities",
      icon: "👁️",
      features: [
        "Image Recognition",
        "Object Detection",
        "Facial Recognition",
        "Quality Control",
      ],
      color: "from-green-400 to-emerald-400",
    },
    {
      id: 4,
      title: "Predictive Analytics",
      description:
        "Forecast trends, predict outcomes, and make data-driven business decisions",
      icon: "📊",
      features: [
        "Business Forecasting",
        "Risk Assessment",
        "Customer Behavior",
        "Market Analysis",
      ],
      color: "from-orange-400 to-red-400",
    },
    {
      id: 5,
      title: "AI Automation",
      description:
        "Automate repetitive tasks and optimize business processes with AI",
      icon: "⚡",
      features: [
        "Process Automation",
        "Workflow Optimization",
        "Smart Scheduling",
        "Resource Allocation",
      ],
      color: "from-indigo-400 to-purple-400",
    },
    {
      id: 6,
      title: "Data Science Solutions",
      description:
        "Extract insights from complex datasets and transform data into actionable intelligence",
      icon: "🔬",
      features: [
        "Data Mining",
        "Statistical Analysis",
        "Business Intelligence",
        "Data Visualization",
      ],
      color: "from-teal-400 to-blue-400",
    },
  ];

  const technologies = [
    {
      name: "TensorFlow",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
    },
    {
      name: "PyTorch",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
    },
    {
      name: "Scikit-learn",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
    },
    {
      name: "OpenCV",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
    },
    {
      name: "Pandas",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
    },
    {
      name: "NumPy",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
    },
    {
      name: "Keras",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg",
    },
    {
      name: "Jupyter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg",
    },
    {
      name: "Hugging Face",
      icon: "https://simpleicons.org/icons/huggingface.svg",
    },
    {
      name: "CUDA",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nvidia.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      name: "Matplotlib",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
    },
    {
      name: "Apache Spark",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg",
    },
    {
      name: "MLflow",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mlflow.svg",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    },
    {
      name: "FastAPI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    },
    {
      name: "Streamlit",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg",
    },
    {
      name: "OpenAI",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/openai.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Light Theme */}
      <section className="relative pt-32 pb-10 px-4 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-black text-[#2368AB] mb-6 leading-tight">
            <span className="block">AI & Machine</span>
            <span className="block bg-clip-text leading-[1.2]">
              Learning
            </span>
            <span className="block text-5xl md:text-6xl font-light">
              Solutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-12">
            Harness the power of artificial intelligence to transform your
            business processes, automate complex tasks, and unlock insights from
            your data
          </p>
          <Link href="/contact" passHref>
            <button className="bg-gradient-to-r from-[#2368AB] to-indigo-500 text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-transform">
              Get Started Today
            </button>
          </Link>
        </div>
      </section>

      {/* Services Section - Light Theme */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              What We{" "}
              <span className="bg-[#2368AB] bg-clip-text text-transparent">
                Offer
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Cutting-edge AI and machine learning solutions that transform
              businesses and accelerate digital innovation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-gray-200 rounded-3xl shadow hover:shadow-lg hover:shadow-[#2368AB]/40 p-8 transition-all"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-[#2368AB] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <ul className="space-y-2 text-gray-600">
                  {service.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Technologies Section - Light Theme */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            Technologies We{" "}
            <span className="bg-[#2368AB] bg-clip-text text-transparent">
              Master
            </span>
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            We leverage cutting-edge tools and frameworks to deliver exceptional
            AI solutions
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#2368AB]/20 rounded-xl p-6 shadow hover:shadow-md text-center"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-10 h-10 mx-auto mb-3"
                />
                <p className="text-gray-900 font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center bg-white border border-gray-200 rounded-3xl shadow p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business with{" "}
            <span className="bg-[#2368AB] bg-clip-text text-transparent">
              AI & Machine Learning?
            </span>
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's discuss how our AI solutions can drive innovation and growth
            for your organization
          </p>
          <Link href="/contact" passHref>
            <button className="bg-gradient-to-r from-[#2368AB] to-indigo-500 text-white px-10 py-5 rounded-2xl font-semibold hover:scale-105 transition-transform">
              Schedule Consultation →
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
