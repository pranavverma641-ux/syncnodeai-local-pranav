import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Reduce Operational Costs",
    description:
      "Our cloud optimization strategies and infrastructure automation typically reduce operational costs by 30-40% while improving system reliability and performance.",
  },
  {
    icon: "LineChart",
    title: "Accelerate Time-to-Market",
    description:
      "Modern DevOps practices and streamlined development workflows help you deploy new features and products up to 70% faster, keeping you ahead of competitors.",
  },
  {
    icon: "Wallet",
    title: "Maximize ROI",
    description:
      "Our data-driven approach transforms your technology investments into measurable business outcomes with clear metrics tied to revenue growth and operational efficiency.",
  },
  {
    icon: "Sparkle",
    title: "Scale With Confidence",
    description:
      "Built-in scalability ensures your technology infrastructure grows seamlessly with your business, eliminating performance bottlenecks during periods of expansion.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">BENEFITS</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technology That Drives Results
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Partner with SyncNodeAI to transform your IT infrastructure, optimize operations, and create competitive advantages through innovative technology solutions tailored to your business goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};