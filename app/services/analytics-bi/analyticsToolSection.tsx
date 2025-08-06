import React from "react";
import {
  SiTableau,
  SiPowers,
  SiLooker,
  SiQlik,
  SiMetabase,
  SiApache,
  SiD3Dotjs,
  SiGoogledatastudio,
  SiMysql,
  SiR,
  SiAlteryx,
  SiModx,
  SiGooglesheets,
} from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { RiFileExcel2Fill } from "react-icons/ri";

type Tool = {
  name: string;
  category: string;
  icon: React.ReactNode;
  color: string;
};

const analyticsTools: Tool[] = [
  { name: "Tableau", category: "BI/Visualization", icon: <SiTableau />, color: "from-yellow-400 to-orange-500" },
  { name: "Power BI", category: "Microsoft BI", icon: <SiPowers />, color: "from-yellow-500 to-yellow-700" },
  { name: "Looker", category: "Google Cloud BI", icon: <SiLooker />, color: "from-pink-400 to-purple-500" },
  { name: "Qlik Sense", category: "Data Discovery", icon: <SiQlik />, color: "from-green-400 to-teal-500" },
  { name: "Metabase", category: "Open-source BI", icon: <SiMetabase />, color: "from-blue-500 to-indigo-600" },
  { name: "Apache Superset", category: "Open-source Viz", icon: <SiApache />, color: "from-purple-500 to-purple-700" },
  { name: "D3.js", category: "Web Visualization", icon: <SiD3Dotjs />, color: "from-orange-500 to-red-600" },
  { name: "Google Data Studio", category: "Free BI", icon: <SiGoogledatastudio />, color: "from-blue-400 to-cyan-500" },
  { name: "SQL", category: "Query Language", icon: <SiMysql />, color: "from-cyan-600 to-blue-700" },
  { name: "Python", category: "Programming", icon: <FaPython />, color: "from-yellow-400 to-blue-400" },
  { name: "R", category: "Statistical Computing", icon: <SiR />, color: "from-indigo-400 to-blue-600" },
  { name: "Excel", category: "Spreadsheet", icon: <RiFileExcel2Fill />, color: "from-green-500 to-green-700" },
  { name: "Alteryx", category: "Data Prep", icon: <SiAlteryx />, color: "from-blue-500 to-purple-600" },
  { name: "Mode", category: "Data Collaboration", icon: <SiModx />, color: "from-emerald-400 to-teal-600" },
  { name: "Google Sheets", category: "Cloud Spreadsheet", icon: <SiGooglesheets />, color: "from-lime-400 to-green-500" },
];

const AnalyticsToolsSection: React.FC = () => {
  const visibleElements = new Set(["analytics-title", "analytics-cards"]);

  return (
    <section className="py-24 px-4w">
      <div className="container mx-auto">
        <div
          className={`text-center mb-20 transition-all duration-1000 ease-out ${
            visibleElements.has("analytics-title")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
          data-animate="analytics-title"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Powered by{" "}
            <span className="bg-[#2368AB] bg-clip-text text-transparent">
              Leading Tools
            </span>
          </h2>
          <div className="w-24 h-1 bg-[#2368AB] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            We leverage industry-leading technologies to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-20">
          {analyticsTools.map((tool, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-700 ease-out ${
                visibleElements.has("analytics-cards")
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
              data-animate="analytics-cards"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="relative p-6 bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-gray-300 group-hover:shadow-lg transition-all duration-300 rounded-2xl text-center h-full">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                ></div>

                <div className="relative flex flex-col items-center justify-center h-full">
                  <div className="mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 transform">
                    <div className="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-xl backdrop-blur-sm p-2 group-hover:bg-gray-100 transition-all duration-300 text-3xl text-[#2368AB]">
                      {tool.icon}
                    </div>
                  </div>
                  <h3 className="text-gray-900 font-semibold text-sm group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:bg-clip-text transition-all duration-300">
                    {tool.name}
                  </h3>
                </div>

                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className={`w-2 h-2 bg-gradient-to-r ${tool.color} rounded-full animate-pulse`}
                  ></div>
                </div>

                <div
                  className={`absolute inset-0 bg-gradient-to-r ${tool.color} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500 rounded-2xl`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalyticsToolsSection;
