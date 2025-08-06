"use client";
import { useState } from "react";

export default function Careers() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    file: null,
    message: "",
  });

  const positions = [
    {
      title: "Business Development Executive",
      details: [
        "Knowledge in Salesforce",
        "Experience: 2+ years",
        "Sales",
      ],
    },
    {
      title: "Business Development Manager",
      details: [
        "Knowledge in Salesforce",
        "Experience: 5+ years",
        "Sales & Account Engagement",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      {/* Header */}
      <div className="container mx-auto px-6 pt-28 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
           {" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
           Careers 
          </span>
        </h1>
        <p className="text-lg text-gray-700">
          Join us to shape the future of AI, Data, and Cloud innovation.
        </p>
        <p className="text-md text-gray-600 mt-2">
          Contact HR: <a href="tel:+919636670394" className="text-blue-500">+91 96366 70394</a> |{" "}
          <a href="mailto:hr@syncnodeai.com" className="text-blue-500">hr@syncnodeai.com</a>
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

      {/* Application Form */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Application Form
        </h2>
        <form
          className="max-w-xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-md p-8 space-y-4"
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2368AB]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2368AB]"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2368AB]"
          />
          <select
            className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2368AB]"
          >
            <option value="">Select Position</option>
            {positions.map((pos, i) => (
              <option key={i} value={pos.title}>
                {pos.title}
              </option>
            ))}
          </select>
          <input
            type="file"
            className="w-full border border-gray-300 rounded-md bg-white text-gray-800 p-2 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:bg-[#2368AB] file:text-white hover:file:bg-blue-600"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2368AB]"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            Submit Application
          </button>
        </form>
      </section>
    </div>
  );
}
