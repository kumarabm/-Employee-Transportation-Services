import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  rating: number;
}

export const EmployeeTestimonialsSection = (): JSX.Element => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "HR Director, TechCorp",
      content: "ENTREX has transformed our employee transportation. Reliable, safe, and cost-effective solution.",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Operations Manager, FinanceHub",
      content: "Excellent service with professional drivers. Our employees feel safe and arrive on time.",
      rating: 5
    },
    {
      id: 3,
      name: "Amit Patel",
      position: "CEO, StartupXYZ",
      content: "Great value for money. The real-time tracking gives us peace of mind about our team's safety.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 px-4 sm:px-8 lg:px-16 xl:px-24">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real testimonials from satisfied clients who trust us with their employee transportation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-8">
                <div className="flex mb-4" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <blockquote className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.position}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};