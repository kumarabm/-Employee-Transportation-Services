import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const OurServicesSection = (): JSX.Element => {
  const services = [
    {
      icon: "/figmaAssets/div-12.svg",
      label: "Water bottle",
    },
    {
      icon: "/figmaAssets/div-5.svg",
      label: "Newspaper",
    },
    {
      icon: "/figmaAssets/div-2.svg",
      label: "Tissue Paper pouch",
    },
    {
      icon: "/figmaAssets/div-9.svg",
      label: "Cookies",
    },
    {
      icon: "/figmaAssets/div.svg",
      label: "Writing slip & Pen",
    },
    {
      icon: "/figmaAssets/div-8.svg",
      label: "Ice Box (Based on request)",
    },
    {
      icon: "/figmaAssets/div-6.svg",
      label: "Fire Extinguisher Kit",
    },
    {
      icon: "/figmaAssets/div-11.svg",
      label: "Perfume",
    },
    {
      icon: "/figmaAssets/div-4.svg",
      label: "Hand-phone Charger",
    },
    {
      icon: "/figmaAssets/div-10.svg",
      label: "GPS Tracking",
    },
    {
      icon: "/figmaAssets/div-7.svg",
      label: "Umbrella",
    },
    {
      icon: "/figmaAssets/div-3.svg",
      label: "Torch Light",
    },
    {
      icon: "/figmaAssets/div-1.svg",
      label: "First Aid Kit",
    },
  ];

  return (
    <section className="relative w-full py-8 lg:py-16 px-4">
      <div className="flex flex-col items-center gap-4 lg:gap-7">
        <header className="flex flex-col items-center gap-4 w-full">
          <h2 className="font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] text-center tracking-[0] leading-tight lg:leading-[59.4px]">
            In-car Provisions
          </h2>

          <p className="font-medium text-black text-sm sm:text-base text-center tracking-[0] leading-relaxed max-w-2xl px-4">
            Every ENTREX ride comes with thoughtful in-car provisions to ensure
            your comfort, safety, and satisfaction.
          </p>
        </header>

        <div className="flex flex-col items-center gap-8 lg:gap-[71px] w-full mt-8 lg:mt-[60px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-x-16 lg:gap-y-12 max-w-[1525px] w-full justify-items-center px-4">
            {services.map((service, index) => (
              <Card
                key={index}
                className="flex flex-col w-full max-w-[220px] sm:max-w-[250px] h-[100px] sm:h-[129px] items-center justify-center rounded-[20px] border-2 border-solid border-[#3535351a] bg-transparent"
              >
                <CardContent className="flex flex-col items-center justify-center p-2 lg:p-0 gap-1 lg:gap-2">
                  <img
                    className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[84.76px] lg:h-[84.76px]"
                    alt={service.label}
                    src={service.icon}
                  />

                  <div className="font-normal text-[#060606] text-sm sm:text-base lg:text-lg tracking-[0] leading-[27.0px] text-center">
                    {service.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button className="flex items-center justify-center gap-2.5 px-6 sm:px-8 lg:px-[43px] py-3 lg:py-[15px] h-[40px] sm:h-[45px] lg:h-[49px] w-full max-w-[220px] sm:max-w-[268px] rounded-[140px] bg-[linear-gradient(270deg,rgba(243,170,69,1)_0%,rgba(237,38,40,1)_100%)] hover:opacity-90 transition-opacity">
            <span className="font-medium text-[#ffffff] text-sm sm:text-base text-center tracking-[0] leading-[17.0px]">
              Book Your Journey Now
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
