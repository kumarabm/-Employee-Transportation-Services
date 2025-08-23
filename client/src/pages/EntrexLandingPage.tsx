import React from "react";
import { Link } from "react-router-dom";
import { CallToActionSection } from "./sections/CallToActionSection";
import { CertificationsSection } from "./sections/CertificationsSection";
import { ContactUsSection } from "./sections/ContactUsSection";
import { FAQsSection } from "./sections/FAQsSection";
import { HeroSection } from "./sections/HeroSection";
import { InCarProvisionsSection } from "./sections/InCarProvisionsSection";
import { NewsUpdatesSection } from "./sections/NewsUpdatesSection";
import { OurServicesSection } from "./sections/OurServicesSection";
import { TrustedBySection } from "./sections/TrustedBySection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";

const navigationItems = [
  "About Us",
  "Services",
  "Tour Packages",
  "Luxury Car Rentals",
  "Clients",
  "Contact Us",
];

const placeholderBoxes = Array(10).fill(null);

export const EntrexLandingPage = (): JSX.Element => {
  return (
    <div className="bg-[#f2f2f2] w-full min-h-screen">
      {/* Top Contact Bar */}
      <div className="w-full h-[42px] bg-[#ffffff]">
        <div className="flex w-full max-w-[1677px] items-start justify-between mx-auto pt-3 px-[120px]">
          <div className="[font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
            bookings@entrex.in
          </div>
          <div className="[font-family:'Inter',Helvetica] font-medium text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
            +91 44 4953 0055&nbsp;&nbsp;|&nbsp;&nbsp;+91 98400
            27990&nbsp;&nbsp;|&nbsp;&nbsp;+91 91767 81444
          </div>
        </div>
      </div>

      {/* Hero Header with Navigation */}
      <div className="w-full h-[898px] bg-[url(/figmaAssets/side-view-man-holding-suitcase--1--1.png)] bg-[100%_100%] relative">
        <div className="flex w-full max-w-[1658px] items-start justify-between mx-auto pt-3 px-[129px]">
          <Link to="/entrex-landing-page">
            <img
              className="w-[211.86px] h-20 object-cover"
              alt="Background"
              src="/figmaAssets/background--3--1.png"
            />
          </Link>

          <div className="w-[863px] h-[92px] relative">
            <div className="flex w-[853px] items-start justify-end gap-[50px] absolute top-[35px] left-[5px]">
              {navigationItems.map((item, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2.5 flex-[0_0_auto]"
                >
                  <div className="[font-family:'Inter',Helvetica] font-medium text-[#ffffff] text-lg tracking-[0] leading-[normal] whitespace-nowrap">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="w-full">
        <TrustedBySection />
        <NewsUpdatesSection />
        <ContactUsSection />
        <CertificationsSection />
        <OurServicesSection />

        {/* Middle Content Area */}
        <div className="flex flex-col items-center gap-[22px] w-full">
          <img
            className="w-full h-[1365.33px]"
            alt="Header"
            src="/figmaAssets/header.svg"
          />

          <div className="flex flex-wrap w-full max-w-[1669.18px] items-start justify-center gap-[34px_57.15px] px-4">
            {placeholderBoxes.map((_, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center gap-[10.78px] px-[21.57px] py-[10.78px] rounded-[10.78px] border-[1.08px] border-dashed border-[#00000066]"
              />
            ))}
          </div>
        </div>

        <WhyChooseUsSection />
        <HeroSection />
        <CallToActionSection />
        <FAQsSection />
        <InCarProvisionsSection />

        {/* Footer */}
        <img
          className="w-full h-[666px]"
          alt="Footer"
          src="/figmaAssets/footer-1.png"
        />
      </div>
    </div>
  );
};
