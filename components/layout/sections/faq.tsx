"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
  category: "Services" | "Support" | "Training";
}

const FAQList: FAQProps[] = [
  {
    category: "Services",
    question: "What services does SyncNodeAI offer?",
    answer:
      "SyncNodeAI provides comprehensive technology services including cloud solutions (AWS, GCP, Azure), DevOps excellence, data engineering & analytics, full-stack development, and AI/ML implementation. We also offer specialized training programs and career development support for technology professionals.",
    value: "item-1",
  },
  {
    category: "Services",
    question: "How can SyncNodeAI help with our cloud migration?",
    answer:
      "Our team of experienced cloud architects will assess your current infrastructure, design a tailored migration strategy, and implement a secure, scalable cloud environment on AWS, GCP, or Azure platforms.",
    value: "item-2",
  },
  {
    category: "Training",
    question: "What training programs do you offer for technology professionals?",
    answer:
      "We offer training programs on cloud certifications, data engineering, full-stack development, DevOps, algorithms & data structures, and AI/ML. Sessions are led by industry practitioners with 15+ years of experience.",
    value: "item-3",
  },
  {
    category: "Support",
    question: "What does your job support service include?",
    answer:
      "We provide hands-on technical help, project-based learning, problem-solving guidance, on-demand consultation, and personalized feedback to bridge the gap between training and practical workplace application.",
    value: "item-4",
  },
  {
    category: "Services",
    question: "How does SyncNodeAI approach data engineering projects?",
    answer:
      "We design data architectures, implement ETL/ELT pipelines, and build data warehousing and visualization solutions that turn raw data into business intelligence.",
    value: "item-5",
  },
  {
    category: "Services",
    question: "What makes SyncNodeAI different from other technology service providers?",
    answer:
      "We stand out for our 15+ years of experience, end-to-end customized solutions, innovation mindset, and a strong focus on measurable success.",
    value: "item-6",
  },
  {
    category: "Services",
    question: "What technologies and programming languages do you specialize in?",
    answer:
      "Our stack includes AWS, GCP, Azure, Docker, Kubernetes, Jenkins, Python, Java, JavaScript, React, Node.js, SQL/NoSQL, data tools, and AI/ML frameworks.",
    value: "item-7",
  },
  {
    category: "Support",
    question: "How do you ensure knowledge transfer to our internal teams?",
    answer:
      "We deliver documentation, hands-on training, collaborative workflows, and tailored learning resources to empower your internal teams for long-term success.",
    value: "item-8",
  },
];

// Group FAQs by category
const groupedFAQs = FAQList.reduce((groups, faq) => {
  if (!groups[faq.category]) groups[faq.category] = [];
  groups[faq.category].push(faq);
  return groups;
}, {} as Record<string, FAQProps[]>);

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24 sm:py-32 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-lg text-[#2368AB] mb-2 tracking-wider font-semibold uppercase">
            FAQs
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Common Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get answers to frequently asked questions about our services and processes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          {Object.entries(groupedFAQs).map(([category, faqs], sectionIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-slate-700 mb-4 border-l-4 border-[#2368AB] pl-4">
                {category}
              </h3>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map(({ question, answer, value }, idx) => (
                  <AccordionItem
                    key={value}
                    value={value}
                    className="bg-white border border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left text-slate-800 hover:text-cyan-600 py-6 text-lg font-semibold [&[data-state=open]]:text-cyan-600">
                      {question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
                      {answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
