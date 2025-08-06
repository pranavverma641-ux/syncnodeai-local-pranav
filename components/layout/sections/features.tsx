"use client";
import React from "react";
import { Award, Target, Users, Lightbulb, Handshake } from "lucide-react";

const reasons = [
  {
    id: 1,
    title: "Deep, Specialized Expertise",
    description:
      "Unmatched Data & AI Mastery: Our team consists of highly certified Data Architects, Data Engineers, Cloud Architects, Data Scientists, and AI/ML specialists with 15+ years of experience across diverse industries.",
    icon: Award,
    gradient: "from-[#2368AB] via-[#3A7FD5] to-[#5FA8F5]",
    bgGradient: "from-[#EAF2FB] via-[#F5F9FD] to-[#EAF2FB]",
    iconColor: "text-[#2368AB]",
  },
  {
    id: 2,
    title: "Results-Oriented & ROI Driven",
    description:
      "Focus on Your Business Outcomes: We measure our success by your success. Our solutions are engineered to deliver measurable ROI, streamline operations, uncover new revenue streams, and provide actionable insights that directly impact your bottom line.",
    icon: Target,
    gradient: "from-[#2368AB] via-[#3A7FD5] to-[#5FA8F5]",
    bgGradient: "from-[#EAF2FB] via-[#F5F9FD] to-[#EAF2FB]",
    iconColor: "text-[#2368AB]",
  },
  {
    id: 3,
    title: "Tailored & Client-Centric Solutions",
    description:
      "Bespoke Strategies, Not Off-the-Shelf: Your business is unique, and so are its challenges. We don't offer one-size-fits-all. Instead, we collaborate closely to design and implement customized data, cloud, and AI strategies perfectly aligned with your specific goals and vision.",
    icon: Users,
    gradient: "from-[#2368AB] via-[#3A7FD5] to-[#5FA8F5]",
    bgGradient: "from-[#EAF2FB] via-[#F5F9FD] to-[#EAF2FB]",
    iconColor: "text-[#2368AB]",
  },
  {
    id: 4,
    title: "Future-Ready Innovation",
    description:
      "Pioneering the Next Wave: We stay at the cutting edge of technological advancements in data engineering, cloud computing, and AI/ML. Partner with us to future-proof your infrastructure and leverage the latest innovations for sustainable competitive advantage.",
    icon: Lightbulb,
    gradient: "from-[#2368AB] via-[#3A7FD5] to-[#5FA8F5]",
    bgGradient: "from-[#EAF2FB] via-[#F5F9FD] to-[#EAF2FB]",
    iconColor: "text-[#2368AB]",
  },
  {
    id: 5,
    title: "End-to-End Partnership & Reliability",
    description:
      "Your Trusted Journey Partner: From initial strategic consulting and meticulous data pipeline development to seamless cloud migration, advanced analytics, and ongoing support, we provide comprehensive, reliable partnership at every stage of your data transformation journey.",
    icon: Handshake,
    gradient: "from-[#2368AB] via-[#3A7FD5] to-[#5FA8F5]",
    bgGradient: "from-[#EAF2FB] via-[#F5F9FD] to-[#EAF2FB]",
    iconColor: "text-[#2368AB]",
  },
  {
    id: 6,
    title: "Secure by Design & Compliance-Ready",
    description:
      "We embed security, privacy, and compliance into every layer of our solutions. SyncNodeAI ensures your data environment is resilient, audit-ready, and aligned with best practices in governance and risk management.",
    icon: Handshake,
    gradient: "from-[#2368AB] via-[#3A7FD5] to-[#5FA8F5]",
    bgGradient: "from-[#EAF2FB] via-[#F5F9FD] to-[#EAF2FB]",
    iconColor: "text-[#2368AB]",
  },
];

export default function WhyChooseSyncNodeAI() {
  return (
    <section className="pt-2 pb-20 px-4 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold leading-tight bg-[#2368AB] bg-clip-text text-transparent mb-6">
            Why Choose SyncNodeAI
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            In a world where data is your most valuable asset, choosing the
            right partner to unlock its full potential is paramount. At
            SyncNodeAI, we don't just offer services; we deliver transformative
            intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={reason.id}
                className={`group relative bg-gradient-to-br ${reason.bgGradient} rounded-2xl p-8 border border-gray-200 hover:scale-105 hover:shadow-lg transition-all duration-500 min-h-[320px] flex flex-col justify-between`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${reason.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>

                <div className="relative flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`text-4xl font-bold bg-gradient-to-r ${reason.gradient} bg-clip-text text-transparent`}>
                      0{reason.id}
                    </div>
                    <IconComponent className={`w-8 h-8 ${reason.iconColor}`} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {reason.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
