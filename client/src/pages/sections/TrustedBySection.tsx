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
    <section className="flex flex-col w-full items-center gap-[60px] relative shadow-[0px_4px_50.2px_#000000a6]">
      <div className="flex flex-col items-start gap-3 relative w-full max-w-[796px]">
        <img
          className="relative w-[116px] h-[76px]"
          alt="Hpgauztn"
          src="/figmaAssets/h3pga3uztn--1--1.png"
        />

        <div className="flex flex-col items-start gap-6 relative w-full">
          <h1 className="relative w-full mt-[-1.00px] [text-shadow:0px_4px_27.7px_#00000040] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#ffffff] text-6xl tracking-[0] leading-[normal]">
            Premium Chauffeur Services for Every Journey
          </h1>

          <p className="relative w-full max-w-[602px] [font-family:'Inter',Helvetica] font-medium text-[#ffffff] text-lg tracking-[0] leading-[normal]">
            From corporate travel to airport transfers, ENTREX ensures a safe,
            punctual, and comfortable ride—every time.
          </p>

          <Button className="flex w-[184px] h-[47px] items-center justify-center gap-2.5 px-5 py-[15px] relative rounded-[120px] bg-[linear-gradient(270deg,rgba(243,170,69,1)_0%,rgba(237,38,40,1)_100%)] border-0 hover:opacity-90 transition-opacity">
            <span className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#ffffff] text-base text-center tracking-[0.48px] leading-[17px] whitespace-nowrap">
              Call Us Now
            </span>
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap w-full max-w-[772px] items-start gap-[99px_110px] relative justify-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="inline-flex flex-col items-start relative"
          >
            <div className="relative w-fit mt-[-1.25px] [font-family:'Inter',Helvetica] font-medium text-[#ffffff] text-[39.9px] tracking-[0] leading-[39.9px]">
              <span className="leading-[30.0px]">
                {feature.title}
                <br />
              </span>
              <span className="text-xl leading-[30.0px]">
                {feature.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
