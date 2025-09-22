import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  bgColor: string;
}

export const EmployeeServicesSection = (): JSX.Element => {
  const serviceCards: ServiceCard[] = [
    {
      id: 1,
      title: "Seamless Integration",
      description: "Integrated with your existing systems for smooth operations and data flow",
      icon: "/figmaAssets/analytics.svg",
      bgColor: "bg-blue-100"
    },
    {
      id: 2,
      title: "Expert Chauffeurs",
      description: "Professional trained drivers with excellent knowledge of routes and safety",
      icon: "/figmaAssets/for-long-stay-clients--dedicated-chauffer---vehicle-for-undistur.svg", 
      bgColor: "bg-yellow-100"
    },
    {
      id: 3,
      title: "Safety Management",
      description: "Real-time safety monitoring and emergency response protocols for peace of mind",
      icon: "/figmaAssets/100--statutory-compliance-ensured.svg",
      bgColor: "bg-red-100"
    },
    {
      id: 4,
      title: "Transport Desk Management",
      description: "Centralized booking and management system with 24/7 operational support",
      icon: "/figmaAssets/best-pricing-among-the-premium-segment-service-providers.svg",
      bgColor: "bg-blue-100"
    },
    {
      id: 5,
      title: "Fleet Management",
      description: "Modern well-maintained vehicle fleet with GPS tracking and monitoring",
      icon: "/figmaAssets/luxury-and-well-maintained-vehicles.svg",
      bgColor: "bg-blue-100"
    },
    {
      id: 6,
      title: "Airport Transfers",
      description: "Reliable airport pickup and drop services with flight monitoring capabilities",
      icon: "/figmaAssets/vehicles-with-average-age-of-less-than-3-years.svg",
      bgColor: "bg-yellow-100"
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 px-4 sm:px-8 lg:px-16 xl:px-24 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive employee transportation solutions designed to meet your corporate needs
            with safety, reliability, and cost-effectiveness at the forefront.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((card) => (
            <Card key={card.id} className="text-center hover:shadow-lg transition-shadow duration-300 bg-white border border-gray-200">
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center">
                  <div className={`w-16 h-16 ${card.bgColor} rounded-2xl flex items-center justify-center p-3`}>
                    <img 
                      src={card.icon} 
                      alt={card.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <CardTitle className="text-xl mb-4 text-gray-900 text-center">{card.title}</CardTitle>
                <p className="text-gray-600 leading-relaxed text-center text-sm">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};