import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LucideIcon,
  Cloud,
  Settings,
  PenLine,
  BrainCog,
  Layers,
  Rocket,
} from "lucide-react";

interface ServiceProps {
  title: string;
  icon: LucideIcon;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Cloud Infrastructure Optimization",
    description:
      "Maximize performance while reducing costs through our expert cloud architecture assessment, resource rightsizing, and implementation of cost-saving strategies across AWS, GCP, and Azure platforms.",
    icon: Cloud,
  },
  {
    title: "DevOps Automation",
    description:
      "Streamline your development lifecycle with automated CI/CD pipelines, infrastructure as code, and containerization solutions that reduce deployment time and improve software quality.",
    icon: Settings,
  },
  {
    title: "Data Pipeline Engineering",
    description:
      "Build robust, scalable data workflows that transform raw data into actionable insights through our ETL/ELT pipeline development and data warehouse implementation services.",
    icon: PenLine,
  },
  {
    title: "AI & ML Integration",
    description:
      "Leverage the power of artificial intelligence and machine learning to create predictive models, automate processes, and discover hidden patterns in your business data.",
    icon: BrainCog,
  },
  {
    title: "Full-Stack Application Development",
    description:
      "Create modern, responsive applications with our end-to-end development services spanning frontend (React, Angular) and backend (Node.js, Java, Python) technologies.",
    icon: Layers,
  },
  {
    title: "Technical Career Acceleration",
    description:
      "Upskill your team or advance your personal career with our specialized training programs and hands-on job support services led by industry veterans.",
    icon: Rocket,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-12 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-lg font-medium text-blue-600 tracking-widest uppercase">
          Services
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-6">
          Elevate Your Technology
        </h3>
        <p className="md:w-2/3 lg:w-1/2 mx-auto text-gray-600 text-lg">
          From cloud infrastructure and data engineering to full-stack development
          and AI integration, we deliver the technical expertise to transform your
          business.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-7xl mx-auto">
        {serviceList.map(({ title, description, icon: Icon }) => (
          <Card
            key={title}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full"
          >
            <CardHeader className="p-6">
              <div className="mb-6 flex justify-center">
                <div className="bg-blue-100 p-4 rounded-full text-blue-600">
                  <Icon size={32} className="transition-transform duration-300 group-hover:scale-110" />
                </div>
              </div>
              <CardTitle className="text-xl font-semibold text-center text-slate-800 mb-3">
                {title}
              </CardTitle>
              <CardDescription className="text-sm text-center text-gray-600">
                {description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};