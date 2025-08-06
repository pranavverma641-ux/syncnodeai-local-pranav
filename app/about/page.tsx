"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Award } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className={`space-y-6 md:space-y-8 transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}>
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2368AB] font-bold leading-tight">
                Your Data, Directly Designed by Experts.
              </h1>
            </div>
            <div className="space-y-4 md:space-y-6 text-gray-700">
              <p className="text-base md:text-lg leading-relaxed">
                We believe that the most successful projects are born from direct collaboration with the experts. Let us put our 15+ years of hands-on experience to work for you.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                We're an IT company built by the individuals who've been at the forefront of data innovation for over 15+ years. <span className="font-bold">In our previous roles, we were the architects, designers, developers, testers, and deployers of complex data and AI solutions.</span>
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                At our core, We Live and Breathe Data. This isn't just a slogan; it's our passion and our profession.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4 md:pt-6">
              <Link href="/contact">
                <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#2368AB] to-indigo-500 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"}`}>
            <div className="w-full max-w-[850px] mx-auto">
              <div className="relative w-full" style={{ paddingBottom: "58.82%" }}>
                <video src="/aboutIcon1.mp4" preload="auto" autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MissionVisionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    const element = document.getElementById("mission-vision");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="mission-vision" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#2368AB]">Purpose</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Driving innovation and excellence in every solution we deliver
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className={`bg-white border border-gray-200 shadow-md transition-all duration-500 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} hover:scale-105`}>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Target className="w-8 h-8 text-blue-500" />
                </div>
                <CardTitle className="text-3xl font-bold text-blue-500">
                  Our Mission
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 leading-relaxed">
                At SyncNodeAI, our mission is to empower businesses with technology solutions that drive growth, innovation, and efficiency.
              </p>
            </CardContent>
          </Card>
          <Card className={`bg-white border border-gray-200 shadow-md transition-all duration-500 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} hover:scale-105`} style={{ transitionDelay: "200ms" }}>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Award className="w-8 h-8 text-purple-500" />
                </div>
                <CardTitle className="text-3xl font-bold text-purple-500">
                  Our Vision
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our vision is to be a leading technology partner recognized for expertise, quality, and solutions that exceed expectations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white pt-12">
      <HeroSection />
      <MissionVisionSection />
    </div>
  );
}