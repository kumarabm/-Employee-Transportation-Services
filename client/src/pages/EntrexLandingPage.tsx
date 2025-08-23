import React, { useState } from "react";
import { Link } from "wouter";
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
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services", hasMenu: true },
  { label: "Tour Packages", href: "#tour-packages" },
  { label: "Luxury Car Rentals", href: "#luxury-rentals" },
  { label: "Clients", href: "#clients" },
  { label: "Contact Us", href: "#contact" },
];

const servicesMenuItems = [
  { label: "Airport Transfers", href: "#airport-transfers" },
  { label: "Corporate Travel", href: "#corporate-travel" },
  { label: "City Tours", href: "#city-tours" },
  { label: "Wedding Services", href: "#wedding-services" },
  { label: "Event Transportation", href: "#event-transportation" },
  { label: "Long Distance Travel", href: "#long-distance" },
];

const placeholderBoxes = Array(10).fill(null);

const EntrexLandingPage = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#f2f2f2] w-full min-h-screen">
      {/* Top Contact Bar */}
      <div className="w-full h-auto py-2 lg:h-[42px] bg-white">
        <div className="flex flex-col lg:flex-row w-full max-w-screen-3xl items-center justify-between mx-auto lg:pt-3 px-4 lg:px-16 xl:px-24 2xl:px-32 3xl:px-[120px] gap-2 lg:gap-0">
          <div className="font-medium text-black text-sm lg:text-base tracking-[0] leading-[normal]">
            bookings@entrex.in
          </div>
          <div className="font-medium text-black text-sm lg:text-base tracking-[0] leading-[normal] text-center lg:text-right">
            <span className="hidden lg:inline">+91 44 4953 0055&nbsp;&nbsp;|&nbsp;&nbsp;+91 98400 27990&nbsp;&nbsp;|&nbsp;&nbsp;+91 91767 81444</span>
            <span className="lg:hidden">+91 44 4953 0055<br />+91 98400 27990</span>
          </div>
        </div>
      </div>

      {/* Hero Header with Navigation */}
      <div className="w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[898px] bg-[url(/figmaAssets/side-view-man-holding-suitcase--1--1.png)] bg-cover bg-center bg-no-repeat relative">
        {/* Navigation Header */}
        <div className="flex w-full max-w-screen-2xl items-center justify-between mx-auto pt-3 px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-[129px] relative z-10">
          <Link href="/">
            <img
              className="w-[150px] sm:w-[180px] lg:w-[211.86px] h-12 sm:h-16 lg:h-20 object-cover"
              alt="Entrex Logo"
              src="/figmaAssets/background--3--1.png"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8 2xl:gap-[50px]">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                data-testid={`nav-${item.label.toLowerCase().replace(' ', '-')}`}
              >
                <Link 
                  href={item.href}
                  className="font-medium text-white text-lg hover:text-[#f3aa45] transition-colors duration-300 whitespace-nowrap"
                >
                  {item.label}
                </Link>
                
                {/* Mega Menu for Services */}
                {item.hasMenu && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[300px] bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
                      <div className="grid gap-3">
                        {servicesMenuItems.map((menuItem, idx) => (
                          <Link
                            key={idx}
                            href={menuItem.href}
                            className="block p-3 rounded-md hover:bg-gray-50 text-gray-700 hover:text-[#ed2628] transition-colors"
                            data-testid={`service-${menuItem.label.toLowerCase().replace(' ', '-')}`}
                          >
                            {menuItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-button"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md z-30" data-testid="mobile-menu">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item, index) => (
                <div key={index}>
                  <Link 
                    href={item.href}
                    className="block py-3 px-4 text-white hover:text-[#f3aa45] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`mobile-nav-${item.label.toLowerCase().replace(' ', '-')}`}
                  >
                    {item.label}
                  </Link>
                  {item.hasMenu && (
                    <div className="ml-6 space-y-2">
                      {servicesMenuItems.map((menuItem, idx) => (
                        <Link
                          key={idx}
                          href={menuItem.href}
                          className="block py-2 px-4 text-gray-300 hover:text-white text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                          data-testid={`mobile-service-${menuItem.label.toLowerCase().replace(' ', '-')}`}
                        >
                          {menuItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 lg:px-16 pt-20 lg:pt-0">
          <div className="max-w-[796px] text-center">
            <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 [text-shadow:0px_4px_27.7px_#00000040] leading-tight">
              Premium Chauffeur Services for Every Journey
            </h1>
            <p className="text-white font-medium text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-[602px] mx-auto leading-relaxed">
              From corporate travel to airport transfers, ENTREX ensures a safe, punctual, and comfortable ride—every time.
            </p>
            <button 
              className="bg-gradient-to-r from-[#f3aa45] to-[#ed2628] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base hover:opacity-90 transition-opacity shadow-lg"
              data-testid="call-us-button"
            >
              Call Us Now
            </button>
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

export default EntrexLandingPage;
