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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "#services", hasMenu: true },
  { label: "Tour Packages", href: "/employee-transportation-services" },
  { label: "Luxury Car Rentals", href: "/" },
  { label: "Clients", href: "/clients" },
  { label: "Contact Us", href: "/contact-us" },
];

const servicesMenuItems = [
  {
    title: "Corporate Mobility Solutions",
    items: [
      "Employee Transportation",
      "Employee Trips",
      "Executive Leasing",
      "Roster Planning & Routing",
      "Management Reporting",
      "Systemized Billing",
      "Transport Desk & Ticketing",
    ],
  },
  {
    title: "Event & Custom Travel",
    items: [
      "Events & Seminars",
      "Elite Weddings",
      "Family Events & Holidays",
      "Customized Tours",
    ],
  },
  {
    title: "Tour & Rental Services",
    items: [
      "Pilgrim Tours",
      "Package Tours",
      "Premium Rent-a-Cab",
      "Ticketing",
    ],
  },
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
            <span className="hidden lg:inline">
              +91 44 4953 0055&nbsp;&nbsp;|&nbsp;&nbsp;+91 98400
              27990&nbsp;&nbsp;|&nbsp;&nbsp;+91 91767 81444
            </span>
            <span className="lg:hidden">
              +91 44 4953 0055
              <br />
              +91 98400 27990
            </span>
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
                data-testid={`nav-${item.label
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                <Link
                  href={item.href}
                  className="font-medium text-white text-lg hover:text-[#f3aa45] transition-colors duration-300 whitespace-nowrap"
                >
                  {item.label}
                </Link>

                {/* Mega Menu for Services */}
                {item.hasMenu && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 px-10 py-8">
                    {/* Pointer */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45 shadow-md"></div>

                    {/* 3-Column Grid */}
                    <div className="flex gap-16">
                      {servicesMenuItems.map((section, idx) => (
                        <div key={idx} className="flex flex-col gap-3">
                          <h3 className="font-semibold text-[15px] text-[#1a1a40]">
                            {section.title}
                          </h3>
                          <ul className="space-y-2">
                            {section.items.map((subItem, i) => (
                              <li
                                key={i}
                                className="text-gray-600 text-sm hover:text-[#ed2628] transition"
                              >
                                {subItem}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
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
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md z-30"
            data-testid="mobile-menu"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item, index) => (
                <div key={index}>
                  <Link
                    href={item.href}
                    className="block py-3 px-4 text-white hover:text-[#f3aa45] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`mobile-nav-${item.label
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {item.label}
                  </Link>
                  {/* Mega Menu for Services */}
                  {item.hasMenu && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 px-10 py-8">
                      {/* Pointer */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45 shadow-md"></div>

                      {/* 3-Column Grid */}
                      <div className="flex gap-16">
                        {servicesMenuItems.map((section, idx) => (
                          <div key={idx} className="flex flex-col gap-3">
                            <h3 className="font-semibold text-[15px] text-[#1a1a40]">
                              {section.title}
                            </h3>
                            <ul className="space-y-2">
                              {section.items.map((subItem, i) => (
                                <li
                                  key={i}
                                  className="text-gray-600 text-sm hover:text-[#ed2628] transition"
                                >
                                  {subItem}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
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
                  <svg
                    className="w-12 h-8 lg:w-16 lg:h-10 text-white fill-current"
                    viewBox="0 0 64 40"
                    data-testid="car-icon"
                  >
                    <path d="M8 24h4v8H8v-8zm40 0h4v8h-4v-8zM4 16l8-8h40l8 8v16h-8v8H12v-8H4V16z" />
                  </svg>
                </div>

                {/* Main Heading */}
                <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl [text-shadow:0px_4px_27.7px_#00000040] leading-tight">
                  Premium Chauffeur
                  <br className="hidden lg:block" />
                  <span className="lg:hidden"> </span>Services for Every Journey
                </h1>

                {/* Description */}
                <p className="font-medium text-sm sm:text-base lg:text-lg leading-relaxed max-w-[400px] mx-auto lg:mx-0">
                  From corporate travel to airport transfers, ENTREX ensures a
                  safe, punctual, and comfortable ride—every time.
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
                    <div className="font-bold text-base lg:text-lg">
                      Verified
                    </div>
                    <div className="text-xs lg:text-sm opacity-90">
                      Chauffeurs
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="font-bold text-base lg:text-lg">
                      Real-time
                    </div>
                    <div className="text-xs lg:text-sm opacity-90">
                      Tracking
                    </div>
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

        {/* Certifications Section */}
            <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="text-center bg-white rounded-lg p-8 w-[280px]">
              <img
                src="/figmaAssets/itta-logo1-1.png"
                alt="ITTA"
                className="w-[275px] h-[183px] object-cover"
              />
              &nbsp;
              <p className="text-sm font-bold text-gray-800 mb-2 lg:text-left">
                Affiliations: ITTA – Indian
                Association of Tour Operators
              </p>
              <p className="text-xs text-gray-600 leading-relaxed lg:text-left">
                We offer GPS-enabled rides so you—and your loved ones—can track your journey with full transparency.
              </p>
            </div>

            <div className="relative flex-1 flex justify-center">
              <img
                src="/figmaAssets/golden-olive-foliage-branches-decorative-ornament-frame-1.png"
                alt="Certification Frame"
                className="h-100"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    Our
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    Certifications
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center bg-white rounded-lg p-8 w-[280px]">
              <img
                src="/figmaAssets/iato-1.png"
                alt="IATO"
                className="w-[275px] h-[183px] object-cover"
              />
              &nbsp;
              <p className="text-sm font-bold text-gray-800 mb-2 lg:text-left">
                Affiliations: IATO – Indian
                Association of Tour Operators
              </p>
              <p className="text-xs text-gray-600 leading-relaxed lg:text-left">
                We offer GPS-enabled rides so you—and your loved ones—can track your journey with full transparency.
              </p>
            </div>
          </div>
        </div>
      </section>
        <CallToActionSection />
        <FAQsSection />
        {/* Let's Talk Section */}
             <section className="py-16 bg-white">
               <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                 <div>
                   <h2 className="text-3xl font-bold mb-6 text-gray-900">
                     Let's Talk
                   </h2>
       
                   <div className="mb-8">
                     <h3 className="font-semibold mb-2 text-gray-900">Email</h3>
                     <p className="text-gray-600">
                       <a
                         href="mailto:bookings@entrex.in"
                         className="text-blue-600 hover:underline"
                       >
                         bookings@entrex.in
                       </a>
                     </p>
                   </div>
       
                   <div>
                     <h3 className="font-semibold mb-4 text-gray-900">Socials</h3>
                     <div className="space-y-2">
                       <div>
                         <a href="#" className="text-blue-600 hover:underline">
                           Instagram
                         </a>
                       </div>
                       <div>
                         <a href="#" className="text-blue-600 hover:underline">
                           Twitter
                         </a>
                       </div>
                       <div>
                         <a href="#" className="text-blue-600 hover:underline">
                           Facebook
                         </a>
                       </div>
                     </div>
                   </div>
                 </div>
       
                 <div>
                   <form className="space-y-6">
                     <div className="grid md:grid-cols-2 gap-4">
                       <Input placeholder="Name" className="border-gray-300" />
                       <Input
                         placeholder="Email"
                         type="email"
                         className="border-gray-300"
                       />
                     </div>
       
                     <Select>
                       <SelectTrigger className="border-gray-300">
                         <SelectValue placeholder="What service are you interested in" />
                       </SelectTrigger>
                       <SelectContent>
                         <SelectItem value="chauffeur">Chauffeur Services</SelectItem>
                         <SelectItem value="airport">Airport Transfers</SelectItem>
                         <SelectItem value="commute">Employee Commute</SelectItem>
                       </SelectContent>
                     </Select>
       
                     <Select>
                       <SelectTrigger className="border-gray-300">
                         <SelectValue placeholder="Budget" />
                       </SelectTrigger>
                       <SelectContent>
                         <SelectItem value="low">Below $500</SelectItem>
                         <SelectItem value="med">$500 - $2000</SelectItem>
                         <SelectItem value="high">Above $2000</SelectItem>
                       </SelectContent>
                     </Select>
       
                     <Textarea
                       placeholder="Message"
                       className="border-gray-300 min-h-[120px]"
                     />
       
                     <Button className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded">
                       SUBMIT
                     </Button>
                   </form>
                 </div>
               </div>
             </section>

       {/* Footer */}
      <footer className="bg-white text-gray-900 py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img
                src="/figmaAssets/background--3--1.png"
                alt="Entrex"
                className="h-12 mb-4"
              />
              <p className="text-gray-600 text-sm leading-relaxed">
                Entrex has been serving Pune for several months. Offering our
                corporate clientele, the most reliable corporate transport
                service in Pune.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Company</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    About
                  </a>
                </div>
                <div>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Features
                  </a>
                </div>
                <div>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Services
                  </a>
                </div>
                <div>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Packages
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Support</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Team Solutions
                  </a>
                </div>
                <div>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Features
                  </a>
                </div>
                <div>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Privacy and Security
                  </a>
                </div>
                <div>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Resources
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Contact</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>
                  2nd Floor, Thakor Plaza, SG No. 305-306,
                  <br />
                  Pune 411014
                </div>
                <div>bookings@entrex.in</div>
                <div>+91 44 4953 0055</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 flex justify-between items-center">
            <p className="text-gray-600 text-sm">
              Copyright © 2024 Entrex. All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default EntrexLandingPage;
