import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const CertificationsSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("corporate");

  const serviceCards = [
    {
      id: 1,
      title: "Employee Commute Solutions",
      description:
        "Daily transportation for corporate staff with fixed routes, real-time tracking, and punctual pickups.",
      backgroundImage: "url(../figmaAssets/bento-card.png)",
      width: "flex-[1_1_65%]",
      minWidth: "min-w-[600px]",
    },
    {
      id: 2,
      title: "Executive Chauffeur Service",
      description:
        "Suited, trained chauffeurs with luxury vehicles for directors, clients, and VIP executives.",
      backgroundImage: "url(../figmaAssets/bento-card-1.png)",
      width: "flex-[1_1_35%]",
      minWidth: "min-w-[350px]",
    },
    {
      id: 3,
      title: "Event & Conference Travel",
      description:
        "Coordinated fleet for business meetings, offsites, seminars, and corporate gatherings—managed end-to-end.",
      backgroundImage: "url(../figmaAssets/bento-card-2.png)",
      width: "flex-[1_1_32%]",
      minWidth: "min-w-[320px]",
    },
    {
      id: 4,
      title: "Airport Transfers",
      description:
        "Timely drop-offs and pickups for your team and guests from all major airports with live flight monitoring.",
      backgroundImage: "url(../figmaAssets/bento-card-3.png)",
      width: "flex-[1_1_32%]",
      minWidth: "min-w-[320px]",
    },
    {
      id: 5,
      title: "Transport Desk Management",
      description:
        "On-demand ride management with 24×7 support, live dashboards, and centralized control from our app or portal.",
      backgroundImage: "url(../figmaAssets/bento-card-4.png)",
      width: "flex-[1_1_36%]",
      minWidth: "min-w-[350px]",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-[78px] relative">
      <div className="flex flex-col max-w-[693px] items-center gap-7 relative">
        <div className="flex flex-col items-center gap-4 w-full relative">
          <h2 className="[font-family:'Inter',Helvetica] font-bold text-black text-[56px] text-center tracking-[0] leading-[59.4px]">
            Our Services
          </h2>

          <p className="[font-family:'Inter',Helvetica] font-medium text-black text-base text-center tracking-[0] leading-[17.0px]">
            Premium travel solutions tailored for businesses and individuals
            across India.
          </p>
        </div>

        <div className="relative w-full max-w-[469px]">
          <div className="relative w-full h-14 bg-[#ececec] rounded-[140px] p-1">
            <div className="flex h-full">
              <Button
                variant="ghost"
                className={`flex-1 h-auto rounded-[140px] px-[43px] py-[15px] transition-all duration-200 ${
                  activeTab === "corporate"
                    ? "bg-[linear-gradient(270deg,rgba(243,170,69,1)_0%,rgba(237,38,40,1)_100%)] text-white"
                    : "bg-transparent text-black hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab("corporate")}
              >
                <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-base text-center tracking-[0] leading-[17.0px] whitespace-nowrap">
                  Corporate Solutions
                </span>
              </Button>

              <Button
                variant="ghost"
                className={`flex-1 h-auto rounded-[140px] px-[43px] py-[15px] transition-all duration-200 ${
                  activeTab === "personal"
                    ? "bg-[linear-gradient(270deg,rgba(243,170,69,1)_0%,rgba(237,38,40,1)_100%)] text-white"
                    : "bg-transparent text-black hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab("personal")}
              >
                <span className="[font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-[17.0px] whitespace-nowrap">
                  Personal / Retail Rides
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-end gap-[44px_45px] w-full">
        {serviceCards.map((card) => (
          <Card
            key={card.id}
            className={`${card.width} ${card.minWidth} h-[420px] rounded-[22.23px] overflow-hidden border-[1.4px] border-solid border-[#eaecf0] bg-transparent`}
            style={{
              background: `linear-gradient(180deg,rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.6) 55%,rgba(0,0,0,0.8) 100%), ${card.backgroundImage} 50% 50% / cover`,
            }}
          >
            <CardContent className="flex flex-col justify-end h-full p-0">
              <div className="flex flex-col items-start gap-[11.2px] pt-[44.8px] pb-[22.4px] px-[44.8px]">
                <img
                  className="w-[33.6px] h-[33.6px]"
                  alt="Analytics"
                  src="/figmaAssets/analytics.svg"
                />

                <h3 className="[font-family:'Manrope',Helvetica] font-semibold text-[#ffffff] text-[28px] tracking-[0] leading-[42.0px]">
                  {card.title}
                </h3>

                <p className="[font-family:'Manrope',Helvetica] font-medium text-[#ffffff] text-[19.6px] tracking-[0] leading-[28.0px]">
                  {card.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
