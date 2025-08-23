import React from "react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Verified",
    subtitle: "Chauffeurs",
  },
  {
    title: "Real-time",
    subtitle: "Tracking",
  },
  {
    title: "24x7",
    subtitle: "Support",
  },
];

export const TrustedBySection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-[60px] relative shadow-[0px_4px_50.2px_#000000a6] py-16 px-4 bg-gradient-to-r from-[#f3aa45] via-[#ed8d2c] to-[#ed2628]">
      <div className="flex flex-col items-center lg:items-start gap-3 relative w-full max-w-[796px] text-center lg:text-left">
        <img
          className="relative w-[80px] sm:w-[100px] lg:w-[116px] h-[52px] sm:h-[65px] lg:h-[76px] object-contain"
          alt="Entrex Badge"
          src="/figmaAssets/h3pga3uztn--1--1.png"
        />

        <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-6 relative w-full">
          <h1 className="relative w-full mt-[-1.00px] [text-shadow:0px_4px_27.7px_#00000040] font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[0] leading-tight">
            Premium Chauffeur Services for Every Journey
          </h1>

          <p className="relative w-full max-w-[602px] font-medium text-white text-sm sm:text-base lg:text-lg tracking-[0] leading-relaxed">
            From corporate travel to airport transfers, ENTREX ensures a safe,
            punctual, and comfortable ride—every time.
          </p>

          <Button className="flex w-[150px] sm:w-[184px] h-[40px] sm:h-[47px] items-center justify-center gap-2.5 px-4 sm:px-5 py-3 sm:py-[15px] relative rounded-full bg-[linear-gradient(270deg,rgba(243,170,69,1)_0%,rgba(237,38,40,1)_100%)] border-0 hover:opacity-90 transition-opacity shadow-lg">
            <span className="relative w-fit mt-[-1.00px] font-medium text-white text-sm sm:text-base text-center tracking-[0.48px] leading-[17px] whitespace-nowrap">
              Call Us Now
            </span>
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap w-full max-w-[772px] items-start gap-[40px_50px] sm:gap-[60px_80px] lg:gap-[99px_110px] relative justify-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="inline-flex flex-col items-center lg:items-start relative text-center lg:text-left"
            data-testid={`feature-${feature.title.toLowerCase()}`}
          >
            <div className="relative w-fit mt-[-1.25px] font-medium text-white text-[24px] sm:text-[32px] lg:text-[39.9px] tracking-[0] leading-[30px] lg:leading-[39.9px]">
              <span className="block">
                {feature.title}
              </span>
              <span className="text-base sm:text-lg lg:text-xl leading-[30.0px]">
                {feature.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
