import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <ContactSection />
      <FAQSection />
    </div>
  );
}
