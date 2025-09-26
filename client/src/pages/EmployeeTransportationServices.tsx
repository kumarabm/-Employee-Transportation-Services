import React, { useState } from "react";
import { Link } from "wouter";
import {
  FaLaptopCode,
  FaHeadset,
  FaHeart,
  FaIndustry,
  FaUniversity,
  FaBuilding,
  FaChair,
  FaHotel,
  FaBoxOpen,
  FaLandmark,
} from "react-icons/fa";
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
import Image from "../pages/Assets/heart.png";
import { ArrowRightIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Car from "../pages/Assets/car.jpg";
import lady from "../pages/Assets/lady.jpg"

const EmployeeTransportationServices = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: "About Us", href: "/about-us" },
    { label: "Services", href: "#services", hasMenu: true },
    { label: "Tour Packages", href: "/employee-transportation-services" },
    { label: "Luxury Car Rentals", href: "/" },
    { label: "Clients", href: "/clients" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  const companyLogos = [
    { name: "Google", src: "/figmaAssets/google-logo.png" },
    { name: "Creative", src: "/figmaAssets/creative-logo.png" },
    { name: "Airbnb", src: "/figmaAssets/airbnb-logo.png" },
    { name: "Shopify", src: "/figmaAssets/shopify-logo.png" },
    { name: "Amazon", src: "/figmaAssets/amazon-logo.png" },
    { name: "Dropbox", src: "/figmaAssets/dropbox-logo.png" },
    { name: "Spotify", src: "/figmaAssets/spotify-logo.png" },
    { name: "Asana", src: "/figmaAssets/asana-logo.png" },
    { name: "Deliveroo", src: "/figmaAssets/deliveroo-logo.png" },
    { name: "Nissan", src: "/figmaAssets/nissan-logo.png" },
  ];

  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Apple",
    "Facebook",
    "Netflix",
    "Uber",
    "Airbnb",
    "Spotify",
    "Tesla",
    "Adobe",
    "Salesforce",
  ];

  // What We Offer Services - exactly as shown in uploaded design (6 services in 2x3 grid)
  const services = [
    {
      title: "Executive Chauffeur Services",
      description:
        "Discreet, professional chauffeurs for directors, VIPs, and senior leadership.",
      icon: "⚡",
    },
    {
      title: "Airport Transfers",
      description:
        "Punctual pickups and drop-offs with live flight tracking and zero waiting time.",
      icon: "🐾",
    },
    {
      title: "Employee Commute Programs",
      description:
        "Safe, app-tracked transportation for staff with route optimization and rostering.",
      icon: "🔧",
    },
    {
      title: "Expat & Guest Handling",
      description:
        "Hospitality-trained chauffeurs and multilingual support for global visitors and delegations.",
      icon: "🔒",
    },
    {
      title: "Centralized Billing & MIS Reports",
      description:
        "Transparent invoicing with detailed ride history, analytics, and corporate summaries.",
      icon: "✈️",   },
    {
      title: "App-Based Booking & Trip Management",
      description:
        "Real-time tracking, instant bookings, and secure ride monitoring via our digital platform.",
      icon: "💰",
    },
  ];

  // Who We Serve Services - exactly as shown in uploaded design (10 icons in 2x5 grid)
  const whoWeServeServices = [
    {
      title: "IT Companies",
      icon: <FaLaptopCode className="text-gray-600" size={48} />,
    },
    {
      title: "BPO & Call Centers",
      icon: <FaHeadset className="text-blue-500" size={48} />,
    },
    {
      title: "Hospitals & Clinics",
      icon: <FaHeart className="text-red-500" size={48} />,
    },
    {
      title: "Manufacturing Units",
      icon: <FaIndustry className="text-orange-500" size={48} />,
    },
    {
      title: "Colleges & Universities",
      icon: <FaUniversity className="text-blue-600" size={48} />,
    },
    {
      title: "Business Parks",
      icon: <FaBuilding className="text-blue-400" size={48} />,
    },
    {
      title: "Shared Workspaces",
      icon: <FaChair className="text-teal-500" size={48} />,
    },
    {
      title: "Hotels & Hospitality",
      icon: <FaHotel className="text-yellow-500" size={48} />,
    },
    {
      title: "Warehousing & Logistics",
      icon: <FaBoxOpen className="text-yellow-600" size={48} />,
    },
    {
      title: "Government & PSU Offices",
      icon: <FaLandmark className="text-gray-500" size={48} />,
    },
  ];

  // How It Works Steps - exactly 4 steps as shown in design
  const steps = [
    {
      number: "01",
      title: "Requirement Mapping",
      description:
        "We understand your workforce size, shifts, routes, and security requirements.",
    },
    {
      number: "02",
      title: "Deployment Plan",
      description:
        "We prepare routing plans, driver assignments, and pickup/drop schedules using AI-based planning tools.",
    },
    {
      number: "03",
      title: "Live Execution",
      description:
        "Vehicles are dispatched on time with real-time monitoring and backup protocols.",
    },
    {
      number: "04",
      title: "Transparent Billing",
      description:
        "Automated trip logs, easy reconciliation, and centralized invoicing.",
    },
  ];

  // Why ENTREX Features - exactly 6 as shown in design
  const whyEntrexFeatures = [
    {
      title: "Real-Time GPS Tracking",
      description:
        "Monitor routes, driver behavior, and vehicle status through our centralized tracking system.",
      icon: "🎯",
    },
    {
      title: "Dynamic Shift Management",
      description:
        "Auto-generated rosters based on employee shift timings, integrated with your HRMS or scheduling platform.",
      icon: "🔒",
    },
    {
      title: "Verified Chauffeurs",
      description:
        "All drivers undergo background checks, safety training, and etiquette certification.",
      icon: "🛣️",
    },
    {
      title: "PAN India Coverage",
      description:
        "Operations across Tier 1, Tier 2, and emerging metro regions — no location is out of reach.",
      icon: "👨‍🦱",
    },
    {
      title: "24×7 Control Room",
      description:
        "Round-the-clock support for routing, rescheduling, or emergency handling.",
      icon: "📅",
    },
    {
      title: "Data-Driven Reporting",
      description:
        "MIS reports, trip logs, billing summaries, and audit trails — all available via dashboard or export.",
      icon: "🚗",
    },
  ];

  // Website Benefits
  const websiteBenefits = [
    {
      title: "Hassle-free Commute",
      description:
        "Enjoy stress-free daily commuting with reliable pickup and drop-off services.",
    },
    {
      title: "Cost-Effective",
      description:
        "Affordable corporate transportation solutions that fit within your budget constraints.",
    },
    {
      title: "Best-in-class Vehicle Tracking",
      description:
        "Advanced GPS tracking technology provides real-time location updates and route optimization.",
    },
    {
      title: "Backup in case of Vehicle/Driver Non-Availability",
      description:
        "Comprehensive backup systems ensure continuous service availability without disruptions.",
    },
  ];

  // Company Logos for Trusted By section
  // const companyLogos = [
  //   { name: "Google", src: "/figmaAssets/google-logo.png" },
  //   { name: "Creative", src: "/figmaAssets/creative-logo.png" },
  //   { name: "Airbnb", src: "/figmaAssets/airbnb-logo.png" },
  //   { name: "Shopify", src: "/figmaAssets/shopify-logo.png" },
  //   { name: "Amazon", src: "/figmaAssets/amazon-logo.png" },
  //   { name: "Dropbox", src: "/figmaAssets/dropbox-logo.png" },
  //   { name: "Spotify", src: "/figmaAssets/spotify-logo.png" },
  //   { name: "Asana", src: "/figmaAssets/asana-logo.png" },
  //   { name: "Deliveroo", src: "/figmaAssets/deliveroo-logo.png" },
  //   { name: "Nissan", src: "/figmaAssets/nissan-logo.png" },
  // ];

  // FAQs
  const leftColumnFaqs = [
    {
      id: "item-1",
      question: "What is Webflow and why is it the best website builder?",
      answer:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
      isExpanded: true,
    },
    {
      id: "item-2",
      question: "What is your favorite template from BRIX Templates?",
      answer: "",
      isExpanded: false,
    },
    {
      id: "item-3",
      question: "How do you clone a template from the Showcase?",
      answer: "",
      isExpanded: false,
    },
    {
      id: "item-4",
      question: "Why is BRIX Templates the best Webflow agency?",
      answer: "",
      isExpanded: false,
    },
    {
      id: "item-5",
      question: "When was Webflow officially launched?",
      answer: "",
      isExpanded: false,
    },
    {
      id: "item-6",
      question: "How do you integrate Jetboost with Webflow?",
      answer: "",
      isExpanded: false,
    },
  ];

  const rightColumnFaqs = [
    {
      id: "item-7",
      question: "What is your favorite template from BRIX Templates?",
      answer: "",
      isExpanded: false,
    },
    {
      id: "item-8",
      question: "How do you clone a template from the Showcase?",
      answer: "",
      isExpanded: false,
    },
    {
      id: "item-9",
      question: "What is Webflow and why is it the best website builder?",
      answer:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
      isExpanded: true,
    },
    {
      id: "item-10",
      question: "Why is BRIX Templates the best Webflow agency?",
      answer: "",
      isExpanded: false,
    },
    {
      id: "item-11",
      question: "When was Webflow officially launched?",
      answer: "",
      isExpanded: false,
    },
    {
      id: "item-12",
      question: "How do you integrate Jetboost with Webflow?",
      answer: "",
      isExpanded: false,
    },
  ];

  // News & Updates
  const newsUpdates = [
    {
      id: 1,
      title: "Surviving through tough times as a first time SaaS…",
      description:
        "Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.",
      category: "BUSINESS",
      categoryColor: "bg-[#ffe9d9]",
      date: "Oct 3",
      readTime: "7 min read",
      image: "/figmaAssets/mask-group-1.png",
    },
    {
      id: 2,
      title: "SaaS customer development and no-code prototypes",
      description:
        "Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.",
      category: "MARKETING",
      categoryColor: "bg-[#d8f4fc]",
      date: "Oct 3",
      readTime: "7 min read",
      image: "/figmaAssets/image.png",
    },
    {
      id: 3,
      title: "Highnote Emerges from Stealth with $54 Million in …",
      description:
        "Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.",
      category: "ANALYTICS",
      categoryColor: "bg-[#e0f8de]",
      date: "Oct 3",
      readTime: "7 min read",
      image: "/figmaAssets/mask-group.png",
    },
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

  return (
    <div className="bg-white w-full min-h-screen">
      {/* Top Contact Bar */}
      <div className="w-full bg-gray-100 py-2 text-center text-sm text-gray-600">
        <span>+91 44 4953 0055 | +91 98400 27990 | +91 91767 81444</span>
      </div>

      {/* Header Navigation */}
      <header className="w-full bg-white shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center">
              <img
                src="/figmaAssets/background--3--1.png"
                alt="Entrex"
                className="h-12"
              />
            </div>
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
                  className="font-medium text-black text-lg hover:text-[#f3aa45] transition-colors duration-300 whitespace-nowrap"
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
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="flex items-center mb-6">
                <div>
                  <img
                    src={Image}
                    alt="Heart Icon"
                    style={{ width: "50px", height: "80px" }}
                  />
                </div>
                <div>
                  <span className="text-red-500 font-bold text-xl">
                    EMPLOYEE TRANSPORTATION SERVICES
                  </span>
                </div>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Seamless, Safe, and Smart
                <br />
                Corporate Solutions for
                <br />
                <span className="text-orange-500">Employee Commute</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your employee transportation with ENTREX's
                comprehensive corporate commute solutions. We ensure safe,
                reliable, and efficient travel for your workforce with advanced
                technology and professional service.
              </p>
            </div>

            {/* Right Column - Booking Form */}
            <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-6">
                Book Your Ride Instantly
              </h2>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border-2 border-gray-800 bg-transparent rounded-lg text-black placeholder-gray-300 focus:border-white outline-none transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-4 py-3 border-2 border-gray-800 bg-transparent rounded-lg text-black placeholder-gray-300 focus:border-white outline-none transition-all"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border-2 border-gray-800 bg-transparent rounded-lg text-black placeholder-gray-300 focus:border-white outline-none transition-all"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border-2 border-gray-800 bg-transparent rounded-lg text-black placeholder-gray-300 focus:border-white outline-none transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Number of Employees"
                    className="w-full px-4 py-3 border-2 border-gray-800 bg-transparent rounded-lg text-black placeholder-gray-300 focus:border-white outline-none transition-all"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Service Required"
                  className="w-full px-4 py-3 border-2 border-gray-800 bg-transparent rounded-lg text-black placeholder-gray-300 focus:border-white outline-none transition-all"
                />

                <textarea
                  placeholder="Tell us about your transportation requirements"
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-800 bg-transparent rounded-lg text-white placeholder-gray-300 focus:border-white outline-none resize-none transition-all"
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors duration-300 shadow-lg"
                >
                  LET'S BOOK NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What We Offer
            </h2>
            <p>
              Our services are designed to simplify business mobility while delivering consistent, comfortable, and compliant ground transportation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className={` rounded-2xl p-8 transition-all duration-300 `}
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
                >
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ENTREX for Employee Commute Section */}
      <section id="why-entrex" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
                Why ENTREX for
                <br />
                Employee Commute?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {whyEntrexFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">{feature.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8">
                <img
                  src={lady}
                  alt="Professional Car Interior"
                  className="w-full h-auto rounded-lg shadow-lg"
                  onError={(e) => {
                    e.currentTarget.src =
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTUwQzIwMCAxNzIuMDkxIDE4Mi4wOTEgMTkwIDE2MCAxOTBDMTM3LjkwOSAxOTAgMTIwIDE3Mi4wOTEgMTIwIDE1MEMxMjAgMTI3LjkwOSAxMzcuOTA5IDExMCAxNjAgMTEwQzE4Mi4wOTEgMTEwIDIwMCAxMjcuOTA5IDIwMCAxNTBaIiBmaWxsPSIjRTVFN0VCIi8+CjxwYXRoIGQ9Ik0yODAgMTUwQzI4MCAxNzIuMDkxIDI2Mi4wOTEgMTkwIDI0MCAxOTBDMjE3LjkwOSAxOTAgMjAwIDE3Mi4wOTEgMjAwIDE1MEMyMDAgMTI3LjkwOSAyMTcuOTA5IDExMCAyNDAgMTEwQzI2Mi4wOTEgMTEwIDI4MCAxMjcuOTA5IDI4MCAxNTBaIiBmaWxsPSIjRTVFN0VCIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUI5Q0EwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCI+Q2FyIEludGVyaW9yPC90ZXh0Pgo8L3N2Zz4=";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Your Website is Your Best Salesperson Section */}
      <section id="website-benefits" className="py-20">
        <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Your Website Is Your Best Salesperson
          </h2>
          <p>Choose from a wide range of well-maintained vehicles tailored for employee transportation across all business sizes and shift types.</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src={Car}
                  alt="Professional Car Service"
                  className="w-full h-auto rounded-2xl"
                  onError={(e) => {
                    e.currentTarget.src =
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjUwIiB5PSIxMDAiIHdpZHRoPSI0MDAiIGhlaWdodD0iMTAwIiByeD0iMTAiIGZpbGw9IiNFNUU3RUIiLz4KPGNpcmNsZSBjeD0iMTUwIiBjeT0iMjIwIiByPSIzMCIgZmlsbD0iIzlCOUNBMCIvPgo8Y2lyY2xlIGN4PSIzNTAiIGN5PSIyMjAiIHI9IjMwIiBmaWxsPSIjOUI5Q0EwIi8+Cjx0ZXh0IHg9IjI1MCIgeT0iMjcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUI5Q0EwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCI+UHJvZmVzc2lvbmFsIENhcjwvdGV4dD4KPC9zdmc+";
                  }}
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                {websiteBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-700">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gray-300 z-0"></div>
                )}
                <div className="relative z-10 bg-white border-2 border-orange-500 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-red-400 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    <span className="text-3xl">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-5xl font-bold text-gray-900 text-center mb-12">
            Who We Serve
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 text-center">
            {whoWeServeServices.map((service, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-gray-700 text-sm font-medium">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by Companies */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Trusted by 1500+ popular companies
          </h1>
          <p className="mx-auto mt-[-40px] w-fit font-medium text-black text-xs xs:text-base text-center tracking-[0] leading-relaxed whitespace-nowrap">
            Every ENTREX ride comes with thoughtful in-car provisions to ensure
            your comfort, safety, and satisfaction.
          </p>

          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center justify-center h-16">
                <div className="text-gray-400 font-semibold text-lg text-center">
                  {company}
                </div>
              </div>
            ))}
          </div> */}
        </div>
        <div className="w-full flex justify-center">
          <img
            className="w-[900px] h-[350px] object-contain"
            alt="Logos"
            src="/figmaAssets/logos.png"
          />
        </div>
      </section>

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
                Affiliations: ITTA – Indian Association of Tour Operators
              </p>
              <p className="text-xs text-gray-600 leading-relaxed lg:text-left">
                We offer GPS-enabled rides so you—and your loved ones—can track
                your journey with full transparency.
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
                Affiliations: IATO – Indian Association of Tour Operators
              </p>
              <p className="text-xs text-gray-600 leading-relaxed lg:text-left">
                We offer GPS-enabled rides so you—and your loved ones—can track
                your journey with full transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section id="faqs" className="py-20 bg-white">
        <div className="flex flex-col items-center max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="w-fit bg-[linear-gradient(103deg,rgba(255,156,18,1)_0%,rgba(255,0,0,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-bold text-lg tracking-[1.86px] leading-[28.0px] mb-4">
              FAQ
            </div>

            <h2 className="font-bold text-[#111827] text-3xl lg:text-5xl xl:text-[62.7px] text-center tracking-[-1.60px] leading-tight mb-6">
              Frequently Asked Questions (FAQs)
            </h2>

            <p className="font-normal text-[#111827] text-base lg:text-lg text-center tracking-[0] leading-relaxed max-w-[800px]">
              Got questions? We've got answers! Find solutions to common queries
              about our services, processes, and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-[1200px] mx-auto">
            <div className="w-full">
              <Accordion type="single" collapsible defaultValue="item-1">
                {leftColumnFaqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="border-b border-gray-300"
                  >
                    <AccordionTrigger className="text-left font-bold text-[#0093ff] data-[state=closed]:text-[#303a42] text-lg lg:text-xl tracking-[0] leading-tight hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    {faq.answer && (
                      <AccordionContent className="font-normal text-[#303a42] text-sm lg:text-base tracking-[0] leading-relaxed pb-6">
                        {faq.answer}
                      </AccordionContent>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="w-full">
              <Accordion type="single" collapsible defaultValue="item-9">
                {rightColumnFaqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="border-b border-gray-300"
                  >
                    <AccordionTrigger className="text-left font-bold text-[#0093ff] data-[state=closed]:text-[#303a42] text-lg lg:text-xl tracking-[0] leading-tight hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    {faq.answer && (
                      <AccordionContent className="font-normal text-[#303a42] text-sm lg:text-base tracking-[0] leading-relaxed pb-6">
                        {faq.answer}
                      </AccordionContent>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              News & Updates
            </h2>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {newsUpdates.map((news) => (
              <div
                key={news.id}
                className="rounded-xl border border-gray-200 overflow-hidden shadow-sm flex flex-col"
              >
                {/* Image */}
                <div className="h-40 md:h-48 bg-gradient-to-br from-blue-50 to-orange-50">
                  <img
                    src={news.image}
                    alt="Article image"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {news.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {news.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <Badge
                      className={`${news.categoryColor} text-gray-0 font-bold text-base tracking-[1.14px] [font-family:'Inter',Helvetica] rounded-[21.33px] px-4 py-2 h-8`}
                    >
                      {news.category}
                    </Badge>
                    <span>
                      {news.date} · {news.readTime}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="flex justify-center mt-10">
            <Button
              variant="ghost"
              className="text-blue-600 text-base md:text-lg font-medium hover:bg-transparent flex items-center gap-2"
            >
              View more articles
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

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
  );
};

export default EmployeeTransportationServices;
