"use client";
import React, { useState, useEffect } from "react";
import { ReactNode } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  TrendingUp,
  Zap,
  Eye,
  Brain,
  Target,
  Gauge,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import AnalyticsToolsSection from "./analyticsToolSection";
import AnalyticsProcessSection from "./analyticsProcesSection";

const performanceData = [
  { month: "Jan", revenue: 65000, predictions: 68000 },
  { month: "Feb", revenue: 78000, predictions: 75000 },
  { month: "Mar", revenue: 82000, predictions: 85000 },
  { month: "Apr", revenue: 95000, predictions: 92000 },
  { month: "May", revenue: 88000, predictions: 90000 },
  { month: "Jun", revenue: 105000, predictions: 102000 },
];

const analyticsData = [
  { name: "Dashboards", value: 45, color: "#8B5CF6" },
  { name: "Reports", value: 30, color: "#06B6D4" },
  { name: "Predictions", value: 25, color: "#10B981" },
];

type FloatingCardProps = { children: ReactNode; delay?: number };
type AnimatedCounterProps = { end: number; duration?: number; suffix?: string };

const FloatingCard = ({ children, delay = 0 }: FloatingCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      className={`transform transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default function AnalyticsBISection() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => setIsLoaded(true), []);

  const services = [
    {
      title: "Interactive Dashboards",
      description:
        "Create stunning, real-time dashboards that transform complex data into actionable insights.",
      icon: Eye,
      features: ["Real-time sync", "Custom KPIs", "Drill-down", "Responsive"],
      color: "from-purple-400 to-indigo-400",
    },
    {
      title: "Predictive Analytics",
      description:
        "Leverage machine learning to forecast trends, detect anomalies, and make predictions.",
      icon: Brain,
      features: ["Forecasting", "Anomaly detection", "Patterns", "Risk assessment"],
      color: "from-cyan-400 to-blue-400",
    },
    {
      title: "Business Intelligence",
      description:
        "Transform raw data into meaningful insights with powerful reporting and analytics.",
      icon: TrendingUp,
      features: ["Auto reports", "Data warehouse", "ETL", "Performance metrics"],
      color: "from-emerald-400 to-teal-400",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-24 relative py-20">
        <div className="container mx-auto px-6 relative z-10">
          <FloatingCard>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-6xl lg:text-7xl font-bold mb-8 text-[#2368AB] leading-relaxed">
                Analytics & BI
              </h1>
              <p className="text-2xl text-gray-700 mb-12 leading-relaxed">
                Transform your data into{" "}
                <span className="text-[#2368AB] font-semibold">actionable insights</span>{" "}
                with cutting-edge analytics and dashboards
              </p>
              <Link href="/contact" className="inline-block">
                <button className="px-8 py-4 bg-gradient-to-r from-[#2368AB] to-indigo-500 rounded-full text-white font-semibold hover:scale-105 transition-all">
                  Get Started <ArrowRight className="inline ml-2 w-5 h-5" />
                </button>
              </Link>
            </div>
          </FloatingCard>
        </div>
      </section>

      {/* Charts */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FloatingCard delay={200}>
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="mr-3 text-emerald-500" />
                  Performance Analytics
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="month" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#FFFFFF",
                        border: "1px solid #E5E7EB",
                        borderRadius: "8px",
                      }}
                      labelStyle={{ color: "#111827" }}
                    />
                    <Line type="monotone" dataKey="revenue" stroke="#8B5CF6" strokeWidth={3} />
                    <Line
                      type="monotone"
                      dataKey="predictions"
                      stroke="#06B6D4"
                      strokeWidth={3}
                      strokeDasharray="5 5"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </FloatingCard>

            <FloatingCard delay={400}>
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Gauge className="mr-3 text-purple-500" />
                  Analytics Distribution
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={analyticsData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {analyticsData.map((entry, i) => (
                        <Cell key={i} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </FloatingCard>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FloatingCard>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-[#2368AB]">Core Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive analytics solutions tailored to your business needs
              </p>
            </div>
          </FloatingCard>
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <FloatingCard key={i} delay={i * 200}>
                <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all">
                  <div className={`w-16 h-16 bg-gradient-to-r ${s.color} rounded-full flex items-center justify-center mb-6`}>
                    <s.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-4">{s.title}</h3>
                  <p className="text-gray-600 mb-6">{s.description}</p>
                  <div className="space-y-3">
                    {s.features.map((f, idx) => (
                      <div key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      <AnalyticsProcessSection />
      <AnalyticsToolsSection />

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <FloatingCard>
            <div className="text-center bg-gray-50 border border-purple-200 rounded-3xl p-12 shadow-sm">
              <h2 className="text-5xl font-bold text-[#2368AB] mb-6">
                Ready to Transform Your Data?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies already using our analytics platform to make smarter decisions
              </p>
              <Link href="/contact">
                <button className="px-10 py-4 rounded-full bg-gradient-to-r from-[#2368AB] to-indigo-500 text-white transition-all">
                  Schedule Demo
                </button>
              </Link>
            </div>
          </FloatingCard>
        </div>
      </section>
    </div>
  );
}
