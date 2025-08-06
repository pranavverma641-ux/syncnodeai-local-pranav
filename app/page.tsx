import ServicesCarousel from "@/components/layout/sections/hero";
import ProjectsShowcase from "@/components/layout/sections/project";
import WhatWeOfferSection from "@/components/layout/sections/features";

export default function HomePage() {
  return (
    <>
      <ServicesCarousel />
      <ProjectsShowcase />
      <WhatWeOfferSection />
    </>
  );
}