"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Michael Chen",
    userName: "CTO, HealthTech Innovations",
    comment:
      "SyncNodeAI transformed our legacy infrastructure into a robust cloud-native platform. Their DevOps expertise reduced our deployment time by 70% and significantly improved system reliability. Their team's technical knowledge and commitment to our success exceeded our expectations.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sarah Rodriguez",
    userName: "VP of Engineering, FinanceStream",
    comment:
      "Working with SyncNodeAI on our data pipeline modernization was a game-changer. Their data engineers designed a scalable architecture that handles our analytics workloads 5x more efficiently. The insights we've gained have directly contributed to our 28% revenue growth this year.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "David Williams",
    userName: "Director of IT, Global Retail Solutions",
    comment:
      "The AWS migration led by SyncNodeAI was seamless and ahead of schedule. Their team's deep cloud expertise helped us optimize costs while improving performance. Post-migration support has been exceptional, with their team responding quickly to any challenges that arise.",
    rating: 4.8,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Jennifer Patel",
    userName: "Head of Product Development, EdTech Pioneers",
    comment:
      "SyncNodeAI's full-stack development team delivered our educational platform with impressive speed and quality. Their developers collaborated closely with our product team, providing valuable insights that enhanced the final product. User adoption has exceeded our projections by 40%.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Robert Anderson",
    userName: "Engineering Manager, LogisticsPlus",
    comment:
      "The training program SyncNodeAI created for our development team was transformative. Their hands-on approach and real-world scenarios accelerated our team's cloud competency. Within weeks, we were implementing best practices that had immediate positive impacts on our operations.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sophia Lee",
    userName: "DevOps Lead, InsureTech Solutions",
    comment:
      "Implementing CI/CD pipelines with SyncNodeAI revolutionized our development process. Their DevOps engineers understood our unique challenges and designed automation workflows that reduced errors by 85%. Their ongoing support ensures we continue to optimize our delivery pipeline.",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear What Our Clients Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
