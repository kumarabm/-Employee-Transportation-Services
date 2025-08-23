import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const ContactUsSection = (): JSX.Element => {
  const features = [
    {
      icon: "/figmaAssets/vuesax-bold-award.svg",
      title: "Premium Chauffeurs",
      description:
        "All our drivers are handpicked, background-verified, professionally dressed, and trained for top-tier customer service.",
      position: "left-top",
    },
    {
      icon: "/figmaAssets/vuesax-bold-magic-star.svg",
      title: "Well-Maintained Vehicles",
      description:
        "Our fleet is serviced regularly, sanitized daily, and equipped with modern amenities for a smooth and safe ride.",
      position: "left-middle",
    },
    {
      icon: "/figmaAssets/vuesax-bold-gps.svg",
      title: "Real-Time Tracking",
      description:
        "We offer GPS-enabled rides so you—and your loved ones—can track your journey with full transparency.",
      position: "left-bottom",
    },
    {
      icon: "/figmaAssets/vuesax-bold-dollar-square.svg",
      title: "Transparent Pricing",
      description:
        "No hidden charges. Transparent fare structure with real-time billing through our app.",
      position: "right-top",
    },
    {
      icon: "/figmaAssets/vuesax-bold-medal.svg",
      title: "Punctual & Reliable",
      description:
        "Time is valuable. Our chauffeurs arrive ahead of schedule and follow optimized routes for timely arrivals.",
      position: "right-middle",
    },
    {
      icon: "/figmaAssets/vuesax-bold-24-support.svg",
      title: "24×7 Dedicated Support",
      description:
        "Our operations team is available around the clock to assist with bookings, changes, or emergencies.",
      position: "right-bottom",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-2.5 relative">
      <div className="relative w-full max-w-[1584px]">
        <div className="flex flex-col items-center gap-4 mb-8 lg:mb-16 px-4">
          <div className="relative">
            <div className="absolute w-[150px] sm:w-[200px] lg:w-[250px] h-[20px] sm:h-[30px] lg:h-[38px] top-[15px] sm:top-[20px] lg:top-[31px] left-[50%] transform -translate-x-1/2 lg:left-[289px] lg:transform-none -rotate-3 bg-[linear-gradient(270deg,rgba(243,170,69,1)_0%,rgba(237,38,40,1)_100%)] opacity-90" />
            <h2 className="relative font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] text-center tracking-[0] leading-tight lg:leading-[59.4px]">
              Why ENTREX?
            </h2>
          </div>
          <p className="font-medium text-black text-sm sm:text-base text-center tracking-[0] leading-relaxed max-w-[693px] px-4">
            Trusted by hundreds of travelers and corporates across India for a
            premium ride experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
          <div className="flex flex-col gap-8">
            {features
              .filter((feature) => feature.position.startsWith("left"))
              .map((feature, index) => (
                <Card
                  key={`left-${index}`}
                  className="border-none shadow-none bg-transparent"
                >
                  <CardContent className="flex flex-col items-center lg:items-end gap-3 p-4 lg:p-0">
                    <div className="flex items-center lg:items-end gap-2">
                      <img
                        className="w-8 h-8 lg:w-9 lg:h-9"
                        alt={feature.title}
                        src={feature.icon}
                      />
                      <h3 className="font-bold text-gray-900 text-lg lg:text-2xl tracking-[0] leading-[26px] text-center lg:text-right">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="w-full max-w-96 font-normal text-neutral-900 text-sm lg:text-base text-center lg:text-right leading-6 tracking-[0]">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
          </div>

          <div className="flex justify-center order-first lg:order-none">
            <img
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[864px] h-auto"
              alt="ENTREX Premium Vehicle"
              src="/figmaAssets/362953400-5496ea17-8eb7-4e53-b7b9-f5c434afef49-1.png"
            />
          </div>

          <div className="flex flex-col gap-8">
            {features
              .filter((feature) => feature.position.startsWith("right"))
              .map((feature, index) => (
                <Card
                  key={`right-${index}`}
                  className="border-none shadow-none bg-transparent"
                >
                  <CardContent className="flex flex-col items-center lg:items-start gap-3 p-4 lg:p-0">
                    <div className="flex items-center lg:items-end gap-2">
                      <img
                        className="w-8 h-8 lg:w-9 lg:h-9"
                        alt={feature.title}
                        src={feature.icon}
                      />
                      <h3 className="font-bold text-gray-900 text-lg lg:text-2xl tracking-[0] leading-[26px] text-center lg:text-left">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="w-full max-w-96 font-normal text-neutral-900 text-sm lg:text-base text-center lg:text-left leading-6 tracking-[0]">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
