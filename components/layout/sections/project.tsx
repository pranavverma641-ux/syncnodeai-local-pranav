"use client";
import React, { useState, useEffect } from "react";

type AnimatedCounterProps = {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
};

const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | undefined;
    let animationFrame: number | undefined;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOut * end);
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => {
      if (animationFrame !== undefined) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

const ProjectsShowcase = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            <span className="text-transparent bg-clip-text bg-[#2368AB]">
              Driving Success for Leading Businesses
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto">
          {/* Blue Card */}
          <div className="col-span-12 md:col-span-4">
            <div className="bg-[#0074D9] p-10 rounded-3xl shadow-lg hover:scale-105 transition duration-500 text-white">
              <div className="text-6xl font-black mb-4">
                <AnimatedCounter end={35} duration={2500} suffix="+" />
              </div>
              <p className="text-lg font-semibold">
                Successful Projects Delivered
              </p>
            </div>
          </div>

          {/* Slate Blue Card */}
          <div className="col-span-12 md:col-span-4">
            <div className="bg-[#7B8DB2] p-8 rounded-3xl shadow-lg hover:scale-105 transition duration-500 text-white">
              <div className="text-5xl font-black mb-3">
                <AnimatedCounter end={20} duration={2000} suffix="+" />
              </div>
              <p className="text-lg font-semibold">
                Global Clients Served
              </p>
            </div>
          </div>

          {/* Light Blue Card */}
          <div className="col-span-12 md:col-span-4">
            <div className="bg-[#F5F8FF] p-6 rounded-3xl shadow-lg hover:scale-105 transition duration-500 text-[#2368AB]">
              <div className="text-3xl font-black mb-2">
                <AnimatedCounter end={98} duration={2200} suffix="%" />
              </div>
              <p className="text-sm font-semibold">Satisfaction Rate</p>
            </div>
          </div>

          {/* Soft Yellow Card */}
          <div className="col-span-12 md:col-span-6">
            <div className="bg-[#F5F8FF] p-8 rounded-3xl shadow-lg hover:scale-105 transition duration-500 text-[#2368AB]">
              <div className="text-4xl font-black mb-2">
                Frequent Innovation Updates
              </div>
              <p className="text-lg font-semibold">Continuous Improvements</p>
            </div>
          </div>

          {/* Blue Card */}
          <div className="col-span-12 md:col-span-6">
            <div className="bg-[#0074D9] p-8 rounded-3xl shadow-lg hover:scale-105 transition duration-500 text-white">
              <div className="text-6xl font-black mb-4">
                <AnimatedCounter end={25} duration={2300} suffix="+" />
              </div>
              <p className="text-lg font-semibold">
                Digital Solutions Deployed
              </p>
            </div>
          </div>

          {/* Small Slate Blue */}
          <div className="col-span-6 md:col-span-3">
            <div className="bg-[#7B8DB2] p-4 rounded-3xl shadow-lg hover:scale-105 transition duration-500 text-white">
              <div className="text-2xl font-black">
                <AnimatedCounter end={20} duration={1800} suffix="+" />
              </div>
              <p className="text-xs font-semibold">Tech Stacks</p>
            </div>
          </div>

          {/* Small Light Blue */}
          <div className="col-span-6 md:col-span-3">
            <div className="bg-[#F5F8FF] p-4 rounded-3xl shadow-lg hover:scale-105 transition duration-500 text-[#2368AB]">
              <div className="text-2xl font-black">
                <AnimatedCounter end={15} duration={2100} suffix="+" />
              </div>
              <p className="text-xs font-semibold">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
