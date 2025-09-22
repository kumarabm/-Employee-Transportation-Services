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
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "#services", hasMenu: true },
  { label: "Tour Packages", href: "#tour-packages" },
  { label: "Luxury Car Rentals", href: "#luxury-rentals" },
  { label: "Clients", href: "/clients" },
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

        {/* Hero Content - Two Column Layout */}
        <div className="absolute inset-0 flex items-center px-4 sm:px-8 lg:px-16 pt-20 lg:pt-0">
          <div className="w-full max-w-screen-2xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-full justify-center">
              
              {/* Left Column - Content */}
              <div className="text-white space-y-4 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
                {/* Car Icon */}
                <div className="flex items-center justify-center lg:justify-start">
                  <svg className="w-12 h-8 lg:w-16 lg:h-10 text-white fill-current" viewBox="0 0 64 40" data-testid="car-icon">
                    <path d="M8 24h4v8H8v-8zm40 0h4v8h-4v-8zM4 16l8-8h40l8 8v16h-8v8H12v-8H4V16z"/>
                  </svg>
                </div>

                {/* Main Heading */}
                <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl [text-shadow:0px_4px_27.7px_#00000040] leading-tight">
                  Premium Chauffeur<br className="hidden lg:block" /><span className="lg:hidden"> </span>Services for Every Journey
                </h1>

                {/* Description */}
                <p className="font-medium text-sm sm:text-base lg:text-lg leading-relaxed max-w-[400px] mx-auto lg:mx-0">
                  From corporate travel to airport transfers, ENTREX ensures a safe, punctual, and comfortable ride—every time.
                </p>

                {/* Call to Action Button */}
                <button 
                  className="bg-gradient-to-r from-[#f3aa45] to-[#ed2628] text-white px-6 py-3 rounded-full font-medium text-base hover:opacity-90 transition-opacity shadow-lg"
                  data-testid="call-us-button"
                >
                  Call Us Now
                </button>

                {/* Features */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8 xl:gap-12 pt-4">
                  <div className="text-center lg:text-left">
                    <div className="font-bold text-base lg:text-lg">Verified</div>
                    <div className="text-xs lg:text-sm opacity-90">Chauffeurs</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="font-bold text-base lg:text-lg">Real-time</div>
                    <div className="text-xs lg:text-sm opacity-90">Tracking</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="font-bold text-base lg:text-lg">24×7</div>
                    <div className="text-xs lg:text-sm opacity-90">Support</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Booking Form */}
              <div className="bg-gradient-to-br from-[#ed2628] to-[#f3aa45] rounded-2xl p-6 lg:p-8 shadow-xl w-full max-w-md lg:max-w-none order-1 lg:order-2">
                <h2 className="text-white font-bold text-xl lg:text-2xl mb-6 text-center">
                  Book Your Ride Instantly
                </h2>
                
                <form className="space-y-4" data-testid="booking-form">
                  {/* Name and Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3 rounded-lg bg-white/90 border-0 placeholder-gray-600 text-gray-800 focus:ring-2 focus:ring-white/50 outline-none"
                      data-testid="input-full-name"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-lg bg-white/90 border-0 placeholder-gray-600 text-gray-800 focus:ring-2 focus:ring-white/50 outline-none"
                      data-testid="input-phone"
                    />
                  </div>

                  {/* Email */}
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-white/90 border-0 placeholder-gray-600 text-gray-800 focus:ring-2 focus:ring-white/50 outline-none"
                    data-testid="input-email"
                  />

                  {/* Date and Time Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <select 
                      className="w-full px-4 py-3 rounded-lg bg-white/90 border-0 text-gray-600 focus:ring-2 focus:ring-white/50 outline-none"
                      data-testid="select-date"
                    >
                      <option>Select Date</option>
                      <option>Today</option>
                      <option>Tomorrow</option>
                    </select>
                    <select 
                      className="w-full px-4 py-3 rounded-lg bg-white/90 border-0 text-gray-600 focus:ring-2 focus:ring-white/50 outline-none"
                      data-testid="select-time"
                    >
                      <option>Select Time</option>
                      <option>09:00 AM</option>
                      <option>10:00 AM</option>
                      <option>11:00 AM</option>
                    </select>
                  </div>

                  {/* Adults and Children Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <select 
                      className="w-full px-4 py-3 rounded-lg bg-white/90 border-0 text-gray-600 focus:ring-2 focus:ring-white/50 outline-none"
                      data-testid="select-adults"
                    >
                      <option>Adults</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                    <select 
                      className="w-full px-4 py-3 rounded-lg bg-white/90 border-0 text-gray-600 focus:ring-2 focus:ring-white/50 outline-none"
                      data-testid="select-children"
                    >
                      <option>Children</option>
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>

                  {/* Message */}
                  <textarea
                    placeholder="Message"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg bg-white/90 border-0 placeholder-gray-600 text-gray-800 focus:ring-2 focus:ring-white/50 outline-none resize-none"
                    data-testid="textarea-message"
                  ></textarea>

                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <button
                      type="reset"
                      className="w-full py-3 px-4 rounded-lg bg-white/20 text-white font-medium hover:bg-white/30 transition-colors"
                      data-testid="button-reset"
                    >
                      RESET
                    </button>
                    <button
                      type="submit"
                      className="w-full py-3 px-4 rounded-lg bg-white text-[#ed2628] font-bold hover:bg-gray-100 transition-colors"
                      data-testid="button-book-now"
                    >
                      LET'S BOOK NOW
                    </button>
                  </div>
                </form>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="w-full">
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
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[666px] object-cover"
          alt="Footer"
          src="/figmaAssets/footer-1.png"
        />
      </div>
    </div>
  );
};

export default EntrexLandingPage;
