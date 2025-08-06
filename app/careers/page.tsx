"use client";
import { useState } from "react";

export default function Careers() {
  const positions = [
    {
      title: "Senior DevOps Engineer",
      details: [
        "Knowledge in AWS & CI/CD",
        "Experience: 5+ years",
        "Infrastructure Automation",
      ],
    },
    {
      title: "Data Engineer",
      details: [
        "Proficient in Python & SQL",
        "Experience: 3+ years",
        "Data Pipeline & ETL Development",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      {/* Header */}
      <div className="container mx-auto px-6 pt-28 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          {" "}
          <span className="text-[#2368AB]">Careers</span>
        </h1>
        <p className="text-lg text-gray-700">
          Join us to shape the future of AI, Data, and Cloud innovation.
        </p>
        <p className="text-md text-gray-600 mt-2">
          Contact HR:{" "}
          <a href="tel:+919636670394" className="text-[#2368AB]">
            +91 96366 70394
          </a>{" "}
          |{" "}
          <a href="mailto:hr@syncnodeai.com" className="text-[#2368AB]">
            hr@syncnodeai.com
          </a>
        </p>
      </div>

      {/* Positions Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Current Openings
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {positions.map((position, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {position.title}
              </h3>
              <ul className="space-y-2 text-gray-700">
                {position.details.map((d, i) => (
                  <li key={i}>• {d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      {/* Google Form Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Application Form
        </h2>

        {/* Form Header */}
        <div className="m-4 flex flex-col justify-center bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="mb-2 mt-10 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Get In Touch
            </h3>
            <p className="text-slate-600">
              Send us a message and we'll respond within 24 hours
            </p>
          </div>

          {/* Embedded Google Form */}
          <div className="px-6 pb-8">
            {/* Alternative Link */}
            <div className="mt-6 text-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSccM3iC3V-WLjLVfqhBGRwtz9yc8VFaxGXuwHqRwVnR9ZLz_w/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Click to Open Form
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
